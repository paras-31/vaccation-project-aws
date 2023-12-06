
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react";
export default function Homepage (){
    // const [token,setToken]=useState()
    const navi=useNavigate();
    // const clickhandle=()=>{
    //     confirm("Are you sure")
    //     navi("/login")
    // }


   
    const handleLogout = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post('http://172.31.1.75:8000/api/v1/', {
               
            }, { withCredentials: true });
    
            if (res.data.message) {
                console.log(res.data.message);
                alert(res.data.message);
                navi("/login");
            } 
        } catch (error) {
            alert("Invalid Credentials")
        }
    };
    const handleProfile=()=>{
        alert("My profile")
        navi("/profile")
    }
    return (
        <div>
            <h1 class='text-[50px]'>welocme Buddy</h1>
            <button class="px-6 py-2 bg-red-300" onClick={handleLogout}>Logout</button>
            <button class="px-6 ml-5 py-2 bg-red-300" onClick={handleProfile}>My Profile</button>
        </div>
    )
}