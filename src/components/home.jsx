import React, {useContext, useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { mycontext } from "./context";
import { useNavigate } from "react-router-dom";
function Home() {
  const {state,dispatch} = useContext(mycontext);
  const [user,setUser]= useState(null)
  const navigator = useNavigate()

    useEffect(()=>{
        const user1 = JSON.parse(localStorage.getItem('user'));

        if(user1!=null){
            setUser(user1)
            
        }
    },[user])

    const handleLogout=()=>{
        localStorage.clear();
        setUser(null)
    }

  return (
    <div>
        <div class="container-fluid bg-danger">
        <div class="row text-center">
            <div class="col-md-6">
                <div class="top_navbar">
                    <h10>Phone no:</h10>
                        +91 8816981009
                        or 
                    <h10> email us: </h10>
                      paraskamboj454@gmail.com                
                </div>
            </div>
            <div class="col-md-6">
                <div class="top_navbar_icons">
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-facebook-f p-2"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-internet-explorer p-2"></i></a>
            </div>
            </div>
        </div>
    </div>
    
    <section>
        <div class="container-fluid bg-light">
            <div class="row text-md-center">
                <div class="col-lg-6 col-md-12 pt-3">
                    <h2>Renting <b>vacation</b></h2>
                </div>
                <div class="col-lg-6 pt-3">
                    <ul class="menu list-unstyled">
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">apartment</a></li>
                        <li><a href="#">contact</a></li>
                        <li>
                            {
                                user!= null?
                                <button onClick={handleLogout}>Logout</button>:
                                <Link to="/Login">
                                LogIn
                            </Link>
                            }
                           
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="bg_image">
        <div class="container">
            <div class="row">
                <div class="bg_image_content">
                    <div class="col">
                        <p>Welcome To the holiday package</p>
                    </div>
                    <div class="col pt-md-3">
                        <h1>Rent an appartment <br/>for your vacation</h1>
                    </div>
                    <div class="col pt-md-3">
                        <button type="button" class="btn btn-warning bg-warning">learn more</button>
                        {/* <!-- <button type="button" class="btn btn-warning bg-light">Sign In</button> --> */}
                        <a href="sign-in.html" class="btn btn-warning bg-light">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <div class="map_img">
                <img src="imagestest/map.jpg" alt=""/>
                <h4 class="pt-4">Map Direction</h4>
                <p>Even the all-powerful paintings has no control about the blind text it is an almost the unorthographic</p>
                <button type="button" class="btn btn-warning bg-secondary">read more</button>
            </div>
            </div>
            <div class="col-md-4 pt-md-0 pt-5">
                <div class="map_img">
                    <img src="imagestest/map.jpg" alt=""/>
                    <h4 class="pt-4">Services</h4>
                    <p>Even the all-powerful paintings has no control about the blind text it is an almost the unorthographic</p>
                    <button type="button" class="btn btn-warning bg-secondary">read more</button>
                </div>
            </div>
            <div class="col-md-4  pt-md-0 pt-5">
                <div class="map_img">
                    <img src="imagestest/map.jpg" alt=""/>
                    <h4 class="pt-4">Great experince</h4>
                    <p>Even the all-powerful paintings has no control about the blind text it is an almost the unorthographic</p>
                    <button type="button" class="btn btn-warning bg-secondary">read more</button>
                </div>
            </div>
        </div>
    </div>


    <div class="appartment">

        <h2 class="text-center p-5">Appartments</h2>

        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 text-md-end pt-md-0">
                    <div class="appartment_images">
                    <a href="#"><img src="imagestest/apprt.jpg" alt=""/></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 pt-md-0 ">
                <div class="appartment_images">
                <a href=""><img src="imagestest/22.jpg" alt=""/></a>
                <div class="overlay">
                    <div class="text">
                        <p class="text-center">******<br/>
                        For booking click on image
                        <br/>
                        single room<br/>
                        
                    </p>
                    </div>
                  </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 pt-md-0 text-md-end">
            <div class="appartment_images">
            <a href=""><img src="imagestest/room2.jpg" alt=""/></a>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 pt-md-0">
        <div class="appartment_images">
        <a href=""><img src="imagestest/11.jpg" alt=""/></a>
        <div class="overlay">
            <div class="text">
                <p class="text-center">******<br/>
                    For booking click on image
                    <br/>
                    family room<br/>
                </p>
            </div>
          </div>
    </div>
</div>
    </div>
    <div class="row pt-3">
        <div class="col-lg-3 col-md-6 pt-md-0 text-md-end">
            <div class="appartment_images">
            <a href=""><img src="imagestest/22.jpg" alt=""/></a>
            <div class="overlay">
                <div class="text">
                    <p class="text-center">******<br/>
                        For booking click on image
                        <br/>
                        single room<br/>
                        
                    </p>
                </div>
              </div>
        </div>
    </div>
            <div class="col-lg-3 col-md-6 pt-md-0">
                <div class="appartment_images">
                <a href=""><img src="imagestest/apprt.jpg" alt=""/></a>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 pt-md-0 text-md-end">
            <div class="appartment_images">
            <a href=""><img src="imagestest/11.jpg" alt=""/></a>
            <div class="overlay">
                <div class="text">
                    <p class="text-center">******<br/>
                        For booking click on image
                        <br/>
                        single room<br/>
                        
                    </p>
                </div>
              </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 pt-md-0">
        <div class="appartment_images">
        <a href=""><img src="imagestest/room2.jpg" alt=""/></a>
    </div>
</div>
</div>
</div>
</div>

<div class="happy_client">
<div class="container">
    <div class="row text-center">
        <div class="col">
            <h2>Happy Clients & Feedbacks</h2>
        </div>
    </div>
    <div class="row pt-5">
        <div class="col-md-4">
            <div class="row text-md-start text-center  pt-md-0 pt-4">
                <div class="col-md-6 text-md-end text-center">
                    <div class="client_img">
                        <img src="imagestest/a.jpg" alt="" class="rounded-circle"/>
                    </div>
                </div>
                <div class="col-md-6 bg-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, hic!</p>
                    <h5>henry doe</h5>
                </div>
            </div>

        </div>
        <div class="col-md-4">
            <div class="row text-md-start text-center  pt-md-0 pt-4">
                <div class="col-md-6 text-md-end text-center">
                    <div class="client_img">
                        <img src="imagestest/a.jpg" alt="" class="rounded-circle"/>
                    </div>
                </div>
                <div class="col-md-6 bg-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, hic!</p>
                    <h5>henry doe</h5>
                </div>
            </div>

        </div>
        <div class="col-md-4">
            <div class="row text-md-start text-center pt-md-0 pt-4">
                <div class="col-md-6 text-md-end text-center">
                    <div class="client_img">
                        <img src="imagestest/a.jpg" alt="" class="rounded-circle"/>
                    </div>
                </div>
                <div class="col-md-6 bg-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, hic!</p>
                    <h5>henry doe</h5>
                </div>
            </div>

        </div>
    </div>
</div>


    <div class="booknow_background mt-5">
        <div class="container">
            <div class="row">
                <div class="col pt-5 text-center">
                    <div class="booknow_title">
                    <h1>Get ready to started</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis? Ipsa error temporibus enim vero.</p>
                    <button type="button" class="btn btn-dark">book now</button>
                    <button type="button" class="btn btn-dark">contact us</button>
                </div>
            </div>
            </div>
        </div>
    </div>


    <div class="card_img_main_div" >
        <div class="container text-center mt-5">
            <h1>Latest news form our blog</h1>
            <h6>NEWS AND BLOGS</h6>
            <div class="row mt-3">
             <div class="col-md-4 pt-lg-0 pt-3 d-block text-center">
                        <div class="card">
                            <img src="imagestest/download.jpg" alt="" class="card-img img-fluid"/>
                          <div class="card-body">
                            <h4 class="pt-3">Worked Hard Party Hard in a Luxary Chalet in the Alps</h4>
                            <p>sep-5-2022 Admin
                                <i class="fa-solid fa-comment p-3"><sup>3</sup></i></p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quaerat.</span>
                          </div>
                        </div>
                    </div>

                     <div class="col-md-4 pt-lg-0 pt-3 d-block  text-center">
                        <div class="card">
                            <img src="imagestest/map.jpg" alt="" class="card-img img-fluid"/>
                          <div class="card-body">
                            <h4 class="pt-3">Worked Hard Party Hard in a Luxary Chalet in the Alps</h4>
                            <p>sep-5-2022 Admin
                                <i class="fa-solid fa-comment p-3"><sup>3</sup></i></p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quaerat.</span>
                                
                          </div>
                        </div>
                    </div>

                     <div class="col-md-4 pt-lg-0 pt-3 text-center d-block text-center">
                        <div class="card">
                            <img src="imagestest/map.jpg" alt="" class="card-img img-fluid"/>
                          <div class="card-body">
                            <h4 class="pt-3">Worked Hard Party Hard in a Luxary Chalet in the Alps</h4>
                              <p>sep-5-2022 Admin
                                <i class="fa-solid fa-comment p-3"><sup>3</sup></i></p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quaerat.</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>

        <footer class="bg-dark">
            <div class="footerstrt">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 pt-5">
                        <div class="holiday">
                            <h5>Holiday packages</h5>
                            <p class="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sunt ea enim debitis numquam beatae.</p>
                            <span><a href=""> read more
                            <i class="fa-solid fa-angles-right"></i></a></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 pt-5">
                        <div class="services">
                            <h5>Holiday packages</h5>
                            <ul class="list-unstyled pt-4">
                                <li>Map Direction</li>
                                <li>Accomodation services</li>
                                <li>Great Experince</li>
                                <li>Perfect Central location</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 pt-5">
                        
                            <h5>Holiday packages</h5>
                            <div class="cloud pt-4">
                            <button type="button" class="btn btn-light">appartment</button>
                            <button type="button" class="btn btn-light">home</button>
                            <button type="button" class="btn btn-light mt-lg-3">vacation</button>
                        </div>
                        <button type="button" class="btn btn-light mt-3">rent</button>
                        <button type="button" class="btn btn-light mt-3">house</button>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 pt-5">
                        <h5>Subscribe</h5>
                        <div class="subscribe pt-4">
                        <input type="text" placeholder="Enter YOUR EMAIL" class="bg-dark"/>
                        <i class="fa-thin fa-paper-plane-top"></i>
                        <h6 class="pt-5">follow more</h6>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f p-3"></i>
                        <i class="fa-brands fa-instagram p-3"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="end">
        <div class="copyright_content">
            <div class="copyright_content_data">
                <div class="copyright_text"><p> Lorem ipsum dolor, sit amet consectetur adipisicing.</p></div>
                <div class="copyright_link">
                    <a href="##">Terms</a>
                    <a href="##">Privacy</a>
                    <a href="##">Condition</a>
                
                </div>
            </div>
           </div>
    </div>
    </div>
  );
}
 
export default Home;