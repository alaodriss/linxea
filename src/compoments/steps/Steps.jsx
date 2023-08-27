import React from 'react'
import './Steps.css'
import {stepsData} from '../../data.js'


function Steps() {
  return (
    <div className='container-steps'>
                <h2 className='step-title'> Seulement quelques minutes pour <br/>mettre en place votre projet</h2>
    <div className='steps'>
        {stepsData.map((item) => {
            return(
                    <div className='step' key={item.id}>
                        <div className='numb'>{item.id}</div>
                        <p className='step-text'> {item.text}</p>
                    </div>
            )
        })

        }
    </div>
        
    </div>
  )
}

export default Steps