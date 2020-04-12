import React, {useState} from 'react';
import classes from "./PancakeBuilder.module.css";
import FruitsKit from "../../components/PancakeBuilder/FruitsKit/FruitsKit";
import FruitsControls from '../../components/PancakeBuilder/FruitsControls/FruitsControls';

export default function() {
    const [fruit, setfruit] = useState({
        banana:3,
        strawberry:2,
        kiwi:3,
    });
    function addFruit(type) {
      const newFruit = {...fruit};
      newFruit[type]++;
      setfruit(newFruit);
    }
    function removeFruit(type) {
        const newFruit = {...fruit};
        newFruit[type]--;
        setfruit(newFruit);
    }

    return (
       <div className={classes.PancakeBuilder}>
           <FruitsKit fruit={fruit}/>
           <FruitsControls addFruit={addFruit} removeFruit={removeFruit} />
       </div>
    );
}