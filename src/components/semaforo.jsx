import React from 'react';

class Luces extends React.Component {
    constructor() {
        super(); this.state = {
            active: ''
        }
    }


    render(){
        return ( /*hacer evento click aki*/

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-danger rounded-circle" role="alert"></div>
                        <div className="alert alert-warning rounded-circle" role="alert"></div>
                        <div className="alert alert-success rounded-circle" role="alert"></div>
                    </div>
                </div>
            </div>
        )
    }
} export default Luces;