import Home from "./Pages/Home/Home";
import {gsap,ScrollTrigger,Expo} from "gsap/all";
function App() {
  let tl = gsap.timeline()

  
  return (
    <>
      {/* <h2>Hey</h2> */}
      <Home tl={tl} Expo={Expo}/>
    </>
  );
}

export default App;
