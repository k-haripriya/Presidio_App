import React from 'react'
import { IoIosContact } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import './styles.scss'


function SideBar(props) {
  const { getActiveCategory, setActiveCategory } = props
  const fields = ['Home','Channels','People'];

  const handleCategory = (item) =>{
    setActiveCategory(item);
  }
  return (
    <div className='sideBarContainer'>
       
        <IoIosContact size={50} color='gray'/>

        <div className='fields'>
            {
                fields.map((item,index)=>{
                    return(
                        <div key={index} className={getActiveCategory===item ? "activeCat":"inActiveCat"} onClick={()=>handleCategory(item)}>
                            <h3 className='itemName'>{item}</h3>
                        </div>
                        
                    )
                })
            }
        </div>
        <div className='logout'>
        <BiLogOutCircle size={30} />
        <h4>Logout</h4>
        </div>

        
      
    </div>
  )
}

export default SideBar
