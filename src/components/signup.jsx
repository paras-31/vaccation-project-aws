import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { mycontext } from "./context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function Signup() {
  const { state, dispatch } = useContext(mycontext);
  const [savedUser, setSavedUser] = useState();

  const navi = useNavigate();
  const clickHandle = () => {
    navi("/Login");
  };

  // useEffect(()=>{
  //   const user = JSON.parse(localStorage.getItem('UserInfo'));
  //   if(user ){
  //     setSavedUser(user)
  //   }
  // },[])

  // const handleClick = (event)=>{
  //   if(savedUser.Email === state.Email){
  //     alert("Email already registered");
  //     event.preventDefault();
  //   }else{
  //      alert("Successfully registered !!!! Thank You");
  //     localStorage.setItem("UserInfo",JSON.stringify(state))
  //     navi("/homepage")
  //   }
  // }

  //   const Register = async (e)=>{
  //     e.preventDefault();
  //    try{
  //     await axios.post('http://172.31.1.75:8000/api/v1/signup',{
  //       "username": state.FirstName,
  //       "email":state.Email,
  //       "password": state.Password
  //     });
  //     alert("Successfully Added");
  //   }
  // } catch(error){
  //   if(error.response){
  //     setMsg(error.response.data.msg);
  //   }
  // }
  // }
  const Register = async (e) => {
    e.preventDefault();
    console.log(state.FirstName);
    // console.log(state.LastName);

    console.log(state.Email);
    console.log(state.Password);

    if(state.Email=="" || state.LastName == "" || state.FirstName=="" || state.Password==""){
      alert("All Fields required")
    }else{
      let user = {
        firstName: state.FirstName,
        lastName: state.LastName,
        email: state.Email,
        password: state.Password
      }

      localStorage.setItem('user',JSON.stringify(user))
      console.log(JSON.stringify(user))

      // const res = await axios.post("http://172.31.1.75:8000/api/v1/signup", {
      //   firstName: state.FirstName,
      //   lastName: state.LastName,
      //   email: state.Email,
      //   password: state.Password,
      // });
      alert("Successfully Registered");
      navi("/login");
    }
  };

  return (
    <div class="border-solid border-2 border-teal-600 h-screen bg-teal-200 ">
      <div class="md:bg-color : bg-teal-600 (green) max-w-4xl m-auto mt-8 rounded-xl">
        <div class="md:flex items-center justify-center content-center text-center  h-[600px] max-w-4xl">
          <div>
            <div class="md:bg-color : bg-teal-600 (green) max-w-screen-md basis-2/4  h-[170px] max-w-screen border-transparent">
              <h1 class="font-bold text-4xl m-auto text-center text-white">
                Welcome back
              </h1>
              <p class="m-auto text-center mt-8 text-white px-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => clickHandle()}
                class="rounded-full  border-solid border-2 border-white  px-10 py-1 text-center text-white mt-8"
              >
                Sign In
              </button>
            </div>
          </div>
          <div class=" bg-white basis-3/4  h-full ">
            <div class=" bg-white basis-3/4  h-[400px] mt-[18%]">
              <h1 class="font-bold text-4xl m-auto text-center text-black mt-12">
                Create Account
              </h1>

              <div class=" flex first-letter:font-bold text-2xl  mt-5  justify-center">
                <a href="/">
                  <MdOutlineFacebook />
                </a>
                <a href="/" class="ml-3">
                  <IoLogoLinkedin />
                </a>
                <a href="/" class="ml-3">
                  <SiGmail />
                </a>
              </div>

              <p class="mt-3">or use your email for registration</p>
              {/* <form>
                <input
                  type="text"
                  placeholder="First Name"
                  class="mt-5 px-16  py-2 rounded-lg bg-gray-200"
                  onChange={(event)=>dispatch({type:"FirstName", payload:event.target.value})}
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="mt-5 px-16  py-2 rounded-lg bg-gray-200"
                  required
                  onChange={(event)=>dispatch({type:"LastName", payload:event.target.value})}
                />
                <br></br>
                <input
                  type="email"
                  placeholder="Email"
                  class="mt-5 px-16 py-2 rounded-lg bg-gray-200"
                  required
                  onChange={(event)=>dispatch({type:"Email", payload:event.target.value})}
                />
                <br></br>
                <input
                  type="Password"
                  name=""
                  id=""
                  placeholder="Password"
                  class="mt-5 px-16 py-2 rounded-lg  bg-gray-200 "
                  required
                  onChange={(event)=>dispatch({type:"Password", payload:event.target.value})}
                />
                <br></br>
                <button onClick={Register} class="bg-teal-600 (green) px-16 rounded-full py-2 mt-8 text-white">
                  Sign Up
                </button>
              </form> */}
              <form>
                <div class="flex flex-col gap-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      class=" px-16  py-2 rounded-lg bg-gray-200"
                      onChange={(event) =>
                        dispatch({
                          type: "FirstName",
                          payload: event.target.value,
                        })
                      }
                    />
                  </div>
                  {/* <br></br> */}
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      class=" px-16  py-2 rounded-lg bg-gray-200"
                      required
                      onChange={(event) =>
                        dispatch({
                          type: "LastName",
                          payload: event.target.value,
                        })
                      }
                    />
                  </div>

                  {/* <br></br> */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      class=" px-16 py-2 rounded-lg bg-gray-200"
                      required
                      onChange={(event) =>
                        dispatch({ type: "Email", payload: event.target.value })
                      }
                    />
                  </div>
                  {/* <br></br>
                   */}
                  <div>
                    <input
                      type="Password"
                      name=""
                      id=""
                      placeholder="Password"
                      class=" px-16 py-2 rounded-lg  bg-gray-200 "
                      required
                      onChange={(event) =>
                        dispatch({
                          type: "Password",
                          payload: event.target.value,
                        })
                      }
                    />
                  </div>
                  {/* <br></br> */}
                  <div>
                    <button
                      onClick={Register}
                      class="bg-teal-600 (green) px-16 rounded-full py-2 max-w-s text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
