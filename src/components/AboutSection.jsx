import React, { useEffect, useState } from "react";
import aboutImg from "../assets/about.png";
import axios from "axios";
import jsondat from "../main.json";

function AboutSection() {

  // -------------------------------------------importing data---------------------------------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata=async()=>{
    await axios.get('http://localhost:443/').then((res) => {
      setData(res.data[0].AboutSection);
      // console.log(res.data[0].AboutSection)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
//-----------------------------------------------------------------------------------------------------------------
  // const data = jsondat.AboutSection;

  return (
    <div className="flex items-center justify-center relative">
      <div className="h-1/4 -z-10 w-full top-0 bg-[#f5f6f0] absolute"></div>

      {data&&
      
      //   <div className=" m-20 flex flex-col items-center justify-center w-8/12 gap-14">
      //   <div className="text-4xl font-medium">About me</div>
      //   <img src={aboutImg} />
      //   <p className="text-justify">{data.description}</p>
      //   <div className="flex items-center flex-col gap-10 justify-center">
      //     {data.timestamp?.map((e, i) => {
      //       return (
      //         <div className="flex items-center gap-10 justify-between ">
      //           <div className="w-3/12 ">
      //             <div className="text-xl font-semibold my-3">{e.Date}</div>
      //             <div className="text-lg font-medium">{e.Designation}</div>
      //             <div className="text-sm ">{e.Company}</div>
      //           </div>
      //           <div className="w-8/12 text-justify ">{e.Content}</div>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div> 


        <div className="m-20 flex flex-col items-center justify-center w-8/12 gap-14">
          <div className="text-4xl font-medium">About me</div>
          <img src={aboutImg} alt="About Me Image" />

          <p className="text-justify">{data.description}</p>

          {/* Responsive layout for small screens */}
          <div className="hidden md:flex items-center flex-col gap-10 justify-center">
            {data.timestamp?.map((e, i) => (
              <div key={i} className="flex items-center gap-10 justify-between">
                <div className="w-3/12">
                  <div className="text-xl font-semibold my-3">{e.Date}</div>
                  <div className="text-lg font-medium">{e.Designation}</div>
                  <div className="text-sm">{e.Company}</div>
                </div>
                <div className="w-8/12 text-justify">{e.Content}</div>
              </div>
            ))}
          </div>

          {/* Responsive layout for mobile screens */}
          <div className="md:hidden">
            {data.timestamp?.map((e, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="text-xl font-semibold my-3">{e.Date}</div>
                <div className="text-lg font-medium">{e.Designation}</div>
                <div className="text-sm">{e.Company}</div>
                <div className="text-justify">{e.Content}</div>
              </div>
            ))}
          </div>

          
        </div>


      


      }




    </div>
  );
}

export default AboutSection;
