import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { fetchNotes } from '../actions';
import Item from './Item';
import P1 from './P1';
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
                    <Item notes={this.props.noteData}/>
                    {/* <Item />
                    <Item /> */}
                    <Switch>
                        {/* //TODO WHY does http://localhost:9001/a not work? */}
                        <Route exact path='/' component={P1}/>
                        <Route path='/:id' component={P2}/>
                        {/* <Route path='/b' component={P3}/> */}
                        {/* <Route path='/roster' component={Roster}/>
                        <Route path='/schedule' component={Schedule}/> */}
                    </Switch>
                </div>



            </div>
        );
    }
}


function mapStateToProps(state) {
    return { noteData: state.noteData}
}

export default connect(mapStateToProps, {fetchNotes})(App);
