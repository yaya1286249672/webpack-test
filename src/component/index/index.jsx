import React, {Component} from 'react';
import './home.css';
import './two.css';
import axios from 'axios';


export default class Indexcomponent extends Component{
    componentDidMount() {
    axios.get('/api/user').then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET','/api/user',true)
        // xhr.onload = function () {
        //     console.log(xhr.response)
        // }   
        // xhr.send();
    }
    render(){
        return(<div>
            哈哈,出来啦
            <button className="btn">点我点我</button>
            <div>
                <img src={require('../../img/green.jpg')} alt="" />
                <img src={require('../../img/register.png')} alt="" />
            </div>
            <div className="background-green">

            </div>
            </div>)
    }
}



