import React,{Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>Funcionou!</h2>
            </div>
        );
    }
}


function App(){

    return(
        <div>
            <h1>conhecao nossa equipe</h1>
            <Equipe/>
        </div>

    );
}

 export default App;