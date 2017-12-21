import React, { Component } from 'react';

export default class P2 extends Component {

    render() {
        return (
            <div>
                <h1> {this.props.match.params.id}</h1>
            </div>
        );
    }
}


// function mapStateToProps(state) {
//     return { noteData: state.noteData}
// }

// export default connect(mapStateToProps, {fetchNotes})(App);
