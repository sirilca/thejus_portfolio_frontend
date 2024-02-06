import React, { useEffect, useState } from "react";
import MeditationSection from "./MeditationSection";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF, FaShareNodes, FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PostSection() {


  // -------------------------------------------importing data---------------------------------------------
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
  //-----------------------------------------------------------------------------------------------------------------


  // let loc = useLocation();
  // let data = loc.state;

  function extractMonthAndYear(dateString) {
    const date = new Date(dateString);
    const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(date);
    const year = date.getFullYear();
    const day = ("0" + date.getDate()).slice(-2);
    // return `${monthAbbreviation},${year} ${day}`;
    return { monyr: `${monthAbbreviation},${year % 2000}`, day };
  }

  // let data = {
  //   title: "TourismTech -The inception story",
  //   subtitle: "This is a quitting story",
  //   img: "https://picsum.photos/536/354",
  //   content: (
  //     <p>
  //       In June 2020, after a lot of discussions and deliberations I decided to
  //       quit the idea of TourismTech.I spoke to all the stakeholders in Tourism
  //       Industry. Startups were also skeptical about this initiative and its
  //       timing. Because most of them were my well-wishers & they want the best
  //       for me in my career.A call to my friend changed my thought process.
  //       <br /> I said, ‘ tell me one good reason to pursue the idea of Tourism
  //       Accelerator. Why I shouldn’t do I know by now.’And the answer for that –
  //       If you are doing this when everything is fine then you are like anyone
  //       else. Everyone will remember you when the normal world is back for the
  //       support you guys extended during the tough times.It was good enough to
  //       pursue this idea. And it turns out the accelerator program became a
  //       successful one in terms of a concept. We got 50+ applications from 6
  //       different countries. <br />
  //       We ended up having Goa Tourism Department as the partner for the
  //       event.This is the simple version of how a new vertical called
  //       TourismTech was created.I’ll keep on updating this space with what’s
  //       happening. Because I feel journaling is needed to track the progress of
  //       this initiative.
  //     </p>
  //   ),
  //   date: "2023/12/30",
  // };

  return (

    <>{data &&


      <div className="bg-[#f5f6f0] md:py-12">

        {/* <div className="flex items-center justify-center flex-col p-5">
          <div className="m-10 text-3xl font-medium">{data[0].title}</div>
          <img style={{ width: "70vw", height: "50vh" }} src={data[0].img} />

          <div className="flex w-7/12 gap-20 justify-between my-10">
            <div className="my-5 flex flex-col items-center">
              <div className="text-lg font-semibold">
                {extractMonthAndYear(data[0].date).day}
              </div>
              <div className="text-xs">
                {extractMonthAndYear(data[0].date).monyr}
              </div>
              <div className="my-5 flex items-center flex-col gap-3">
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaXTwitter size={15} />
                </div>
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaFacebookF size={15} />
                </div>
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaShareNodes size={15} />
                </div>
              </div>
            </div>
            <div>
              <div className="font-medium my-5">{data[0].subtitle}</div>
              <div className="text-justify text-sm">{data[0].content}</div>
            </div>
          </div>
        </div> */}
        {/* ----------------------------------------------------------------------------------------- */}
        <div className="flex items-center justify-center flex-col py-5  bg-green-50 pb-28">


          <div className=" p-4 lg:text-[6vh] text-[3.5vw] font-medium  w-[90%] text-center mb-12">{data[0].title}</div>
          <img className=" lg:w-[45vw] lg:h-[25vw] sm:h-[29vw] sm:w-96 w-[80%] h-56 rounded-md" src={data[0].img} alt="Image" />

          <div className="flex flex-col  w-[80%] md:w-[60%] gap-10 justify-between my-5">


            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold">
                {extractMonthAndYear(data[0].date).day}
              </div>
              <div className="text-xs">
                {extractMonthAndYear(data[0].date).monyr}
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaXTwitter size={15} />
                </div>
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaFacebookF size={15} />
                </div>
                <div className="border-[1px] border-black rounded-full p-2">
                  <FaShareNodes size={15} />
                </div>
              </div>
            </div>



            <div className="bg-red-00">
              <div className="font-medium my-0">{data[0].subtitle}</div>
              <div className="text-justify text-sm">{data[0].content}</div>
            </div>
          </div>
        </div>




        <MeditationSection />
      </div>



    }</>

  );
}

export default PostSection;
