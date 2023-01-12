import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {

    console.log(purchase)

    const datePurchase = new Date(purchase.createdAt)

    return (
        <article style={{padding: "20px", border: "1px solid black"}}>
            <h3 className='date-purchase'>{datePurchase.toLocaleDateString()}</h3>
            <div>
                <ul>
                    {
                        purchase.cart.products.map(prod => (
                            <li className='list-purchase' key={prod.id}>
                                 <h4>{prod.title}</h4>
                                 <span className='pur-card-quantity'>{prod.productsInCart.quantity}</span>
                                 <span>{prod.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default PurchaseCard