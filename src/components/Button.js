import React from 'react'
import { useState } from 'react';
import Confetti from './Confetti';
const Button = () => {
    const [count1, setCount1] = useState("")
    const [count2, setCount2] = useState("")
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)

    const handleClick = () => {
        console.log("Hello");
        setCount3(count3 + 1);
        setCount1(count1 + "Kobul ");


    }
    const handleClickAgain = () => {
        console.log("Hello Again");
        setCount4(count4 + 1);
        setCount2(count2 + "Kobul ");


    }

    return (
        <>
            <div className="d-grid gap-2 col-6 mx-auto text-center my-5">
                <h1>{count1}</h1>
                <button className='btn btn-primary btn-lg active' onClick={handleClick} disabled={count3 === 3}>Bride</button>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto text-center my-5">
                <h1>{count2}</h1>
                <button className='btn btn-primary btn-lg active' onClick={handleClickAgain} disabled={count4 === 3}>Groom</button>
            </div>
            {count3 === 3 && count4 === 3 &&
                <div className="d-grid gap-2 col-6 mx-auto text-center my-5">
                    <Confetti /><h1>Congratulation! You are Married</h1></div>}
        </>
    )
}

export default Button