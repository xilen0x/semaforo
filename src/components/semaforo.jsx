import React from 'react';

className TrafficLight extends React.Component {
    constructor() {
        super(); this.state = {
            alert("hola");

        }
    }
}
render(){
    return (
        /*Estructura*/
        <div className="row">
            <div className="col">
                <div className="alert alert-danger rounded-circle" role="alert"></div>
                <div className="alert alert-warning rounded-circle" role="alert"></div>
                <div className="alert alert-success rounded-circle" role="alert"></div>
            </div>
        </div>
        /*Fin Estructura*/
    )
}