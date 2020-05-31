import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from "../../components/PancakeBuilder/FruitsControls/FruitsControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumarry from "../../components/PancakeBuilder/OrderSummary/OrderSumarry";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./PancakeBuilder.module.css";
import { useSelector } from "react-redux";


export default withErrorHandler(() => {
  const {fruits, price} = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(fruits).reduce((canOrder, fruit) => {
    return !canOrder ? fruit.quantity > 0 : canOrder;
  }, false);
 
  /*
  useEffect(() => {
    axios
      .get("/fruits.json")
      .then((response) => setFruits(response.data))
      .catch((error) => {});
  }, []);
  */

  let output = <Spinner />;
  if (fruits) {
    output = (
      <>
        <FruitsKit price={price} fruits={fruits} />
        <FruitsControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          fruits={fruits}
        />
      </>
    );
  }

  let orderSumarry = <Spinner />;
  if (isOrdering) {
    orderSumarry = (
      <OrderSumarry
        fruits={fruits}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.PancakeBuilder}>
      <h1>Pancake Builder</h1>
      {output}
      <Modal show={isOrdering}  hideCallback={() => setIsOrdering(false)}>
        {orderSumarry}
      </Modal>
    </div>
  );
}, axios);
