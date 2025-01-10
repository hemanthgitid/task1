import React from 'react'
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import contentbottomcss from '../Styles/Contentbottomcss.module.css'
const Contentbottom = ({handleback,handlenext}) => {
  return (
    <div className={contentbottomcss.head}>
      <button
      onClick={handleback}
      >
        <span style={{float:'left'}} ><RiArrowLeftDoubleFill /></span>
        BACK</button>
      <button
      onClick={handlenext}
      >NEXT <span style={{float:'right'}}><RiArrowRightDoubleLine /></span></button>
    </div>
  )
}

export default Contentbottom