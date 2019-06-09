import React, { Component } from 'react';
import './home.css';
import './two.css';
import axios from 'axios';
import add from './test';



export default class Indexcomponent extends Component {
    constructor(props){
        super(props);
        this.addValue=0;
    }
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
        console.log('add=========>',add);
        this.addValue=add(2,3);
        console.log('add(2,3)==========>',add(2,3));
    }
    render() {
        return (<div>
            哈哈,出来啦!!!
            <button className="btn" onClick={() => {
                alert(this.addValue);
                console.log('点击按钮1231121213232')
            }}>点我点我</button>
            <div>
                <img src={require('../../img/green.jpg')} alt="" />
                <img src={require('../../img/register.png')} alt="" />
            </div>
            <div className="background-green">

            </div>
        </div>)
    }
}



