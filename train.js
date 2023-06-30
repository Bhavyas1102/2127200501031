import React , {Component} from 'react';
import "./train.css";

class train extends Component{
    constructor(props){
        super(props);
        this.state = { apiResponse: ""};

    }

    callAPI(){
        fetch("http://localhost:3000/")
            .then(res =>res.text())
            .then(res =>this.setState({apiResponse:res}))
            .catch(err => err);
    }

    componentDidMount(){
        this.callAPI();
    }

    render(){
        return (
            <div className='train'>
                <header className=''>

                </header>
               <p className='train_start'>{this.state .apiResponse}12</p>
            </div>
        )
    }
}