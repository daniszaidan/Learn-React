import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// Single Page Application

function Home() {
    return <h2>Halaman Home</h2>
}

function ListView() {
    return (
        // untuk menghidari error dari me-return lebih dari satu element selain menggunakan div / span
        <React.Fragment>
            <h2>Semua User</h2>

            <ul>
                <li><Link to='users/danis'>Danis</Link></li>
                <li><Link to='users/zaidan'>Zaidan</Link></li>
            </ul>
        </React.Fragment>
    )
}

function DetailView({ match }) {
    return <h2>Ini halaman {match.params.name}</h2>
}

function NoMatch() {
    return <h2>404, Halaman tidak ditemukan</h2>
}

class ReactRouter extends Component {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/users'>Users</Link> </li>
                    </nav>

                    <main>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/users' exact component={ListView} />
                            <Route path='/users/:name' exact component={DetailView} />
                            <Route component={NoMatch} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }

}

export default ReactRouter;