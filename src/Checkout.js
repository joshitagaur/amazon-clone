import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();   
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div className='checkout__title'>
                    {user && <h3>Hello, {user.email}</h3>}
                    <h2>Your Shopping Basket</h2>
                    {basket?.map(item => (<CheckoutProduct id={item.id} price={item.price} image={item.image} title={item.title} rating={item.rating} />))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
