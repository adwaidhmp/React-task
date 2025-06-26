import { Component } from "react";

export let Welcome = function () {
    return <h1>Hello World!</h1>;
}

export class Greet extends Component{
    render(){
        return(
            <h1>Welcome to Class Component </h1>
        )
}
}