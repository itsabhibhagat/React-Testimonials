import "./App.css";
import Testimonials from  "./Components/Testimonials";
import reviews from "./data";

function App() {
  return (
   <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300">
      <div className="  text-center">
        <h1 className="text-4xl font-bold ">Our Testimonials</h1>
        <div className=" bg-violet-400 h-[4px] w-1/5 mt-2 mx-auto " ></div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>

   </div>
  );
}

export default App;
