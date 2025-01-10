import React from 'react';
import Contentsidecss from '../Styles/ContentSidecss.module.css';
import { RiDeleteBinLine } from "react-icons/ri";

const Contentside = ({ handleindex2,handlesidedocument, handleremovedocument, data1 ,index2}) => {
  return (
    <div className={Contentsidecss.head}>
      <div className={Contentsidecss.button_2}>
        {
          data1 && 
          <button onClick={handlesidedocument}>+ Add Document</button>
        }
      </div>
      <div className={Contentsidecss.button_1}>
        {data1 && data1.length > 0 && 
          data1.map((item, index) => (
            <div key={index} className={Contentsidecss.documentItem}>
              <button
                  key={index}
                  className={index2==index?Contentsidecss.active:''}
                  onClick={()=>{handleindex2(index)}}
              >
               Document_{index}
                <span
                  className={Contentsidecss.iconclose}
                  onClick={() => handleremovedocument(index)} 
                  >
                 <RiDeleteBinLine />
                </span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

  export default Contentside;