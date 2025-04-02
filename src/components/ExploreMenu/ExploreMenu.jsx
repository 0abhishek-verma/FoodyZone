import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets.js'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Explore our Extensive Menu, showcasing an exquisite selection of dishes meticulously crafted with premium ingredients and culinary mastery. Our commitment is to delight your palate and enhance your dining experience, delivering exceptional quality with every meal.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name )} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
