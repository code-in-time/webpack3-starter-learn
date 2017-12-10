import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import Item from './Item';

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
                    <Item notes={this.props.noteData}/>
                    {/* <Item />
                    <Item /> */}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { noteData: state.noteData}
}

export default connect(mapStateToProps, {fetchNotes})(App);
