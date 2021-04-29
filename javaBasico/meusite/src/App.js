import React,{Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Rafael',
            contador:0 
        };

        this.aumentar = this.aumentar.bind(this);
    }

    aumentar(){
        let state = this.state;
       state.contador += 1;

       this.setState(state);
    }
    diminuir(){
        
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                
               <h3>
               <button onClick ={this.diminuir}>-</button>
                 {this.state.contador}
               <button onClick = {this.aumentar}>+ </button>
               </h3>
            </div>
        );
    }


}




 export default App;