import React, { useState } from 'react';
import Content from '../Componants/Content';
import Contenttop from '../Componants/Contenttop';
import Contentbottom from '../Componants/Contentbottom';
import Contentside from '../Componants/Contentside';
import Firstpagecss from '../Styles/FirstPagecss.module.css';
import Contenttop2 from '../Componants/Contenttop2';

const FirstPage = () => {
  const [data, setData] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [subindex, setsubindex] = useState(0); 
  const handleAddApplication = () => {
    const newApplication = []; 
    setData([...data, newApplication]);
  };

  const handleindex = (index) => {
    setCurrentIndex(index);
  };

  const handleSideDocument = () => {
    if(data.length>0){
      const updatedData = [...data];
      updatedData[currentIndex] = [...updatedData[currentIndex], []];
      setData(updatedData); 
      setsubindex(0);
    }
  };

  const handleremoveapplication = (item) => {
     const updatearray=[...data];
    const newupdate= updatearray.filter((it,index) => item!=index);
    setData(newupdate);
  };

  const handleremovedocument = (item) =>{
      const updatearray=[...data];
      updatearray[currentIndex]=updatearray[currentIndex].filter((it,index)=>item!=index);
      setData(updatearray);
  };
  const handleindex2 = (index) =>{
      setsubindex(index);
  };
  const handlenext = () => {
    if (data[currentIndex] && subindex < data[currentIndex].length - 1) {
      setsubindex(subindex + 1);
    } else if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setsubindex(0);
    }
  };
  
  const handleback = () => {
    if (subindex > 0) {
      setsubindex(subindex - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setsubindex(data[currentIndex - 1] ? data[currentIndex - 1].length - 1 : 0);
    }
  };
  
  return (
    <div className={Firstpagecss.main}>
      <div className={Firstpagecss.top}>
        <Contenttop2  handleAddApplication={handleAddApplication}/>
        <Contenttop
          data={data}
          handleaddapplication={handleAddApplication}
          handleindex={handleindex}
          handleremoveapplication={handleremoveapplication}
          currentIndex={currentIndex}
        />
      </div>
      <div className={Firstpagecss.mid}>
        <div className={Firstpagecss.mid_1}>
          <Contentside
            data1={data[currentIndex]}
            handlesidedocument={handleSideDocument}
            handleremovedocument={handleremovedocument}
            handleindex2={handleindex2}
            index2={subindex}
          />
        </div>
        <div className={Firstpagecss.mid_2}>
          <Content data1={data[currentIndex]} currentIndex={currentIndex} subindex={subindex}/>
        </div>
      </div>
      <div className={Firstpagecss.bottom}>
        <Contentbottom 
        handleback={handleback}
        handlenext={handlenext}
        />
      </div>
    </div>
  );
};

export default FirstPage