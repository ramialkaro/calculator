import React, { Component} from "react";

export default class Continer extends Component {
    constructor(props){
        super(props);
    
    this.state={
        inputValue:'',
        secondValue:'',
        sum:'',
        sub:'',
        div:'',
        mul:'',
    }
    this.handleValue = this.handleValue.bind(this);
    this.handleValue2 = this.handleValue2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleValue(e) { 
    this.setState({inputValue: e.target.value});        
}
handleValue2(e) { 
    this.setState({secondValue: e.target.value});        
}

handleSubmit (e){
    this.setState({
        sum:Number(this.state.inputValue) + Number(this.state.secondValue),
        sub:Number(this.state.inputValue) - Number(this.state.secondValue),
        div:Number(this.state.inputValue) / Number(this.state.secondValue),
        mul:Number(this.state.inputValue) * Number(this.state.secondValue),
        
        })
  
}

    render (){
        return(
            <div className="w-75 mx-auto">
                <p>This is coming dircetly from Continer Component</p>
                <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                   <span className="pb-1">Choose: </span> <input type="number" placeholder="choose number" className="mb-3" onChange={this.handleValue}/>
                    <input type="number"  placeholder="choose number" className="mb-3" onChange= {this.handleValue2}/>
                    <input className="btn btn-warning" type="submit" onClick={this.handleSubmit} value="Calc"/>
                </div>

                <hr></hr>
                    <p><b>Sum of numbers:</b>   { this.state.sum}</p>
                    <p><b>Sub of numbers:</b>   {this.state.sub}</p>
                    <p><b>Div of numbers:</b>   {this.state.div}</p>
                    <p><b>Mul of numbers:</b>   {this.state.mul}</p>
            </div>
        );
    }
}