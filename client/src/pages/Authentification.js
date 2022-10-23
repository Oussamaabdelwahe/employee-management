// import { useState} from "react";
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios'
// const Authentification=(props)=>{
// const [info,setInfo]=useState({name:'',password:''})
// const [id,setId]=useState([])
// const navigate = useNavigate();
// const navigateTodash = () => {
    
//     navigate('/home');
//   };
// const login=()=>{
//     axios.post(`http://localhost:5000/api/get`,info).then((resp)=>{
//         resp.data.length===0?alert('password or user name invalid '):localStorage.setItem('id',JSON.stringify(resp.data[0].id))}).then(()=>navigateTodash()).catch((err)=>{
//             console.log(err)
//         })
// }

//     return(
//         <div className="authontification">
//         <p>GET YOUR NAME AND PASSWORD  </p>
    
        
//           <label>
//             Username: <input type="text" onChange={(e)=>{setInfo({...info,name:e.target.value})}}/>
//             Password: <input type="password" onChange={(e)=>{setInfo({...info,password:e.target.value})}} />
//           </label>
//           <button  onClick={()=>{
//             login()
//             }}>Login</button>
        
//       </div>
//     )
// }
// export default Authentification