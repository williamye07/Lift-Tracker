import React from 'react';

class bmiCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            height: 0,
            weight: 0,
            bmi: 0,
            message: 'You are normal'
        };
    }
    handleOnChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value}, this.calculate);

        
       
        

    };

    calculate = () => {
        const result = 703 * this.state.weight / Math.pow(this.state.height,2)
        this.setState({bmi: result})

        if (result <= 18.5){
            this.setState({message: 'You are underweight'});
        } else if (result <= 24.9) {
            this.setState({message: 'You are normal'});
        } else if (result <= 29.9) {
            this.setState({message: 'You are overweight'});
        } else {
            this.setState({message: 'You are very overweight'});
        }
    }

    render() {
        return (
            <div style={{paddingTop: '30px', paddingBottom: '30px', backgroundColor: '#fff1b5'}}>
            <h1 align="center">BMI</h1>
            <form id="bmi" onSubmit={this.handleSubmit}>
                <label for='height' style={{display: 'flex', justifyContent: 'center'}}> Height: </label>
                <div style={{display: 'flex', justifyContent: 'center'}}>  
                <input type="number" name="height" onChange={this.handleOnChange}></input>
                </div>
                <label for='weight' style={{display: 'flex', justifyContent: 'center'}}> Weight: </label>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="number" name="weight" onChange={this.handleOnChange}></input>
                </div>   
            </form>
            <div style={{display: 'flex', justifyContent: 'center'}}>BMI: {this.state.bmi}</div>
            <div style={{display: 'flex', justifyContent: 'center'}}>{this.state.message}</div>
            </div>
        )
    };
};

export default bmiCalculator;