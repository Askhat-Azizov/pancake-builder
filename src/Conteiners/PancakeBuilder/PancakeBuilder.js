import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from "../../components/PancakeBuilder/FruitsControls/FruitsControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumarry from "../../components/PancakeBuilder/OrderSummary/OrderSumarry";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./PancakeBuilder.module.css";


export default withErrorHandler(() => {
  const {fruits, price} = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
     load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (fruits) {
    const canOrder = Object.values(fruits).reduce((canOrder, fruit) => {
      return !canOrder ? fruit.quantity > 0 : canOrder;
    }, false);


    output = (
      <>
        <FruitsKit price={price} fruits={fruits} />
        <FruitsControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          fruits={fruits}
        />
        <Modal show={isOrdering}  hideCallback={() => setIsOrdering(false)}>
          <OrderSumarry
              fruits={fruits}
              finishOrder={() => history.push("/checkout")}
              cancelOrder={() => setIsOrdering(false)}
              price={price}
          />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.PancakeBuilder}>
      <h1>Pancake Builder</h1>
      {output}
    </div>
  );
}, axios);
