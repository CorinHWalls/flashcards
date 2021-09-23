
import { useHistory } from "react-router";

import React from 'react'

export const AddCardBtn = () => {

let history = useHistory();

function handleClick(){
    history.push('./addCard');
}

    return (
        <button type="button" onClick={handleClick}>
      Add Card
    </button>
    )
}

export default AddCardBtn
