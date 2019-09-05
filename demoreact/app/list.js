import React from 'react';
import reactDom from 'react-dom';

let friends = ['craig', 'motu', 'rituraj', 'rushyab', 'ajay', 'harika', 'maria', 'irene'];

class List extends React.Component {
    render() {
        return (
            <div>
                {friends.map((data) => (
                    <div>
                        <li>
                            {data}
                        </li>
                    </div>
                ))}


            </div>
        )
    }
}

export default List;   