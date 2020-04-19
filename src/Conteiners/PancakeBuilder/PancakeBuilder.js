import React, { useState } from "react";
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from "../../components/PancakeBuilder/FruitsControls/FruitsControls";
const PRICES = {
  banana: 5,
  strawberry: 5,
  kiwi: 8,
  chocolate: 10,
};

export default function () {
  const [fruit, setfruit] = useState({
    banana: 0,
    strawberry: 0,
    kiwi: 0,
    chocolate: 0,
  });

  const [price, setPrice] = useState(40);

  function addFruit(type) {
    const newFruit = { ...fruit };
    newFruit[type]++;
    setfruit(newFruit);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeFruit(type) {
    if (fruit[type] >= 1) {
      const newFruit = { ...fruit };
      newFruit[type]--;
      setfruit(newFruit);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.PancakeBuilder}>
      <FruitsKit price={price} fruit={fruit} />
      <FruitsControls
        addFruit={addFruit}
        removeFruit={removeFruit}
        fruit={fruit}
      />
    </div>
  );
}
