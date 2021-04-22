import React, { useState } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';


const ButtonExample = () => {
    
    const [enteredColor, setEnteredColor] = useState('');
    const [count, setCount] = useState(0);
    const [standarColor, magicColor] = useState('');

    const colorChangeHandler = (e) => {
        setEnteredColor(e.target.value);
    };

    const clickHandler1 = () => {
        setCount(count +1)
    };
    const clickHandler2= () => {
        setCount(count -1)
    };

    const magicHandler = () => {
        magicColor('red')
    };

    const removeMagicHandler = () => {
        magicColor('')
    };
    const resetHandler = () => {
        setCount(0);
    }

    return ( 
        <Form>
          <Input
            placeholder='your favourite color'
            name='colorName'
            value={enteredColor}
            onChange={colorChangeHandler}
            />
            <Button basic color={enteredColor.toLowerCase()}>Colored button</Button>
            <Button color='grey' onClick={clickHandler1}>Click me +1</Button>
            <Button color='grey' onClick={clickHandler2}>Click me -1</Button>
            <Button onClick={resetHandler}>{count}</Button>
            <Button onClick={magicHandler}>Magic</Button>
            <Button color={standarColor} onClick={removeMagicHandler}>:)</Button>
        </Form>
    )
}
export default ButtonExample;