import React, {Component} from 'react'
import Header from './header.js'
import Formulario from './form.js'

class App extends Component {

  cotizarSeguro = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="container">
        <Header name='Cotizador de autos OnLine'></Header>
        
        <div className="container-form">
          <Formulario cotizarSeguro={this.cotizarSeguro}/>
        </div>
  
       </div>
    );
  }
}

export default App;
