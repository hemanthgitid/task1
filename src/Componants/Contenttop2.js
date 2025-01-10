import React from 'react'
import contenttopecss from '../Styles/Contenttop2css.module.css'
const Contenttop2 = ({handleAddApplication}) => {
  return (
    <div className={contenttopecss.head}>
        <h1>Document Upload</h1>
        <div className={contenttopecss.button_2}>
            <button 
            onClick={handleAddApplication}
            >+ Add Application</button>
        </div>
    </div>
  )
}

export default Contenttop2