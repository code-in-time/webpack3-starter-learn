import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class P2 extends Component {

    render() {
        return (
            <div>
                <Link to="/">back</Link>
                <h1> {this.props.match.params.id}</h1>
            </div>
        );
    }
}


// function mapStateToProps(state) {
//     return { noteData: state.noteData}
// }

// export default connect(mapStateToProps, {fetchNotes})(App);
