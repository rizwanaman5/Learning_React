import React from 'react'

class App extends React.PureComponent {

    render() {
        let time = new Date()
        return(
            <div>
                {time}
            </div>
        )
    }
}

export default App