import React, {useState} from 'react'
import './Slide.css'
import { useInView } from 'react-intersection-observer';


function Slide({imageSrc, title, subtitle, flipped}) {
    

    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    const renderCheck = () => {
        if(!flipped) {
            return (
                <>
                    <img  className="slide__img" src={imageSrc} alt='travel'/>
                    <div className="slide__content">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className="slide__content">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt='travel' className="slide__img"/>
                </>
            )
        }
    }
    return (
        <div ref={ref} className={inView ? 'slide__active' : 'slide'}>   
            {renderCheck()}
        </div>
    )
}

export default Slide
