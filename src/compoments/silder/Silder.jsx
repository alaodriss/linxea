// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/2-preview.png'

import stars from '../../assets/images/stars.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Silder.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


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



const sildersAuto = [ 
  {
    id:1,
    name:"Nico",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:2,
    name:"Alex",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:3,
    name:"Ali",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:4,
    name:"Dimitri",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:5,
    name:"Isabelle",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  },
  {
    id:6,
    name:"Celian",
    text:"Prenez les meilleures décisions d’investissement avec le niveau de détail souhaité"
  }
]



export  function SilderAuto() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        /*navigation={{
          nextEl: '.swiper-button-next', // You can leave this line as is if you want the next button
          prevEl: null, // Set the previous button to null to disable it
        }}*/
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          sildersAuto.map((item) => {
            return (
              <SwiperSlide>
              <div className='avis'>
               <div className='avis-text'>
                  <h2>{item.name}<img src={stars} alt=''/></h2>
                  <p>{item.text}</p>
               </div>

              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
