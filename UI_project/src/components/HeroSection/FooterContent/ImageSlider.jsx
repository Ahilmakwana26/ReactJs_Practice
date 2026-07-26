import React from 'react'
import bg from '../../../assets/images/img3.jpg'
const ImageSlider = ({country,place,img,describe,onClick}) => {
  return (
    <div className='slider-container flex-shrink-0 cursor-pointer' onClick={onClick}>
      <div className="relative slider w-65 h-97 rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-105" style={{
              backgroundImage: `url(${img})`,
            }}>
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          <div className="content bottom-5 left-5 absolute text-amber-50">
            <h4 className="country text-lg">{country}</h4>
            <h4 className="place text-2xl font-bold">{place}</h4>
            <p className="text-xs">{describe}</p>
          </div>
      </div>
    </div>
  )
}

export default ImageSlider
