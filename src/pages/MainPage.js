import React from 'react';
import InfoCards from '../components/InfoCards';
import 'bulma/css/bulma.css';
import './styles/MainPage.css';

class MainPage extends React.Component {

    state = {
        loading:true,
        error: null,
        data:{
            info:{},
            results: []
        },
        nextPage:1,
    }

    componentDidMount() {
        console.log("Mounting...")
        this.fetchCharacters();
    }

    fetchCharacters = async () =>{
        this.setState({ loading: true, error:null});

        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
            );
            const data = await response.json();
            console.log(data);
            this.setState({
                loading:false,
                data:{
                    info:data.info,
                    results: [].concat(this.state.data.results, data.results)
                },
                nextPage: this.state.nextPage + 1
            });

        } catch (error) {
            this.setState({ loading: true, error:error});
        }

    }

    render(){
        if (this.state.error) {
            return "Error!";
        }

        return( 
            <InfoCards data={this.state.data} />
        )
    }
}

export default MainPage;