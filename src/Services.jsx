import React from 'react'
import SCard from './SCard'
import { SData } from './SData'

const Services = () => {
  return (
    <>
    <div className='service__main'>
      <h1 className='text-center py-5'>Services</h1>
      <div className='card__div'>
        {SData.map((value,index)=>
        {
          return (<SCard 
            imgsrc={value.imgsrc}
            title={value.title}
          />)
        })}
      </div>
    </div>
    </>
  )
}

export default Services