import { Component } from "react";
import { Welcome } from "./Welcome";

export class App extends Component {

    render(){
        return <Welcome name="Johnny" />
        //Senza alcun prop "name" passato al coomponente "Welcome", verrebbe renderizzato il contenuto
    //all'interno del tag p del componente "Welcome", ma omettendo completamente tutto il contenuto di {},
    //parentesi comprese. Non so se è possibile settare un valore di default per "name", ma credo che il valore che 
    //assegniamo (ad esempio) in questo return, possa comunque essere cambiato in seguito.
    }
}