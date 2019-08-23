import React from 'react';
import Menu from './menu';
import {Line} from 'react-chartjs-2';

class WeightProgress extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: [],
            values: []
        };
    };

    componentDidMount(){
        fetch('http://localhost:9000/progress/weight')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr1= [];
            var newarr2 = [];
            data.forEach((obj) =>{
                newarr1.push(obj.id);
                newarr2.push(obj.weight);
            });
            this.setState({id: newarr1, values: newarr2});
            console.log(this.state.id)
            console.log(this.state.values);
        })
    }

    render(){
        var data = {
            labels: this.state.id,
            datasets: [{
                label: 'Weight',
                data: this.state.values,
                fill: false,
                lineTension: 0,
                borderColor: 'green'
            }]
        };

        const options = {
            maintainAspectRatio: true
        };
        return(<div>
            <h1 align="center" style={{backgroundColor: '#b5e9e9'}}>Lift Tracker</h1>
            <Menu />
            <Line data={data} options={options}/>
        </div>);
    }
}

export default WeightProgress;