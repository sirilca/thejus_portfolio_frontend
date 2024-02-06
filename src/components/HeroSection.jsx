import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import photo from "../assets/photo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JoinMailModal from "./JoinMailModal";
import axios from "axios";

function HeroSection({ HomeRef }) {



  // -----------------------------------------importing data-----------------------------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata = async () => {
    await axios.get('https://thejus-joseph.onrender.com').then((res) => {
      setData(res.data[0].heroSection);
      // console.log(res.data[0].heroSection)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  //--------------------------------------------------------------------------------------------------


  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeHandler = () => {
    setIsModalOpen(false);
  };
  const submitHandler = () => {
    setIsModalOpen(false);
    notify();
  };
  const notify = () => toast("😇 Mail Added Succesfully");
  return (


    <>
      {data &&
        <div
          ref={HomeRef}
          className="bg-[#f6f1f0] flex flex-col md:flex-row justify-center items-center relative"
        >

          {/* <JoinMailModal/> */}
          {isModalOpen && JoinMailModal(closeHandler, submitHandler)}


          <div className="flex-1 p-6 md:ml-24">
            <div className="text-2xl">Hi, I'm</div>
            <div className="text-7xl mt-5 uppercase font-semibold font-cinzel">
              Thejus
              <br />
              Joseph
            </div>
            <div className="w-10/12 m-2 mt-6">
              {/* This is my personal blog. <br />
                    To know more about the TourismTech updates. */}
              {data.description}
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="m-2 mb-10 mt-10 flex items-center gap-3 text-white bg-red-400 hover:opacity-50 px-5 py-3 rounded-lg"
            >
              <div>Join my mailing list </div>
              <GoArrowUpRight size={20} />
            </button>
          </div>
          <img
            style={{ width: "50vw" }}
            className="hidden md:flex mt-10 md:mt-0"
            src={photo}
          />
          {/* <div className="flex-1 hidden items-center md:flex justify-center bg-slate-400">

        </div> */}

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>





      }
    </>

  );
}

export default HeroSection;
