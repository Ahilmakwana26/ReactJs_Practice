import React, { useRef } from 'react'
import TextContent from './TextCotent';
import ImageSlider from './ImageSlider';
import image1 from '../../../assets/images/image1.jpeg';
import image3 from '../../../assets/images/image3.jpeg';
import image4 from '../../../assets/images/image4.jpeg';
import image5 from '../../../assets/images/image5.jpeg';

const FooterContent = ({bgImage,onImageSelect}) => {
  console.log(bgImage)
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const slides = [
  {
    id: 1,
    country: "India",
    place: "Kerala",
    image: image4,
    description: "Backwaters & houseboats",
    rating: 4.9,
  },
  {
    id: 2,
    country: "India",
    place: "Goa",
    image: image3,
    description: "Beaches & nightlife",
    rating: 4.8,
  },
  {
    id: 3,
    country: "India",
    place: "Jaipur",
    image: image1,
    description: "Pink city & palaces",
    rating: 4.7,
  },
  {
    id: 4,
    country: "India",
    place: "Ladakh",
    image: image5,
    description: "Mountains & lakes",
    rating: 4.9,
  },
  {
    id: 5,
    country: "India",
    place: "Kashmir",
    image: "https://i.pinimg.com/1200x/a1/cc/96/a1cc96e8e9c3fbc1e6a9cec8eabb96d5.jpg",
    description: "Valleys & snow peaks",
    rating: 4.9,
  }
];
  return (
    <div className='absolute bottom-10 left-10 right-0 flex flex-col gap-4'>
      <div className='flex flex-row items-center'>
         <div className="leftContent w-1/2">
           <TextContent />
         </div>
         <div 
          ref={sliderRef}
          className="sliderContainer flex gap-6 overflow-x-auto w-1/2 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
         >
           {slides.map((slide)=>(
              <ImageSlider 
                onClick={()=>onImageSelect(slide.image)}
                key={slide.id} 
                country={slide.country} 
                place={slide.place} 
                img={slide.image} 
                describe={slide.description}
              />
          ))}
         </div>
      </div>
      <div className="flex justify-center gap-4">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default FooterContent
