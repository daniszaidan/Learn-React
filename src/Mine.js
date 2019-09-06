import React from 'react';
import Child from './Child';

class Mine extends React.Component {
    constructor() {
        // console.log('constructor');
        super()
        this.state = { text: [], color: '', counter: 0 }
        this.changeColor = this.changeColor.bind(this);
        this.counterClick = this.counterClick.bind(this);
    }

    // state = {
    //     text: [],
    //     color: ''
    // }

    componentDidMount() { //digunakan untuk meng-set nilai awal dari suatu state
        // console.log('did mount');

        //jangan nge-set state di dalam render, set di dalam componentDidMount
        this.setState(
            {
                text: [
                    'Belajar React Js',
                    'Asyik',
                    'Gud Sekali'
                ],
                color: 'red'
            }
        )
    }

    changeColor = () => {
        if (this.state.color === 'red') {
            this.setState({ color: 'blue' })
        } else {
            this.setState({ color: 'red' })
        }
    }

    counterClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        // console.log('render');

        // let texts = this.state.text.map((text, index) => <Child key={index} text={text} />)
        let style = { color: this.state.color }

        return (
            <div style={style} onClick={this.changeColor}>
                <div id="mine">
                    Lil Valcon
                </div>
                <p>loremcascasca</p>

                {/* <Child text='text 1' />
                <Child text='text 2' />
                <Child text='text 3' /> */}

                {/* {texts} */}

                {this.state.text.map((text, index) => <Child key={index} text={text} counterClick={this.counterClick} />)}

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
                <br /><br />
                {this.state.counter}
            </div>
        )
    }
}

export default Mine;