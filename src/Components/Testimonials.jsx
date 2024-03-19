import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonials=(props)=>{
    let reviews=props.reviews;
    const [index,setindex]=useState(0);

    function leftshifthandler(){
        if(index-1 < 0){
            setindex(reviews.length - 1);
        }
        else{
            setindex(index-1);
        }
    }

    function rightshifthandler(){
        if(index+1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }

    function surprisehandler(){
        let randomindex=Math.floor(Math.random()*reviews.length);
        setindex(randomindex);
    }

    return (
        <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center shadow-sm
        mt-10 p-10 transition-all duration-400 hover:shadow-lg">
            <Card review={reviews[index]}></Card>

            <div className=" text-center mt-8 space-x-3">
                <button className=" text-violet-400 text-3xl cursor-pointer hover:text-violet-500"
                onClick={leftshifthandler}>
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button className=" text-violet-400 text-3xl cursor-pointer hover:text-violet-500"
                onClick={rightshifthandler}>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div >
                <button
                onClick={surprisehandler}
                className=" text-center bg-violet-400 transition-all duration-200 
                hover:bg-violet-500 px-10 py-2 rounded-md font-bold cursor-pointer text-white mt-2">Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;