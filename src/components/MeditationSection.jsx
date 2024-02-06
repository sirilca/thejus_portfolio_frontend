import axios from "axios";
import React, { useEffect, useState } from "react";

function MeditationSection() {

// -----------------------------------------importing data-----------------------------------------
  const [journeys,setJourneys]=useState()
  const [data, setData] = useState(null);

  useEffect(() => {
    getAlldata()
  }, []);

  const getAlldata = async () => {
    await axios.get('http://localhost:443/').then((res) => {
      setData(res.data[0].blogSection);
      setJourneys(res.data[0].blogSection.slice(1))
      // console.log(res.data[0].blogSection)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  //gniDCrH9bqO4ed1o


//--------------------------------------------------------------------------------------------------



  // const journeys = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 1",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 1",
  //     content: "Content 1here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 2",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 2",
  //     content: "Content 2here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 3",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 3",
  //     content: "Content 3here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 4",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 4",
  //     content: "Content 4here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 5",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 5",
  //     content: "Content 5here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 6,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 6",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 6",
  //     content: "Content 6 here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 7,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 7",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 7",
  //     content: "Content 7 here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 8,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 8",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 8",
  //     content: "Content 8 here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 9,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 9",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 9",
  //     content: "Content 9here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 10,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     subtitle: "Subtitle 10",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     tag: "Tag 10",
  //     content: "Content 10here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];


  return (

    <>
    {journeys&&
      <>

        <div >
          <div className="flex flex-col justify-center items-center m-2">
            <div className=" font-semibold text-xl text-[#FF6D00] mb-16">
              More from me
            </div>
            <div className="flex flex-wrap gap-10 md:m-10 m-0 justify-center">
              {journeys?.map((journey,key) => {
                return (
                  // style={{ width: "45vh" }}
                  <div key={key}  className="bg-white sm:w-[45vh] w-[80%] flex flex-col items-center justify-center">
                    {/* style={{ height: "30vh", width: "45vh" }} */}
                    <img
                      className="sm:w-full sm:h-[45vh] h-[40vw] w-[80%] object-fill"
                      src={journey.img}
                      alt={journey.title}
                    />

                    <div>
                      <div className="m-4">
                        <div className="w-7 h-1 bg-[#FF6D00]"></div>
                        <div className="text-xs py-2">{journey.tag}</div>
                      </div>
                      <div className="font-semibold py-2 px-4 text-base">
                        {journey.title}
                      </div>
                      <div className="font-medium py-2 px-4 text-sm">
                        {journey.subtitle}
                      </div>
                      <div className="text-xs px-4 py-2">
                        {journey.date?journey.date.slice(0, 10).replace(/-/g, "/"):<></>}
                      </div>
                      <div className="px-4 py-2 text-justify text-sm">
                        {journey.content}
                      </div>
                    </div>
                  </div>
                );
              })}

              
            </div>
          </div>
        </div>



        </>
        


    }
    </>



  );
}

export default MeditationSection;

              <>
          {/* <div>
            <div className="flex flex-col justify-center items-center m-2">
              <div className="text-base font-semibold text-[#FF6D00]">More from me</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
                {journeys?.map((journey, key) => {
                  return (
                    <div key={key} className="bg-white">
                      <img
                        style={{ height: "30vh", width: "100%" }}
                        src={journey.img}
                        alt={journey.title}
                      />
                      <div className="m-4">
                        <div className="w-7 h-1 bg-[#FF6D00]"></div>
                        <div className="text-xs py-2">{journey.tag}</div>
                      </div>
                      <div className="font-semibold py-2 px-4 text-base">{journey.title}</div>
                      <div className="font-medium py-2 px-4 text-sm">{journey.subtitle}</div>
                      <div className="text-xs px-4 py-2">{journey.date.slice(0, 10).replace(/-/g, "/")}</div>
                      <div className="px-4 py-2 text-justify text-sm">{journey.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-10">
            <div className="flex flex-col justify-center items-center m-2">
              <div className=" text-base font-semibold text-[#FF6D00]">
                More from me
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-10">
                {journeys?.map((journey, key) => {
                  return (
                    <div key={key} style={{ width: "100%", maxWidth: "45vh" }} className="bg-white ">
                      <img
                        style={{ height: "30vh", width: "100%" }}
                        src={journey.img}
                        alt={journey.title}
                      />

                      <div>
                        <div className="m-4">
                          <div className="w-7 h-1 bg-[#FF6D00]"></div>
                          <div className="text-xs py-2">{journey.tag}</div>
                        </div>
                        <div className="font-semibold py-2 px-4 text-base">
                          {journey.title}
                        </div>
                        <div className="font-medium py-2 px-4 text-sm">
                          {journey.subtitle}
                        </div>
                        <div className="text-xs px-4 py-2">
                          {journey.date.slice(0, 10).replace(/-/g, "/")}
                        </div>
                        <div className="px-4 py-2 text-justify text-sm">
                          {journey.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </>