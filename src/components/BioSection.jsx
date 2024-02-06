import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import jsondat from "../main.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function BioSection() {

  // -----------------------------------------importing data-----------------------------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata = async () => {
    await axios.get('https://thejus-joseph.onrender.com').then((res) => {
      setData(res.data[0].biography);
      // console.log(res.data[0].biography)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  //--------------------------------------------------------------------------------------------------


  // const data = jsondat.biography;

  const sliderRef = useRef(null);
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
  };
  const nav = useNavigate();
  return (
    <div className="my-[12vw] md:my-[4vw] lg:m-0 ">
    {data&&


        // <div className="flex items-center justify-center md:flex-row flex-col px-20 md:m-20 m-5">
        //   <div className="flex-1">
        //     <div className="text-3xl">Biography</div>
        //     <div className="md:w-10/12 w-full my-12 ">{data.description}</div>
        //     <div className="mb-10 " to={"/about"}>
        //       <span
        //         className="cursor-pointer text-white mt-5 m-auto px-6 py-3 bg-[#fc9351] rounded-lg"
        //         onClick={() => nav("/about")}
        //       >
        //         Read More
        //       </span>
        //     </div>
        //   </div>
        //   <div className="flex-1 bg-[#f5f6f0]  relative ">
        //     <hr className="absolute  w-10/12 top-1/3 left-0 right-0 m-auto " />
        //     <hr className="absolute  w-10/12 top-2/3 left-0 right-0 m-auto" />
        //     <div style={{ width: "80vh" }}>

        //       {/* <Slider className="h-full" ref={sliderRef} {...settings}>
        //         <div>
        //           <div className=" flex items-center justify-around p-5">
        //             <div
        //               style={{ width: "25vh", height: "15vh" }}
        //               className="overflow-hidden relative m-5"
        //             >
        //               <img
        //                 className="w-full h-full object-cover object-center"
        //                 src="https://picsum.photos/200/300"
        //                 alt=""
        //               />
        //             </div>
        //             <div className="w-2/4 p-5">
        //               WINCLOUD CHITCHAT with FiiRE Goa
        //             </div>
        //             <div className="rounded-full p-2  border-2 border-[#fc9351]">
        //               <GoArrowUpRight color="#fc9351" size={20} />
        //             </div>
        //           </div>
        //         </div>
        //         <div>
        //           <div className=" flex items-center justify-around p-5">
        //             <div
        //               style={{ width: "25vh", height: "15vh" }}
        //               className="overflow-hidden relative m-5"
        //             >
        //               <img
        //                 className="w-full h-full object-cover object-center"
        //                 src="https://picsum.photos/200/300"
        //                 alt=""
        //               />
        //             </div>
        //             <div className="w-2/4 p-5">
        //               #FiiRE | Introducing the #FiiRE Ecosystem
        //             </div>
        //             <div className="rounded-full p-2  border-2 border-[#fc9351]">
        //               <GoArrowUpRight color="#fc9351" size={20} />
        //             </div>
        //           </div>
        //         </div>
        //         <div>
        //           <div className=" flex items-center justify-around p-5">
        //             <div
        //               style={{ width: "25vh", height: "15vh" }}
        //               className="overflow-hidden relative m-5"
        //             >
        //               <img
        //                 className="w-full h-full object-cover object-center"
        //                 src="https://picsum.photos/200/300"
        //                 alt=""
        //               />
        //             </div>
        //             <div className="w-2/4 p-5">
        //               How Tourism Tech shall shape the Tourism of Goa?
        //             </div>
        //             <div className="rounded-full p-2  border-2 border-[#fc9351]">
        //               <GoArrowUpRight color="#fc9351" size={20} />
        //             </div>
        //           </div>
        //         </div>
        //         <div>
        //           <div className=" flex items-center justify-around p-5">
        //             <div
        //               style={{ width: "25vh", height: "15vh" }}
        //               className="overflow-hidden relative m-5"
        //             >
        //               <img
        //                 className="w-full h-full object-cover object-center"
        //                 src="https://picsum.photos/200/300"
        //                 alt=""
        //               />
        //             </div>
        //             <div className="w-2/4 p-5">
        //               WINCLOUD CHITCHAT with FiiRE Goa
        //             </div>
        //             <div className="rounded-full p-2  border-2 border-[#fc9351]">
        //               <GoArrowUpRight color="#fc9351" size={20} />
        //             </div>
        //           </div>
        //         </div>
        //       </Slider> */}

        //       <Slider className="h-[75vh] overflow-hidden" ref={sliderRef} {...settings}>
        //         {data.items.map((item, index) => (
        //           <div key={index}>
        //             <div className="flex items-center justify-around p-5">
        //               <div style={{ width: '25vh', height: '15vh' }} className="overflow-hidden relative m-5">
        //                 <img className="w-full h-full object-cover object-center" src={item.image} alt="" />
        //               </div>
        //               <div className="w-2/4 p-5">{item.description}</div>

        //               <a href={item.link} target="_blank">
        //               <div className="rounded-full p-2 border-2 border-[#fc9351]">  
        //                 <GoArrowUpRight color="#fc9351" size={20} />
        //               </div>
        //               </a>
        //             </div>
        //           </div>
        //         ))}

        //       </Slider>

        //     </div>
        //   </div>
        // </div>




        <div className="flex items-center justify-center md:flex-row flex-col px-2 md:px-20  lg:m-20 m-3 bg-red-00" >
          <div className="flex-auto bg-green-00 w-[90vw]  justiify">
            <div className=" text-4xl md:text-4xl lg:text-3xl">Biography</div>
            <div className="xl:w-10/12 md:w-[35vw] w-full my-16 text-[2.8vw] md:text-lg lg:text-md ">{data.description}</div>
            <div className="mb-10 " to={"/about"}>
              <span
                className="cursor-pointer text-white mt-5 m-auto px-6 py-3 bg-[#fc9351] rounded-lg"
                onClick={() => nav("/about")}
              >
                Read More
              </span>
            </div>
          </div>
          <div className="flex-auto bgz-[#f5f6f0] relative  bg-blue-00">
            <hr className="absolute w-10/12 top-1/3 left-0 right-0 m-auto " />
            <hr className="absolute w-10/12 top-2/3 left-0 right-0 m-auto" />


            <div className="px-2 overflow-hidden md:w-[60vh] w-[90vw] lg:w-[80vh]" >

              <Slider className=" overflow-hidden" ref={sliderRef} {...settings}>
                {data.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center md:justify-around justify-start p-5  md:bg-[#867e7900] bg-[#867e7943] ">
                      <div style={{ width: '25vh', height: '15vh' }} className="overflow-hidden relative m-5">
                        <img className="w-full h-full object-cover object-center" src={item.image} alt="" />
                      </div>
                      <div className="w-2/4 p-5">{item.description}</div>
                      <a href={item.link} target="_blank">
                        <div className="rounded-full p-2 border-2 border-[#fc9351]">
                          <GoArrowUpRight color="#fc9351" size={20} />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>







    }
    </div>

  );
}

export default BioSection;
