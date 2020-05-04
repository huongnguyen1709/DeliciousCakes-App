import React, { useState } from 'react';

export default function CardComponent(props) {

    const [price, togglePrice] = useState(false)

    return (
        <section className={price ? "card-container grid-order" : "card-container grid"}>
            {
                price ?
                    (
                        <>
                            <section className="card-name">{props.category.name}</section>
                            <section className="price">Price: {props.category.price}€</section>
                            <section className="quantity-section">
                                <label for="quantity">Quantity:</label>
                                <input type="number" id="quantity" />
                            </section>
                            <section>
                                <button className="btn" onClick={() => togglePrice(!price)}>Back</button>
                                <button className="btn">Order</button>
                            </section>
                        </>
                    ) :
                    (
                        <>
                            <section className="top-card">
                                <img className="card-img" src={props.category.img} alt={props.category.name} onClick={() => togglePrice(!price)} />
                            </section>

                            <section className="bottom-card">
                                {props.category.name}
                            </section>
                        </>
                    )
            }
        </section>
    )
}