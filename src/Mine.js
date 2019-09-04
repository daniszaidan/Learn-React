import React from 'react'
import Child from './Child'

class Mine extends React.Component {
    render() {
        return (
            <div>
                <div id="mine">
                    Lil Valcon
                </div>
                <p>loremcascasca</p>

                <Child />
                <Child />
                <Child />
            </div>
        )
    }
}

export default Mine;