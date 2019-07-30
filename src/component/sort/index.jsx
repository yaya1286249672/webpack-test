import React, {Component,useState,useEffect} from 'react';
import './sort.scss';
import { resolve } from 'url';


// export default class Sortcomponent extends Component{
//     render(){
//         return (
//             <div >
//             <div className="sort-container"> 
//                     <div className="sort-item">我是分类  分类啊1234我是分类   分类啊我是分类   分类啊</div>
//                     <div className="sort-item">我是分类  分类啊1234我是分类   分类啊我是分类   分类啊</div>
//                     <div className="sort-item">我是分类  分类啊1234我是分类   分类啊我是分类   分类啊</div>

//             </div>
//             <div className="sort-subject">
//                     测试测试啊啊啊啊啊啊
//             </div>
            
//             </div>)
//     }
// }


export default function Example() {
        const [count, setCount] = useState(0);
        useEffect(() => {
                console.log('hhhh')
                // const id = setInterval(() => {
                //   setCount(count + 1);
                // }, 1000);
                // return () => clearInterval(id);
        }, [count]);
       function setCount1 (){
        //  const promiseObj = new Promise((resolve, reject) => {
        //    console.log(1);
        //    resolve();
        //    console.log(2);
        //  });
        //  promiseObj.then(() => {
        //   console.log(3);
        //  })
        //  console.log(4);
         
         Promise.all([])
        }
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 2)}>
              Click me
            </button>

            <button onClick={() => setCount1()}>
              Click me123
            </button>
          </div>
        )
      }



