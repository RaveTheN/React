import { Component } from "react";
import { Welcome } from "./Welcome";

export class App extends Component {

    render(){
        return <Welcome name="Johnny" />
        //Senza alcun prop "name" passato al coomponente "Welcome", verrebbe renderizzato il contenuto
    //all'interno del tag p del componente "Welcome", ma omettendo completamente tutto il contenuto di {},
    //parentesi comprese. È possibile settare un "name" di default usando .defaultProps direttamente nel
    //componente che utilizza quella prop
    }
}