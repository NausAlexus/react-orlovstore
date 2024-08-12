// Компонент

import React, { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach (el => summa += Number.parseFloat(el.price))
    return(<div>
        <p>Items in cart:</p>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className='summa'>Order amount: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
};

const showNothing = () => {
    return(<div className='empty'>
        <h2>There are no products</h2>
    </div>)
};

export default function Header(props) {
  let [cardOpen, setCerdOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>Orlov Store</span>
            <ul className='nav'>
              <li>About</li>
              <li>Contacts</li>
              <li>Shop</li>
            </ul>
            <FaShoppingBag onClick={() => setCerdOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`} />

            {cardOpen && (
				<div className='shop-card'>
                    {props.orders.lenght > 0 ? showNothing() : showOrders(props)}
				</div>
			)}
        </div>
        <div className='presintation'></div>
    </header>
  )
}