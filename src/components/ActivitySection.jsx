import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import jsondat from "../main.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function ActivitySection({ ActivitiesRef }) {


  // -----------------------------------------importing data-----------------------------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata = async () => {
    await axios.get('http://localhost:443/').then((res) => {
      setData(res.data[0].ActivitySection);
      // console.log(res.data[0].ActivitySection)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  //--------------------------------------------------------------------------------------------------



  // const data = jsondat.ActivitySection;

  const sliderRef = useRef(null);
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 2000,
  //   arrows: false,
  // };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (

    <div className="my-16 bg-[#f5f6f0]  b-green-00 xl:px-28 py-6">

      {data &&

        <>

          <div className="flex items-start justify-start text-4xl  m-8 md:hidden">
            Activities
          </div>






          <div ref={ActivitiesRef} className="flex flex-col md:flex-row w-full md:my-0 my-16 items-center justify-evenly bg-blue-00 " >



            <div className=" items-center justify-center hidden b-blue-900 md:flex md:w-[30%] lg:w-[28%] xl:w-[35%] xl:justify-start">

              <div className=" flex-col  items-center justify-center  md:flex bg-red-00 xl:pl-20">
                <div className=" text-3xl hidden md:block">Activities</div>
                <div className="text-sm mt-10">Next/prev</div>
                <div className="flex gap-2 mt-5">
                  <div
                    onClick={goToPrevSlide}
                    className="rounded-full p-2 cursor-pointer border-2 border-[#fc9351]"
                  >
                    <FaArrowLeft color="#fc9351" size={20} />
                  </div>
                  <div
                    onClick={goToNextSlide}
                    className="rounded-full p-2 cursor-pointer border-2 border-[#fc9351]"
                  >
                    <FaArrowRight color="#fc9351" size={20} />
                  </div>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-center w-[90%] md:w-[70%] lg:w-[72%]  xl:w-[65%] flex-none bg-red-00 ">
              <Slider className="w-[100%]  bg-green-00" ref={sliderRef} {...settings}>
                {data?.map((e, i) => {
                  return (
                    <div key={i} className="bgd-red-800">

                      <div className="  flex flex-col gap-5 bgd-yellow-00">

                        <div className="flex justify-center items-center bg-green-00 p-1 ">
                          
                          <div className=" 
                          shadow-2xl transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 rounded-sm overflow-hidden">
                            <img
                              style={{ height: "35vh", width: "50vh" }}
                              src={e.img}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="flex justify-center ">

                        <div className="  text-justify text-clip w-[50vh] ">
                          {e.content.length > 500
                            ? e.content.slice(0, 500) + "..."
                            : e.content}
                        </div>
                        
                        </div>



                        {/* <div className=" py-2 text-[#fc9351] text-sm flex items-center gap-2">
                          Read More
                          <GoArrowRight />
                        </div> */}


                      </div>

                    




                    </div>
                  );
                })}
              </Slider>
              
              {/* <Slider className="w-3/5 " ref={sliderRef} {...settings}>
            {data?.map((e, i) => {
              return (
                <div>
                  <div style={{ width: "50vh" }} className="mx-10 m-5">
                    <img
                      style={{ height: "35vh", width: "50vh" }}
                      src={e.img}
                      alt=""
                    />

                    <div className="text-justify mt-5">{e.content}</div>
                    <div className=" py-2 text-[#fc9351] text-sm flex items-center gap-2">
                  Read More
                  <GoArrowRight />
                </div>
                  </div>
                </div>
              );
            })}
          </Slider> */}


            </div>







          </div>


        </>

      }
    </div>



  );
}

export default ActivitySection;


//   style={{ height: "60vh" }

{/* <div className="flex">
{[1, 2].map((journey) => {
return (
  <div style={{ width: "50vh" }} className="mx-10 m-5">
    <img
      style={{ height: "35vh", width: "50vh" }}
      src="https://picsum.photos/500"
      alt=""
    />

    <div className="text-justify mt-5">
      This is a quitting story.In June 2020, after a lot of
      discussions and deliberations I decided to quit the idea of
      TourismTech. I spoke to all the stakeholders in Tourism
      Industry. Startups were also skeptical about this initiative and
      its timing.…
    </div>
    <div className=" py-2 text-[#fc9351] text-sm flex items-center gap-2">
      Read More
      <GoArrowRight />
    </div>
  </div>
);
})}
</div> */} 