import React from 'react';
import { useState } from 'react';


const Clients = () => {

    const [hovered, setHovered] = useState("https://i.ibb.co/fkSfqGP/slider1.jpg")

    const onBoardData =[
        {
            name: "Sona Home",
            url: "https://i.ibb.co/RT0Qg0J/banner7.jpg"
        },
        {
            name: "Mizensir Parfums",
            url: "https://i.ibb.co/fkSfqGP/slider1.jpg"
        },
        {
            name: "Joseph Abboud",
            url: "https://i.ibb.co/0yhQHG3/banner9.jpg"
        },
        {
            name: "Creed",
            url: "https://i.ibb.co/t3V2tdm/banner6.jpg"
        },
        {
            name: "Ovai",
            url: "https://i.ibb.co/qrLqnZL/slider5.jpg"
        },
        {
            name: "Anee Klein",
            url: "https://i.ibb.co/VpZX6fk/banner8.jpg"
        },
        {
            name: "Hanky Panki",
            url: "https://i.ibb.co/8PjxbS6/slider4.jpg"
        },
        {
            name: "Bliss",
            url: "https://i.ibb.co/HDkTVVY/slider3.jpg"
        },
        {
            name: "Hangar",
            url: "https://i.ibb.co/SK9MYBf/slider2.png"
        },
        {
            name: "The Salon at Bergdorf Goodman",
            url: "https://i.ibb.co/ypTwT1Y/slider.jpg"
        }
        
    ]
   
    return (
        <div className="py-36 mb-4 bg-black text-white">
      
      <p className='lg:text-left mb-12 sm:ml-20'>CLIENTS</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        
        <div className="gap-y-6 flex flex-col justify-center text-3xl lg:items-start lg:ml-20">
          {onBoardData.map((client) => (
           <h3><a
              onMouseEnter={() => setHovered(client.url) }
              className={`hover:border-b-2 border-white onBoardBtn ${hovered ? "block" : " hidden"}`}
            >
              {client.name}
            </a> </h3>
          ))}
        </div>

        <div className='py-8 mx-auto'>
          <img
            className="rounded-lg "
            src={hovered}
            alt=""
            width={434}
            height={582}
          />
        </div>
      </div>
    </div>
    );
};

export default Clients;