import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Item extends Component {

    constructor() {
        super();

    }


    // TODO: FIX
    // renderNotes(data) {
    //     const x = [];
    //     // this.props.notes.map(i => {
    //     //     return <div>{i}</div>
    //     // });

    //     for (let v in data) {
    //         x.push(<div>{this.props.notes[v].note}</div>);
    //     }

    //     return x;
    // }

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
            <div className="container__item shadow">22
                {this.renderNotes(this.props.notes)}
            </div>
        );
    }
}
