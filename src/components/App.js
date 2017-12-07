import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    constructor() {
        super();

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

export default connect(mapStateToProps)(App);
