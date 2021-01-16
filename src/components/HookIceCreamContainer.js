import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function HooksCakeContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of ice cream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
        </div>
    )
}

export default HooksCakeContainer
