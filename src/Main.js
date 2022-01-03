import React, { useState, useEffect } from 'react';
import './Style/Main.css';
import {useNavigate} from 'react-router-dom'

function Main() {
    const[disable,setDisable] = useState(true);
    const[input,setInput] = useState('');
    // const[user,setUser] = useState();
    const navigate = useNavigate();
    const changeHandler = (e)=>{
        
        // setInput(e.target.value.replace(/^[0]?[789]\d{9}$/,''));
        if(input.length >= 9 && input.length < 10 && (input.charAt(0) == '6' || input.charAt(0) == '7' || input.charAt(0) == '8'
        || input.charAt(0) == '9')) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    };

    const clickHandler = (e)=> {
        e.preventDefault();
        localStorage.setItem("phone", `${input}`);
        navigate("/thankyou");
    }

    // if(user) {
    //     navigate("/thankyou");
    // }

    useEffect(()=>{
        const loggedin = localStorage.getItem("phone");
        console.log(localStorage.getItem("Phone"));
        // setUser(loggedin);
        if(loggedin) {
            navigate("/msg");
        }
    },[]);

    return (
        <div className='container'>
            <div className='man-matters'>
                <h1>man<br/><span>matters</span></h1>
                <h2>Congratulations</h2>
            </div>

            <div className='flex'>
                <h2>paytm</h2>
                <h1>GiftCard  &#8377;200</h1>
            </div>

            <div className='change'>
                <p>You have WON Paytm Gift Card of Rs 200 for<b>placing the order<br/> on Man Matters</b></p>
                <div className='number'>
                    <form>
                        <input type='text' placeholder='Enter Mobile Number' pattern='/^[0]?[789]\d{9}$/' onChange={changeHandler}></input>
                        
                        <button disabled={disable} onClick={clickHandler}>Wow! Get my Paytm Gift Card</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Main;
