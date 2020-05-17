import React, { useState, useEffect} from "react";
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from "../../components/PancakeBuilder/FruitsControls/FruitsControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumarry from "../../components/PancakeBuilder/OrderSummary/OrderSumarry"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";


const PRICES = {
  banana: 5,
  strawberry: 5,
  kiwi: 8,
  chocolate: 10,
  raspberry:5,
  mango:8,
};

export default withErrorHandler(() => {
  const [fruits, setFruits] = useState(null)
  const [price, setPrice] = useState(40);
  const [order, setOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);

    function checkMakeOrder(fruits) {
      const total = Object.keys(fruits).reduce((total, fruit) => {
        return total + fruits[fruit];
      }, 0);
      setOrder(total > 0);
    }
  
    function startOrder() {
      setIsOrdering(true);
    }
  
    function cancelOrder() {
      setIsOrdering(false);
    }
  
   
    function finishOrder() {
      const order = {
        fruits: fruits,
        price: price,
        delivery: "Fast",
        customer: {
          name: "Bakyt",
          phone: "0700700700",
          address: {
            street: "123 Gebze",
            city: "Karakol",
          },
        },
      };
  
      setLoading(true);
      axios.post("/order.json", order).then((response) => {
        setLoading(false);
        setIsOrdering(false);
      });
    }
  
    function addFruit(type) {
      const newFruit = { ...fruits };
      newFruit[type]++;
      setFruits(newFruit);
      checkMakeOrder(newFruit);
  
      const newPrice = price + PRICES[type];
      setPrice(newPrice);
    }
  
    function removeFruit(type) {
      if (fruits[type] >= 1) {
        const newFruit = { ...fruits };
        newFruit[type]--;
        setFruits(newFruit);
        checkMakeOrder(newFruit);
  
        const newPrice = price - PRICES[type];
        setPrice(newPrice);
      }
    }
    useEffect(() => {
      axios
        .get("/fruits.json")
        .then((response) => setFruits(response.data))
        .catch((error) => {});
    }, []);
  
    let output = <Spinner />;
    if (fruits) {
      output = (
        <>
          <FruitsKit price={price} fruits={fruits} />
          <FruitsControls
            startOrder={startOrder}
            order={order}
            fruits={fruits}
            addFruit={addFruit}
            removeFruit={removeFruit}
          />
        </>
      );
    }
  
    let orderSumarry = <Spinner />;
    if (isOrdering && !loading) {
      orderSumarry = (
        <OrderSumarry
          fruits={fruits}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
          price={price}
        />
      );
    }
  
    return (
      <div className={classes.PancakeBuilder}>
        {output}
        <Modal show={isOrdering} hideCallback={cancelOrder}>
         {orderSumarry}
        </Modal>
      </div>
    );
  }, axios)