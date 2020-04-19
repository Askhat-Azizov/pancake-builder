import React, { useState } from "react";
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from "../../components/PancakeBuilder/FruitsControls/FruitsControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumarry from "../../components/PancakeBuilder/OrderSummary/OrderSumarry";
const PRICES = {
  banana: 5,
  strawberry: 5,
  kiwi: 8,
  chocolate: 10,
};

export default function () {
  const [fruits, setfruits] = useState({
    banana: 0,
    strawberry: 0,
    kiwi: 0,
    chocolate: 0,
  });

  const [price, setPrice] = useState(40);
  const [order, setOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

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
    alert("You are on the checkout page");
  }

  function addFruit(type) {
    const newFruit = { ...fruits };
    newFruit[type]++;
    setfruits(newFruit);
    checkMakeOrder(newFruit);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeFruit(type) {
    if (fruits[type] >= 1) {
      const newFruit = { ...fruits };
      newFruit[type]--;
      setfruits(newFruit);
      checkMakeOrder(newFruit);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.PancakeBuilder}>
      <FruitsKit price={price} fruits={fruits} />
      <FruitsControls
        startOrder={startOrder}
        order={!order}
        addFruit={addFruit}
        removeFruit={removeFruit}
        fruits={fruits}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSumarry
          fruits={fruits}
          cancelOrder={cancelOrder}
          finishOrder={finishOrder}
          price={price}
        />
      </Modal>
    </div>
  );
}
