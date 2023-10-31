import React, { useState } from 'react';
import { useRef } from 'react';
import { Sum } from '../operation/Sum';
import { stringToNums } from '../helpers/stringToNums.helper';

const Calculator = (props) => {
    const inputRef = useRef(null);
    const options = [
        { value: 'green', label: 'green' },
        { value: 'yellow', label: 'yellow' },
        { value: 'sum', label: 'Sum of elements' },
    ];
    const [selectedOption, setSelectedOption] = useState('Choose operation');
    const [operationResult, setOperationResult] = useState('');

    function handleChange({ target }) {
        // console.log(123, target.value);
        // console.log('text input value', inputRef.current.value);
        let arr = stringToNums(inputRef.current.value)
        
        switch (target.value) {
            case 'sum':
                setOperationResult(Sum.perform(arr));
                break;

            default:
                break;
        }
        setSelectedOption(target.value);
    }

    return (
        <div className='calculator'>
            <h1 className="heading_large">Calculator</h1>
            <input
                ref={inputRef}
                type="text"
                id="message"
                name="message"
                placeholder="Enter list of numbers..."
            />
            <select
                value={selectedOption}
                onChange={handleChange}>
                <option value="default">{selectedOption}</option>
                {options.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
            </select>
            <hr />
            <span><b>Result: </b>{operationResult}</span>
        </div>
    );
};

export default Calculator;