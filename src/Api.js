import React, { Component } from 'react';
import './App.css';

class Api extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ items: data, isLoading: false }))
        // kalau datanya dah di ambil, set state item berisi data dari api nya & set isloading jadi false
    }

    render() {

        const { items, isLoading } = this.state

        if (isLoading) {
            return <p>Loading...</p> // kalo masih dalam proses ngambil data dari api nya, bakal tampil loading
        }

        return (
            <div>
                <ul>
                    {items.map((item, index) => <li key={index}>{item.name}</li>)}
                </ul>
            </div>
        )
    }

}

export default Api;