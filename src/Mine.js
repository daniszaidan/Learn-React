import React from 'react';
import Child from './Child';

class Mine extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         text: []
    //     }

    //     console.log('constructor');
    // }

    state = {
        text: []
    }

    componentDidMount() {
        // console.log('did mount');

        //jangan nge-set state di dalam render, set di dalam componentDidMount
        this.setState(
            {
                text: [
                    'Belajar React Js',
                    'Asyik',
                    'Gud Sekali'
                ]
            }
        )
    }

    render() {
        // console.log('render');

        // let texts = this.state.text.map((text, index) => <Child key={index} text={text} />)

        return (
            <div>
                <div id="mine">
                    Lil Valcon
                </div>
                <p>loremcascasca</p>

                {/* <Child text='text 1' />
                <Child text='text 2' />
                <Child text='text 3' /> */}

                {/* {texts} */}

                {
                    this.state.text.map((text, index) => <Child key={index} text={text} />)
                }

                <button onClick={() => {
                    this.setState(
                        {
                            text: [
                                'Belajar Bangke',
                                'Asyik',
                                'Gud Sekali'
                            ]
                        }
                    )
                }}>Change</button>
            </div>
        )
    }
}

export default Mine;