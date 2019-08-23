import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from './menu';
import Bmi from './bmiCalculator';

class LiftTable extends React.Component{
    constructor(props){
        super(props);
        //this.myRef = React.createRef();
        this.state={
            benchMax: 0,
            subBenchMax: 0,
            ohpMax: 0,
            subOhpMax: 0,
            dliftMax: 0,
            subDliftMax: 0,
            squatMax: 0,
            subSquatMax: 0,
            bbrowMax: 0,
            subBbrowMax: 0,
            body: 0,
            subBody: 0,
            height: 0,
            weight: 0,
            subheight: 0,
            subweight: 0,
            bmi: 0
        };
    }
    handleOnChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit1 = (event) => {
        event.preventDefault();
        
        if (this.state.benchMax > this.state.subBenchMax){
            this.setState({subBenchMax: this.state.benchMax});
        };
            var url = 'http://localhost:9000/lifts/benchmax';
            var data = {benchm: this.state.benchMax};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
        var clear = document.getElementById(event.target.id);
        clear.reset();
    }

    handleSubmit2 = (event) => {
        event.preventDefault();
        if (this.state.ohpMax > this.state.subOhpMax){
            this.setState({ subOhpMax: this.state.ohpMax });
        };
            var url = 'http://localhost:9000/lifts/ohpmax';
            var data = {ohpm: this.state.ohpMax};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
        var clear = document.getElementById(event.target.id);
        clear.reset();
    }

    handleSubmit3 = (event) => {
        event.preventDefault();
        if (this.state.dliftMax > this.state.subDliftMax){
            this.setState({ subDliftMax: this.state.dliftMax });
        };
            var url = 'http://localhost:9000/lifts/dliftmax';
            var data = {dliftm: this.state.dliftMax};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));

        var clear = document.getElementById(event.target.id);
        clear.reset();
    }

    handleSubmit4 = (event) => {
        event.preventDefault();
        if (this.state.squatMax > this.state.subSquatMax){
            this.setState({ subSquatMax: this.state.squatMax });
        };
            var url = 'http://localhost:9000/lifts/squatmax';
            var data = {squatm: this.state.squatMax};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
        var clear = document.getElementById(event.target.id);
        clear.reset();
    }

    handleSubmit5 = (event) => {
        event.preventDefault();
        if (this.state.bbrowMax > this.state.subBbrowMax){
            this.setState({ subBbrowMax: this.state.bbrowMax });
        };
            var url = 'http://localhost:9000/lifts/bbrowmax';
            var data = {bbrowm: this.state.bbrowMax};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
        var clear = document.getElementById(event.target.id);
        clear.reset();
    }

    handleSubmit6 = (event) => {
        event.preventDefault();
        if (this.state.body> this.state.subBody){
            this.setState({ subBody: this.state.body });
        };
            var url = 'http://localhost:9000/lifts/body';
            var data = {bodyw: this.state.body};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
        var clear = document.getElementById(event.target.id);
        clear.reset();
    }


    componentDidMount(){
        fetch('http://localhost:9000/max/bench')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.bench);
            });
            console.log(Math.max(...newarr));

            this.setState({subBenchMax: Math.max(...newarr)});
        });

        fetch('http://localhost:9000/max/bbrow')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.bbrow);
            });
            console.log(Math.max(...newarr));

            this.setState({subBbrowMax: Math.max(...newarr)});
        });

        fetch('http://localhost:9000/max/dlift')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.dlift);
            });
            console.log(Math.max(...newarr));

            this.setState({subDliftMax: Math.max(...newarr)});
        });

        fetch('http://localhost:9000/max/ohp')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.ohp);
            });
            console.log(Math.max(...newarr));

            this.setState({subOhpMax: Math.max(...newarr)});
        });

        fetch('http://localhost:9000/max/squat')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.squat);
            });
            console.log(Math.max(...newarr));

            this.setState({subSquatMax: Math.max(...newarr)});
        });

        fetch('http://localhost:9000/max/weight')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newarr= [];
            data.forEach((obj) =>{
                newarr.push(obj.weight);
            });
            console.log(Math.max(...newarr));

            this.setState({subBody: Math.max(...newarr)});
        });
    }

    render() {
        return(
        <div>
        <h2 className="table_title" align="center" style={{backgroundColor: '#dcf3d0'}}>Current Training maxes</h2>
        <table className="table" style={{backgroundColor: '#dcf3d0'}}>
            <thead>
                <tr>
                    <th scope="col">Bench Press (Ib)</th>
                    <th scope="col">Over Head Press (Ib)</th>
                    <th scope="col">Deadlift (Ib)</th>
                    <th scope="col">Squat (Ib)</th>
                    <th scope="col">Barbell Row (Ib)</th>
                    <th scope="col">Body Weight (Ib)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {this.state.subBenchMax}
                    </td>
                    <td>
                        {this.state.subOhpMax}
                    </td>
                    <td>
                        {this.state.subDliftMax}
                    </td>
                    <td>
                        {this.state.subSquatMax}
                    </td>
                    <td>
                        {this.state.subBbrowMax}
                    </td>
                    <td>
                        {this.state.subBody}
                    </td>
                </tr>
                <tr>
                    <td>
                        <form id="subBenchMax" onSubmit={this.handleSubmit1}>
                            <input type="number" name="benchMax" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>
                    <td>
                        <form id="subOhpMax" onSubmit={this.handleSubmit2}>
                            <input type="number" name="ohpMax" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>
                    <td>
                        <form id="subDliftMax" onSubmit={this.handleSubmit3}>
                            <input type="number" name="dliftMax" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>

                    <td>
                        <form id="subSquatMax" onSubmit={this.handleSubmit4}>
                            <input type="number" name="squatMax" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>

                    <td>
                        <form id="subBbrowMax" onSubmit={this.handleSubmit5}>
                            <input type="number" name="bbrowMax" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>

                    <td>
                        <form id="subBody" onSubmit={this.handleSubmit6}>
                            <input type="number" name="body" onChange={this.handleOnChange}></input>
                            <input type="submit" value="Update!"></input>
                        </form>
                    </td>

                </tr>
            </tbody>
        </table>
        </div>
        );
    }
}

class Log extends React.Component{
    constructor(props){
        super(props);
        this.state={sets: [{reps: 0, weight: 0}]}
    }
    addSet = (e) => {
        this.setState((prevState) => ({
          sets: [...prevState.sets, {reps: 0, age: 0}],
        }));
      };

    handleChange = (e) => {
        let sets = [...this.state.sets];
        sets[e.target.dataset.id][e.target.className] = e.target.value;
        this.setState({ sets }, () => console.log(this.state.sets));
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return(
            
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                
                {
                    this.state.sets.map((val,idx) => {
                        let setId = `set-{$idx}`, repId = `rep-{$idx}`, weightId = `weight-{$idx}`;
                        return(
                            <div key={idx} >
                            <h6 id={setId}>{`Set #${idx + 1}`}</h6>
                            <label htmlFor={repId}>Reps</label>
                            <input
                                type="number"
                                name={repId}
                                data-id={idx}
                                id={repId}
                                className="reps"
                            />
                            <label htmlFor={weightId}>Weight(Ib)</label>
                            <input
                                type="number"
                                name={weightId}
                                data-id={idx}
                                id={weightId}
                                className="weight"
                            />
                            </div>)
                    })
                }
                
                <button onClick={this.addSet}>Add new set</button>
                <input type="submit" value="Submit" /> 
            </form>
        );
    }
}
class Gridlog extends React.Component {
    render() {
        return(
            <div style={{backgroundColor:'#ffe1d0'}}>
            <Container >
                <Row>
                    <Col align="center">Bench Press</Col>
                    <Col align="center">Over Head Press</Col>
                    <Col align="center">Deadlift</Col>
                    <Col align="center">Squat</Col>
                    <Col align="center">Barbell Row</Col>
                </Row>
                <Row>
                    <Col><Log /></Col>
                    <Col><Log /></Col>
                    <Col><Log /></Col>
                    <Col><Log /></Col>
                    <Col><Log /></Col>
                </Row>
            </Container>
            </div>
        );
    }
}

class Excerciselog extends React.Component {
    render() {
        return( 
        <div>
            <h2 align="center" style={{backgroundColor:'#ffe1d0'}}>Excercise Log</h2>
            <Gridlog />
        
        </div>
        );
    }
}

class Display extends React.Component {
    
    render() {
      return (
          <div>
              <h1 align="center" style={{backgroundColor: '#b5e9e9'}}>Lift Tracker</h1>
            <Menu />
            <LiftTable />
            <Excerciselog />
            <Bmi />
          </div>

      );
    }
  }

export default Display;