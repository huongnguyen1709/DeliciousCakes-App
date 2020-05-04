import React, { Component } from 'react';
import './sass/main.scss';
import CardContainer from './Components/Container/CardContainer'
import Message from './Components/Message/Message';

class App extends Component {
    render() {
        return (
            <div>
                <CardContainer />
                <Message />
            </div>
        );
    }
}

export default App;