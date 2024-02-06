import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import jsondat from "../main.json";
import axios from "axios";

function BlogSection({ MeditationRef }) {


  // -----------------------------------------importing data-----------------------------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata = async () => {
    await axios.get('http://localhost:443/').then((res) => {
      setData(res.data[0].blogSection);
      // console.log(res.data[0].blogSection)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  //--------------------------------------------------------------------------------------------------


  // const data = jsondat.blogSection;
  const nav = useNavigate();
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>

      {data &&


        <div ref={MeditationRef} className=" my-[20vw] lg:m-0 md:my-[10vw] bg-red-00">


          <div className="flex lg:justify-center items-start justify-start text-4xl lg:text-3xl lg:m-0 m-8 ">
            Meditations
          </div>

          {data?.map((items, key) => {
            return (

              <div key={key} className="flex flex-col md:flex-row  lg:justify-between items-center justify-center  sm:m-10  bg-[#f5f6f0]  sm:px-16 lg:px-2 md:px-0  lg:mt-20 xl:mx-40
               m-8">
                  
                {/* style={{ width: "100%", sm: "80vh", lg: "100vh", height: "50vh" }} */}
                  <div 
                  className=" lg:w-[85vh] lg:h-[35vh] md:w-[90vh] md:h-[40vh] w-[90%] h-[40vh]  md: mb-4 lg:mb-0  flex:none overflow-hidden"
                  >


                    <img
                      className="w-full h-full  object-cover object-center rounded-xl"
                      src={items.img}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center w-full ">
                    <div className="p-4 sm:p-10">
                      <div className="mx-4">
                        <div className="w-6 h-0.5 bg-[#FF6D00]"></div>
                        <div className="text-sm py-2">{items.tag}</div>
                      </div>
                      <div className="font-semibold px-4 py-2 text-xl">
                        {items.title}
                      </div>
                      <div className="text-sm px-4 py-2">
                        {new Date(items.date)
                          .toJSON()
                          .slice(0, 10)
                          .replace(/-/g, "/")}
                      </div>
                      <div className="px-4 py-2 text-justify text-clip">
                        {items.content.length > 500
                          ? items.content.slice(0, 500) + "..."
                          : items.content}
                      </div>
                      <div
                        className="px-4 py-2 text-[#fc9351] text-sm flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          nav("/posts", { state: items });
                        }}
                      >
                        Read More
                        <GoArrowRight />
                      </div>
                    </div>
                  </div>
                </div>

            );
          })}

          {/* {data?.map((items, key) => {
            return (

              <div key={key} className="m-20 bg-[#f5f6f0] md:flex ">
                <div
                  style={{ width: "100vh", height: "50vh" }}
                  className="overflow-hidden relative "
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={items.img}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="p-10">
                    <div className="mx-4">
                      <div className="w-6 h-0.5 bg-[#FF6D00]"></div>
                      <div className="text-sm py-2">{items.tag}</div>
                    </div>
                    <div className="font-semibold px-4 py-2 text-xl">
                      {items.title}
                    </div>
                    <div className="text-sm px-4 py-2">
                      {new Date(items.date)
                        .toJSON()
                        .slice(0, 10)
                        .replace(/-/g, "/")}
                    </div>
                    <div className="px-4 py-2 text-justify text-clip">
                      {items.content.length > 500
                        ? items.content.slice(0, 500) + "..."
                        : items.content}
                    </div>
                    <div
                      className="px-4 py-2 text-[#fc9351] text-sm flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        nav("/posts", { state: items });
                      }}
                    >
                      Read More
                      <GoArrowRight />
                    </div>
                  </div>
                </div>
              </div> 

            );
          })} */}







          <div className="items-center flex md:m-2">
            <span className="text-white m-auto px-6 py-3 bg-[#fc9351] rounded-lg cursor-pointer"
              onClick={() => {
                nav("/posts");
              }}>
              Read More
            </span>
          </div>
        </div>


      }
    </>





  );
}

export default BlogSection;
