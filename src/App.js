import React,{useState} from 'react';
import{Table} from 'react-bootstrap'

function App(props) {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [users,setUsers]=useState([])
  const [up,setUp]=useState(false)
  const [updateble,setU]=useState("");
const formSubmit=(e)=>{
  e.preventDefault();
  if(name==""){
    alert("Please Enter Name")
    return;
  }
  if(phone==""){
    alert("Please Enter Phone")
    return;
  }
  if(email==""){
    alert("Please Enter Email")
    return;
  }
  
  let usershear=[...users];
  usershear.push({name,email,phone})
  setUsers(usershear);
  console.log(users)
  setName("");
  setEmail("");
  setPhone("");
  

}

const deleteuser=(id)=>{
  console.log(id);
 let ch=[...users]
  const filteredUsers=ch.filter((item,index)=>index!=id);
   console.log(filteredUsers)
  setUsers(filteredUsers);

}

const updateeuser=(id)=>{
  console.log(id)
  // console.log(users,'kjhjkjkh')

  const stateuser=[...users];
  const updated=stateuser.filter((item,index)=>index==id);
  console.log(updated,'iii')
  const {name,email,phone} = updated[0];
  setU(id)
setName(name)
setEmail(email)
setPhone(phone)
setUp(true)
 
}

const updatenow=(v)=>{
  let st=[...users];
  const updated=st.filter((item,index)=>index!=updateble);
 let ot=[...updated,{name,email,phone}]
  setUsers(ot)
  setName("");
  setEmail("");
  setPhone("");
  setUp(false)
}
  return (
    <div className="container">
     
      <h1 style={{justifyContent:"center",marginLeft:"300px"}}>Welcome to React Crud</h1>
      <div className="mb-3 col-md-6-offset-3 " style={{border:"2px solid black" ,justifyContent:"center"}} >
      <form onSubmit={formSubmit}>
        <input className="form-control w-20" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"></input>
        <br></br>
        <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter gmail"></input>
        <br></br>
        <input className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your phone no"></input>
        {!up && <button type="submit" style={{justifyContent:"center" ,marginLeft: "537px" ,width:"130px"}}>Save</button> }
        {up && <button type="button" onClick={()=>updatenow(updateble)} style={{justifyContent:"center" ,marginLeft: "537px" ,width:"130px"}}>Update</button>}
      </form>
      
      </div>
      
      <hr></hr>
      <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>Name</th>
      <th>Gmail</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((item,index)=>{
      return(
        <tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td><button type="button" onClick={()=>updateeuser(index)}>Edit</button>/<button type="button" onClick={()=>deleteuser(index)}>Delete</button></td>
    </tr>
       
      )
    })}
   
  </tbody>
</Table>
      </div>
    </div>
  );
}

export default App;