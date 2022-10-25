import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API = "https://img.pokemondb.net/sprites/home/normal/"

class Pokecard extends Component {
    render() {
        const name = this.props.name.toLowerCase();
        let imgSrc = `${POKE_API}${name}.png`
        console.log(imgSrc);
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div Pokecard-data>Type: {this.props.type}</div>
                <div Pokecard-data>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;

