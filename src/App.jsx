import { useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./style_paras-kamboj.css"
// import Signin from "./components/signup";
import Signup from "./components/signup";
import Signin from "./components/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./components/context";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import Profile from "./components/userProfile";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);
  // const [context, setContext] = useContext();

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Signin />}></Route>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

          xxxxx
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
