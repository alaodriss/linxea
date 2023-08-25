import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/2-preview.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Silder.css';

// import required modules
import { Navigation } from 'swiper/modules';


const silders = [ 
  {
    id:1,
    imgs: img1,
    title:"Novice ou expert ? 1",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:2,
    imgs: img1,
    title:"Novice ou expert ?",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  }
]

export default function Silder() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          silders.map((item) => {
            return (
              <SwiperSlide>
              <div className='blocks'>
               <div className='text'>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
               </div>
               <img src={item.imgs} alt='image1'/>
              </div>
              </SwiperSlide>
            )
          })
        }
  
      </Swiper>
    </>
  );
}

