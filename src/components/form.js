import React, { Component } from 'react'

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.makeRef = React.createRef();
        this.yearRef = React.createRef();
        this.basicPlanRef = React.createRef();
        this.completePlanRef = React.createRef();
    }
    //Nota: refs son para leer los valores de los campos de un formulario


    sendForm = (e) => {
        e.preventDefault();
        //console.log(this.makeRef.current.value);
        //get data
        const selectedPlan = this.basicPlanRef.current.checked ? 'basico' : 'completo'
        /*const selectedPlan = () => {
            if (this.basicPlanRef.current.checked) {
                return 'basico'
            }
            return 'completo'
        }*/

        console.log(selectedPlan)
        //create object
        const infoCar = {
            make: this.makeRef.current.value,
            year: this.yearRef.current.value,
            plan: selectedPlan
        }

        //send it to the component
        this.props.cotizarSeguro(infoCar)

        //reset form
        e.currentTarget.reset()
    }

    render() {
        return (
            //Para cambiar el scope del this, en el submit del form se puede usar this.sendForm.bind(this) y asi cambiar el alcance del this
           
            //Para no tener que cambiar el alcance del this en cada componente que se necesite, se puede remplazar lo anterior
            //colocando la funcion sendForm como un arrow function
            <form className="cotizar-auto" onSubmit={this.sendForm}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.makeRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef }>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo" >
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basicPlanRef }/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.completePlanRef }/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}

export default Formulario