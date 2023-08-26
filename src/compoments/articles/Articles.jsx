import React from 'react'
import './Articles.css'
import {ArticlesData} from '../../data'
import { IoIosArrowForward } from "react-icons/io";


function Articles() {
    return (
        <div className='container-article'>
                    <h2 className='article-title'>Dernières actualités</h2>
        <div className='articles'>
            {ArticlesData.map((item) => {
                const{id,text,title,link} = item;
                return(
                        <div className='article' key={id}>
                            <h3 className='article-text'> {title}</h3>
                            <p className='article-p'>{text}</p>
                            <a href={link}>Lire la suite</a>
                        </div>
                )
            })
    
            }
        </div>
        <div className='simuler'>   <span className='flesh'><IoIosArrowForward /></span>Voir toutes les récompenses</div>
        </div>
  )
}

export default Articles