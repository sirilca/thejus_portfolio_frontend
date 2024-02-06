import React from "react";
const journeys = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function JourneySection() {
  return (
    <div>
      <div className="hr-lines text-2xl font-semibold">My journey</div>
      <div>
        {journeys.map((journey) => {
          return (
            <div
              className="flex gap-28 even:flex-row-reverse flex-row m-24"
              key={journey.id}
            >
              <div className="imgoddeven">
                <img
                  className="imgoddevenimg"
                  src={journey.img}
                  alt={journey.title}
                />
                {journey.id % 2 == 0 ? (
                  <div className="absolute bg-[#FF6D00] w-[120%] top-1/4 right-[90%] h-1"></div>
                ) : (
                  <div className="absolute bg-[#FF6D00] w-[120%] top-1/4 left-[90%] h-1"></div>
                )}
              </div>

              <div className="w-2/5 flex items-end mb-10">
                <p>{journey.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneySection;
