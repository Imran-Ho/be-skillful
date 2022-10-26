import React from 'react';
import {useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const items = useLoaderData()
    const {title} = items;
    console.log(items)
    return (
        <div className='checkout-sec'>
            <p>Get This Course at no cost giving your name in the following.</p>
            <br />
            <h4 className='bg-primary'>Course Name: <span>{title}</span></h4>
         <form className='checkout-form'>
            <label htmlFor="">First Name:</label>
            <input className='' type="text" placeholder='John' />
            <label htmlFor="">Last Name:</label>
            <input className='' type="text" placeholder='Cook' />
            <label htmlFor=""></label>
            <button className='btn btn-primary w-50 mt-3'>Submit</button>
         </form>
        </div>
    );
};

export default Checkout;