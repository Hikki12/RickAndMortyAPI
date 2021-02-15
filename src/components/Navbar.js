import React from 'react';
import 'bulma/css/bulma.css';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            <div className="section principal__title">
                <h1 className="title has-text-centered">RICK AND MORTY API</h1>
            </div>
        )
    }
}

export default Navbar;