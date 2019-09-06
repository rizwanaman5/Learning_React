import React from 'react';
import { connect } from 'react-redux';

const ShowList = (props) => {
    console.log(props)
    
        return (
            <div>
                <ul>
                    {
                        props.info.map((items) => (
                            <li>
                                {items.todo}
                                <button style={{ marginLeft: '20px' }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    const mapStateToProps = (state) => {
        return {
            info: state.CreateList.data
        }
    }

    export default connect(mapStateToProps)(ShowList);