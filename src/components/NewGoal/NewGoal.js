import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {

    const [enteredText , onSetTextChange] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText  
        };

        onSetTextChange('');

        props.onAddGoal(newGoal)
    };

    const changeHandler = event => {
        onSetTextChange(event.target.value);
    };

    return  <form className='new-goal' onSubmit={addGoalHandler}>
        <input type="text"  value={enteredText} onChange={changeHandler}/>
        <button type='submit'>Add Goal</button>
    </form>;
};

export default NewGoal;