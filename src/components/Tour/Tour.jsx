import React, { Component } from 'react'
import './tour.scss'

export default class Tour extends Component {
    state = {
        showInfo: false,
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        })
    }

    render() {
        const { id, img, city, name, info } = this.props.tour
        const { removeTour } = this.props

        return (
            <section className='tour'>
                <div className='img-container'>
                    <img src={img} alt={name}/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i class="far fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3> {city} </h3>
                    <h4> {name} </h4>
                    <h5> info <span onClick={this.handleInfo}><i class="fas fa-caret-square-down" /></span> </h5>
                    {this.state.showInfo && <p> {info} </p>}                    
                </div>
            </section>
        )
    }
}
