import React from 'react';
import style from './communities.module.css'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { PostsCreator } from './posts/posts-creator';
  
 




export const Communities = ( communityArr, dispatch ) => {
    return (
        <div className={style.communities}>
            
            <div className={style.community}>
            {/* <Route path={'/myTreds/tred1'} component={()=><Posts state={state} dispatch={dispatch}/>} /> */}
           
                <div>
                <NavLink className={style.link} to={'/myCommunities/Community1'}><img src={'https://cs9.pikabu.ru/post_img/2017/02/07/8/og_og_1486475033280814266.jpg'} alt={'nt found'}/></NavLink>
                <h4>tred title</h4>
                </div>
                { <Route path={'/myCommunities/Community1'} component={()=><PostsCreator communityArr={communityArr.communities[0].posts} dispatch={dispatch}/>} /> } 
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <NavLink className={style.link} to={'/myCommunities/Community1'}><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6LltTo2X4YwzJnhf9F1kSRj9O0_EdfPXANg&usqp=CAU&reload=on'} alt={'nt found'}/></NavLink>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.community}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>   
                    
            </div>
        </div>
    )
}