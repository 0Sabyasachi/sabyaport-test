import React from 'react'
import Common from './Common'
import { useNavigate  } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();
  const moveToContact = () =>
  {
    navigate("/contact");
    console.log(navigate)
  }

  return (
        <>
          <Common 
            line1={"Welcome to About Page"}
            btn={"Contact Here"}
            img={require("./images/b.png")}
            width={"450px"}
            jump={moveToContact}
          />
        </>
    )
}

export default About