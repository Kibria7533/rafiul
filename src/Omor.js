import React ,{useEffect,useState} from 'react';
import {
    
    useParams
  } from "react-router-dom";
  import axios from 'axios'

function Omor(props) {
    const {id}=useParams();
    const [data,setData]=useState([]);
    console.log(props)
    console.log(id)
    useEffect(async()=>{
     await axios.get('https://jsonplaceholder.typicode.com/todos').then(data=>{
          console.log(data)
   setData(data.data)
      }).catch(err=>{
          console.log(err)
      })
    },[])
    return (
        <div>
            <h1>Omor vai id name {id}</h1>
            {data.map((item,index)=>{
                return(
                    <>
                    <p>{index+1}</p>
                    <p>{item.title}</p>
                    </>
                )
            })}
        </div>
    );
}

export default Omor;