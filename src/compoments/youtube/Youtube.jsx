import React from 'react'
import './Youtube.css'



const linkYb = [
    {
    id:1,
    videoId: '6IQLSYk6DWM', 
    url:"https://www.youtube.com/watch?v=6IQLSYk6DWM",
    title:" 03/07/2023 Maitriser l'art des produits structures -Exigence 18C"
},
{
    id:2,
    videoId: 'PCaHNy4L-A4', 
    title:" 03/07/2023 Maitriser l'art des produits structures -Exigence 18C"
},

{
    id:3,
    videoId: '6IQLSYk6DWM', 
    title:" 03/07/2023 Maitriser l'art des produits structures -Exigence 18C"
},



]



 const YoutubeVideo = ({ videoId, title }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div className="youtube-video">
        <iframe
          width="340"
          height="195"
          src={embedUrl}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className='title-video'>{title}</p>
      </div>
    );
  };
  


function Youtubes({Title}) {
  return (
    <>
        <div className='container-yb'>
            <h2 className='title-yb'>{Title}</h2>
            <div className='all-video'>
            {linkYb.map((video) => (
                <div className='video-yb'> 
                      <YoutubeVideo key={video.id} videoId={video.videoId} title={video.title} />
                </div> 
            ))}
            </div>
         
            </div>
    
    </>
  )
}

export default Youtubes