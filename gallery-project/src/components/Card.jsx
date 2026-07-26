import React from 'react'

const Card = ({prop}) => {//callled Destructuring
  return (
    <>
      <div className='text-center'>
                <div className="w-[200px] h-[200px] transition-transform duration-300 ease-in-out hover:scale-110">
                  <a href={prop.url} target='_blank'>
                  <img
                   loading='lazy'
                    className="w-full h-full object-cover rounded-lg shadow-xl/30"
                     src={`https://picsum.photos/id/${prop.id}/300/300`}
                    alt=""
                  />
                  </a>
              </div>
              <h3 className='text-black-50'>{prop.author}</h3>
        </div>
    </>
  )
}

export default Card
