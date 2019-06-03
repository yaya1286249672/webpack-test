import React, {Component} from 'react';
import './home.css';
import './two.css';


export default class Indexcomponent extends Component{
   
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



