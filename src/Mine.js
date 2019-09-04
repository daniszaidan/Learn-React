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

                <Child text='text 1' />
                <Child text='text 2' />
                <Child text='text 3' />
            </div>
        )
    }
}

export default Mine;