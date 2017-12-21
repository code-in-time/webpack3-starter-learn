import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

export default class Item extends Component {

    constructor() {
        super();
    }

    clickButton(id){
        console.log(id);
        // TODO dispatch an action so that this:
        //this.props.history.push('/fdfdfdfdfdf');
        //return this.redirect('/booking/search');
        // browserHistory.push({pathname: '/xxx'});

    }


    // TODO: FIX
    renderNotes(data) {
        const x = [];
        
        for (let v in data) {
            let itemData = this.props.notes[v];
            x.push(
                <div key={itemData.note}>
                    ({itemData.id}) {itemData.note}
                    <Link to={'/'+itemData.id} onClick={e => this.clickButton(itemData.id)} className="btn">
                        {itemData.id}
                    </Link>
                    <hr />
                </div>);
        }
        
        return x;
    }
    
    render() {
        console.log()
        
        if (JSON.stringify(this.props.notes)==='{}') {
            
            return (
                <div className="container__item shadow">
                    EMPTY
                </div>
            );
        }
        
        return (
            <div className="container__item shadow">
                {this.renderNotes(this.props.notes)}
            </div>
        );
    }
}
