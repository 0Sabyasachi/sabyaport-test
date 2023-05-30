import React from 'react'

const SCard = (props) => {
  return (
    <>
        <div>
            <div class="card" style={{width: "20rem"}}>
            <img class="card-img-top" src={props.imgsrc} alt="" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="*" class="btn btn-primary">Click Here</a>
            </div>
            </div>
        </div>
    </>
  )
}

export default SCard;