import React,{ useState }  from 'react';
import '../styles/Carousel.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { Data } from './Data';




const Carousel = ({ slides }) => {

    const [current,setCurrent] = useState(0)
    const length = slides.length;

  return (
    <div className="carousel-main">

            <div className="arrows">
                <ArrowLeftOutlined  className='left'/>
                <ArrowRightOutlined className='right'/>
            </div>

        {Data.map((slide,index)=>{
            return(
                <div className={index === current ?'carousel-active' : 'carousel'} >

                        {index === current && (
                            <div className={slide.className} > 
                                <div className="texts">
                                    <p className="title">{slide.title}</p>
                                    <p>{slide.text}</p>
                                </div>
                                <img src={slide.image} alt="" />
                            </div>
                        )}
                </div>

            )

        })}

    </div>
  );
}

export default Carousel