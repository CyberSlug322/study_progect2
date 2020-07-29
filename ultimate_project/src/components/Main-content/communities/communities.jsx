import React from 'react';
import style from './communities.module.css'
import { NavLink } from 'react-router-dom';
  
 




export const Communities = () => {
    return (
        <div className={style.communities}>
            
            <div className={style.community}>
            {/* <Route path={'/myTreds/tred1'} component={()=><Posts state={state} dispatch={dispatch}/>} /> */}

                <div>
                <NavLink className={style.link} to={'/myCommunities/Community1'}><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/></NavLink>
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