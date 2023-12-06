import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


export default function Footer(){
    return(
        <div class="h-64 bg-teal-600 flex align-middle w-full">
            <div class="bg-teal-600 basis-1/3 border-r-[1.5px] ">
                <div class='py-12 px-7 text-white '>
                    <h1 class='text-3xl font-medium'>Shopkart</h1>
                    <div class='flex list-none mt-5 '>
                       <a href="#"><li class='mr-2 hover:text-[#f39e3a]'>Home</li></a>|
                       <a href="#"><li class='mr-2 ml-2 hover:text-[#f39e3a]'>Blog</li></a>|
                       <a href="#"><li class='mr-2 ml-2 hover:text-[#f39e3a]'>Pricing</li></a>|
                       <a href="#"><li class='mr-2 ml-2 hover:text-[#f39e3a]'>Contact</li></a>
                    </div>
                    <p class='mt-5'>Powered By CloudEQ</p>
            
                </div>
            </div>
            <div class="bg-teal-600 basis-1/3 border-r-2"> 
                <div class='py-12 px-7   '>
                    <div class='flex'>
                        <div class='p-2 h-9 w-9 text-xl rounded-full bg-white'>
                            <FaLocationDot/>
                        </div>
                        <div className="text-white ml-5">
                            <p>70, Industrial Area Phase I, Ind, Area, Chandigarh, 160101</p>
                        </div>
                    </div>
                    <div class='flex mt-5 '>
                        <div class='p-2 h-9 w-9 text-xl rounded-full bg-white'>
                            <IoIosPhonePortrait />
                        </div>
                        <div class='ml-5 mt-1'>
                            <p className="text-white">+91-7878789778</p>
                        </div>
                    </div>
                    <div class='flex mt-5'>
                        <div class='p-2 h-9 w-9 text-xl rounded-full bg-white'>
                            <IoIosMail/>
                        </div>
                        <div class='ml-5 mt-1'>
                            <p className="text-white">support@cloudeq.com</p>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div class="bg-teal-600 basis-1/3">
                <div class='py-9 px-7 m-auto'>
                    <h1 class='text-2xl font-medium text-white'>About the Company</h1>
                    <p class='mt-5  text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque rem at nisi atque facere neque amet deleniti, ratione illum.</p>
                    <div class='flex mt-5 text-2xl '>
                        <a href="#"><SiGmail class='p-2 h-9 w-9 text-xl rounded-full bg-white mr-3 hover:bg-[#f39e3a] hover:text-teal-600'/></a>
                        <a href="#"><IoLogoLinkedin class='p-2 h-9 w-9 text-xl rounded-full bg-white mr-3 hover:bg-[#f39e3a] hover:text-teal-600'/></a>
                        <a href="#"><MdOutlineFacebook class='p-2 h-9 w-9 text-xl rounded-full bg-white mr-3 hover:bg-[#f39e3a] hover:text-teal-600'/></a>

                    </div>
                </div>
            </div>
        </div>
    )
}