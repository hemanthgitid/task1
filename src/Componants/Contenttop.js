import React from 'react';
import contenttopcss from '../Styles/Contenttop.module.css';
import { RiDeleteBinLine } from "react-icons/ri";

const Contenttop = ({ handleindex, data, handleremoveapplication, currentIndex }) => {
  return (
    <div className={contenttopcss.container}>
      <div className={contenttopcss.button_1}>
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className={contenttopcss.btnin}>
              <button
                className={currentIndex === index ? contenttopcss.active : ''}
                onClick={() => {
                  handleindex(index);
                }}
              >
                Application_{index}
              </button>
              <span
                className={contenttopcss.iconclose}
                onClick={() => {
                  handleremoveapplication(index);
                }}
              >
                <RiDeleteBinLine />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contenttop;
