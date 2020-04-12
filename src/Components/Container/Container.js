import React, { Component } from 'react';
import '../../sass/main.scss';

import CardComponent from '../Card/Card';

import StrawberryCake from '../../Assets/Icons/StrawberryCake.jpg';
import FruitCake from '../../Assets/Icons/FruitCake.jpg';
import WhitechocolateCake from '../../Assets/Icons/WhitechocolateCake.jpg';
import MatchaCake from '../../Assets/Icons/MatchaCake.jpg';
import ChocolateCake from '../../Assets/Icons/ChocolateCake.jpg';
import OrangeCake from '../../Assets/Icons/OrangeCake.jpg';


class ContainerComponent extends Component {

    state = {
        categories: [
            {
                name: "Strawberry cake",
                img: StrawberryCake,
                price: 5
            },

            {
                name: "Fruit cake",
                img: FruitCake,
                price: 6
            },

            {
                name: "White Chocolate cake",
                img: WhitechocolateCake,
                price: 4
            },

            {
                name: "Japannese Matcha cake",
                img: MatchaCake,
                price: 7
            },

            {
                name: "Chocolate cake",
                img: ChocolateCake,
                price: 8
            },

            {
                name: "Orange cake",
                img: OrangeCake,
                price: 8
            },

        ]
    }

    render() {
        return (
            <section className="menu-container">

                <div className="bars"></div>

                <section className="top">
                    Categories
                </section>

                <section className="bottom">
                    {
                        this.state.categories.map(category => {
                            return <CardComponent category={category} />
                        })
                    }
                </section>

            </section>
        )
    }
}

export default ContainerComponent;