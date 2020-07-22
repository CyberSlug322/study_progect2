import React from 'react';
import '../App.css'     
import { LeftSideBar } from './left-sidebar';
import { Walls } from './Walls'
    

export const  MainContent = (props) => {
    return (
    <div className={'main-content'}>
        <LeftSideBar LeftSideBarTitleTextItem={'ur walls \n something \n smothing \n sumsing \n samsink'} />
         
        
        
         
         <Walls />
           
            
           
          
             
    </div>
    )
}