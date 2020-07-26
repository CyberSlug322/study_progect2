import React from 'react';
import style from './treds/treds.module.css'
import { NavLink } from 'react-router-dom';
  import{ Posts } from './posts/posts';
 




export const Treds = () => {
    return (
        <div className={style.treds}>
            
            <div className={style.tred}>
            {/* <Route path={'/myTreds/tred1'} component={()=><Posts state={state} dispatch={dispatch}/>} /> */}

                <div>
                <NavLink className={style.link} to={'/myTreds/tred1'}><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/></NavLink>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>            
            </div>
            <div className={style.tred}>
                <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5bEKqaIyPmG7m7XRdg594N2VtyayFWZqQ&usqp=CAU'} alt={'nt found'}/>
                <h4>tred title</h4>
                </div>
                <span>tred description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nihil!</span>   
                <Posts />         
            </div>
        </div>
    )
}