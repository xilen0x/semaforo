import React from 'react';

class Luces extends React.Component {
    constructor() {
        super();
        this.state = {
            estadoactualR: 'off',
            estadoactualA: 'off',
            estadoactualV: 'off'
        }
    }

    cambiaColor = e => {
        if (e.target.id == 'idRojo') {
            this.setState({
                estadoactualR: 'on',
                estadoactualA: 'off',
                estadoactualV: 'off'
            })
        } else if (e.target.id == 'idAmarillo') {
            this.setState({
                estadoactualA: 'on',
                estadoactualR: 'off',
                estadoactualV: 'off'
            })
        } else if (e.target.id == 'idVerde') {
            this.setState({
                estadoactualV: 'on',
                estadoactualR: 'off',
                estadoactualA: 'off'
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="idRojo" className={"alert " + (this.state.estadoactualR == 'on' ? 'alert-danger1' : 'alert-danger ') + " rounded-circle"}
                            onClick={e => this.cambiaColor(e)} ></div>

                        <div id="idAmarillo" className={"alert " + (this.state.estadoactualA == 'on' ? 'alert-warning1' : 'alert-warning ') + " rounded-circle"}
                            onClick={e => this.cambiaColor(e)}></div>

                        <div id="idVerde" className={"alert " + (this.state.estadoactualV == 'on' ? 'alert-success1' : 'alert-success ') + " rounded-circle"}
                            onClick={e => this.cambiaColor(e)}></div>
                    </div>
                </div>
            </div>
        )
    }
} export default Luces;