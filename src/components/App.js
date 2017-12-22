import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { fetchNotes } from '../actions';

import Item from './Item';
// import P1 from './P1';
import P2 from './P2';


class App extends Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        console.log(this.props.noteData);

        return (
            <div>
                <h1>Items in your list</h1>
                <div className="container">
                    {/* <Item notes={this.props.noteData}/> */}
                    {/* <Item />
                    <Item /> */}
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' render={() => <Item notes={this.props.noteData}/> } />
                            <Route path='/:id' component={P2}/>
                        </Switch>
                    </BrowserRouter>
                </div>



            </div>
        );
    }
}


function mapStateToProps(state) {
    return { noteData: state.noteData}
}

export default connect(mapStateToProps, {fetchNotes})(App);
