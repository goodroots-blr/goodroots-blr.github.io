import React, {useState} from 'react';
import './Stepper.scss';

const Stepper = ({onStepper}) => {
    const [count, setCount] = useState(1)
    const handleClick = (type) => {
        if(type=="add") {
            setCount(count + 1)
        }
        if(count > 1 && type=="sub") {
            setCount(count - 1)
        }
        onStepper(count)
    }
    return (
        <div className="stepper">
            <button onClick={() => handleClick('sub')}>-</button>
            <span className="text">{count}</span>
            <button onClick={() => handleClick('add')}>+</button>
        </div>
    );
};

export default Stepper;