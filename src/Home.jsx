import React from 'react'
import Common from './Common'
import { useNavigate  } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const moveToService = () =>
  {
    navigate("/service");
    console.log(navigate)
  }

  return (
    <>
      <Common 
        line1={"Grow your Business with"}
        btn={"Get Started"}
        img={require("./images/a.png")}
        width={"450px"}
        jump={moveToService}
      />
    </>
  )
}

export default Home