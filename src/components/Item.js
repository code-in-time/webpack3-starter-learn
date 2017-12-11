import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Item extends Component {

    constructor() {
        super();
    }

    clickButton(id){
        console.log(id);
        // TODO dispatch an action so that this:
    }


    // TODO: FIX
    renderNotes(data) {
        const x = [];
        
        for (let v in data) {
            let itemData = this.props.notes[v];
            x.push(
                <div key={itemData.note}>
                    ({itemData.id}) {itemData.note}
                    <button onClick={e => this.clickButton(itemData.id)} className="btn">
                        {itemData.id}
                    </button>
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
