import React from 'react';
import 'bulma/css/bulma.css';
import './styles/InfoCards.css'
class InfoCards extends React.Component {
    
    render() {
        return(
            <div className="section">
                <div className="columns is-multiline">
                    
                    {this.props.data.results.map( (character) => (
                         
                        <div className="column is-6" key={character.id}>
                            <div className="infocard">
                                <div className="infocard__avatar">
                                    <img src={character.image} alt="" className="infocard__avatar-image"/>
                                 </div>
                                <div className="infocard__info">
                                    <div className="infocard__character">
                                        <h1 className="infocard__character-name">{character.name}</h1>
                                        <div className="infocard__character-status">
                                            
                                            {character.status == "Alive" &&
                                                <span className="character__status-on"></span>
                                            }

                                            {character.status == "Dead" &&
                                                <span className="character__status-off"></span>
                                            }
                                            
                                            {character.status == "unknown" &&
                                                <span className="character__status-none"></span>
                                            }

                                            <h2 className="character__status-value">{character.status}</h2>
                                            
                                        </div>
                                    </div>
                                    <div className="infocard__info-variables">
                                        <div className="infocard__info-variable">Last known location: </div>
                                        <div className="infocard__info-value">{character.location.name}</div>
                                        <div className="infocard__info-variable">First seen in: </div>
                                        <div className="infocard__info-value">{character.location.name}</div>
                                    </div>
                                </div>

                            </div>
                        </div>   

                    ))}
                </div>
            </div>

        )
    }
}

export default InfoCards;