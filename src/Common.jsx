import React from 'react'

const Common = (props) => {


  return (
    <>
          <div className='main__common'>

              <div className='common__div1'>
                <h1>{props.line1}</h1>
                <h1 className='myname'>Sabyasachi Sahoo</h1>
                <br />
                <p>This is a React Website created by Sabyasachi .</p>
                <br />
                <button onClick={props.jump} className='btn__common'>{props.btn}</button>
              </div>
              <div className='common__div2'>
                <img src={props.img} alt="" width={props.width} className='animated'/>
              </div>

          </div>
    </>
  )
}

export default Common