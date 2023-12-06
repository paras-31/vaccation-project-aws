import { useState ,useEffect} from "react";
import axios from 'axios'

export default function Profile() {

    const [userInfo,setUserInfo]=useState({userDetails: {firstName:'',lastName:'',email:''}})
  useEffect(() => {
    const AT = localStorage.getItem('AT');
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://172.31.1.75:8000/api/v1/user/details', {
          headers: {
            auth: AT,
          },
        });

        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

console.log(userInfo)

 
  return (
    <div>
      <div class="flex bg-teal-100 h-[500px] max-w-4xl m-auto  rounded-2xl shadow-2xl mt-12">
        <div class="bg-white basis-1/3 pt-8">
          <div class="h-48  rounded-full  shadow-2xl max-w-[200px] m-auto bg-contain bg-no-repeat bg-[url('https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg')]"></div>
          <div class="text-center">
            <button class="m-auto bg-blue-400 px-8 mt-5 rounded-full gap-5 text-center py-1">
              Connect to linkedIn 
            </button>
          </div>
        </div>
        <div class="bg-teal-600 basis-2/3 pt-12 rounded-r-2xl">
          <div class=" text-4xl max-w-md  m-auto">
            <h1 class="font-bold text-white">My Profile</h1>
            <div class="grid grid-cols-2 gap-5 mt-5 ">
              <div>
                <label
                  class="block text-white text-sm font-bold "
                  for="username"
                >
                 First Name
                </label>
                <input
                  class="shadow pl-2 appearance-none font-bold border rounded-md w-full text-sm cursor-not-allowed py-1"
                  id="username"
                  type="text"
                  placeholder=""
                  value={userInfo.userDetails.firstName.toUpperCase()}
                  
                />
              </div>
              <div>
                <label
                  class="block text-white text-sm font-bold"
                  for="username"
                >
                  Last Name
                </label>
                <input
                  class="shadow appearance-none pl-2 border font-bold rounded-md w-full cursor-not-allowed text-sm py-1"
                  id="username"
                  type="text"
                  placeholder=""
                  value={userInfo.userDetails.lastName.toUpperCase()}
                
                />
              </div>
              <div>
                <label
                  class="block text-white text-sm font-bold"
                  for="username"
                >
                  Time Zone
                </label>
                <input
                  class="shadow appearance-none pl-2  border font-bold rounded-md w-full text-sm py-1 cursor-not-allowed"
                  id="username"
                  type="text"
                  placeholder="UTC+5:30"
                  value=""
                />
              </div>
              <div>
                <label
                  class="block text-white text-sm font-bold"
                  for="username"
                >
                  Phone No 
                </label>
                <input
                  class="shadow appearance-none pl-2 border font-bold rounded-md w-full cursor-not-allowed text-sm py-1"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="mt-4">
                <label
                  class="block text-white text-sm font-bold"
                  for="username"
                >
                 Email Address 
                </label>
                <input
                  class="shadow appearance-none border pl-2 font-bold rounded-md w-full text-sm   cursor-not-allowed  py-1"
                  id="username"
                  type="text"
                  placeholder=""
                  value={userInfo.userDetails.email.toUpperCase()}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
