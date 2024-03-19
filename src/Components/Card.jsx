import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props){
    let review =props.review;
    return (
        <div className=" md:relative flex flex-col  ">
            <div className=" absolute top-[-7rem] z-[10]  mx-auto ">
                <img src={review.image} 
                className=" aspect-square rounded-full w-[140px] h-[140px] "></img>
                <div className=" absolute w-[140px] h-[140px] rounded-full bg-violet-500 
                top-[-0.4rem] right-[-0.6rem] z-[-10]"></div>
            </div>

            <div className=" text-center mt-7">
                <p className=" font-bold text-2xl tracking-wider ">{review.name}</p>
            </div>

            <div className=" text-center mt-1">
                <p className=" text-violet-300 text-sm">{review.job}</p>
            </div>

            <div className=" text-center text-violet-400 mx-auto mt-5">
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className=" text-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div className=" text-center text-violet-400 mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>

           
        </div>
    )
}
export default Card;