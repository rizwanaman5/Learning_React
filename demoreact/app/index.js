// ES6 syntax for requiring modules
import React from 'react';
import ReactDom from 'react-dom';
import List from './list';

let friends = ['craig', 'motu', 'rituraj', 'rushyab', 'ajay', 'harika', 'maria', 'irene'];

function randFriend() {
    let index =  Math.floor(Math.random() * friends.length);
    return friends[index];
}

class App extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <h1>
                        Hello World
                </h1>
                    <h1>
                        Hello again....
                </h1>
                <List/>

                <h1> Random friends </h1>
                {randFriend()}
                </center>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)