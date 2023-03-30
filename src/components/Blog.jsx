import "../components/App.css";
import React, { useState } from "react";
import Data from "../components/articleData";
import Slider from "react-slick";

function Blog(){
    const [dataIndex,setDataIndex]= useState(0)
const setting={
    className: "slider variable-width",
    infinite:true,
    dots:false,
    lazyload:true,
    speed:400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    beforeChange:(current,next)=>setDataIndex(next),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            dots:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]

}


    return (
        <div id="carousel">
        <h1 style={{textAlign:"center",
        margin:"0px",padding:"15px 0px"}}>The <span>180 DC</span> Blog</h1>
                <Slider {...setting}>
        {Data.map((elem,index)=>{
            return(
            <div className={index===dataIndex ? "slide activeSlide" : "slide"} style={{ width: "180px" }}>
            <h2>{elem.headline}</h2>
            <p id="author">Author : {elem.author}</p>
            <p>{elem.content}</p>
            </div>
            )
        })}
            </Slider>
    
        </div>
    ) 
}

export default Blog;