import React, {Component} from 'react';
const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div Pokecard-data>Type: {this.props.type}</div>
                <div Pokecard-data>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;