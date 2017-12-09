import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

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
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { noteData: state.noteData}
}

export default connect(mapStateToProps, {fetchNotes})(App);
