import React, { useRef } from 'react'
import './Testimonials.css'
// import { transformWithEsbuild } from 'vite';
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward= ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward= ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials' >
        <img src="data:image/png;base64,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" alt=""  className='next-btn' onClick= {slideForward}/>
        <img src="data:image/png;base64,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" alt="" className='back-btn' onClick = {slideBackward}/>

        <div className="slider">
            <ul ref={(slider)}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://images.unsplash.com/photo-1559192823-e1d8e87def54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VvJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
                            <div>
                                <h3>Wilem Jackson</h3>
                                <span>Edusity , Uk</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur labore illo quasi? Cupiditate sapiente fuga fugiat aliquam quae eaque laboriosam sed maiores.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VvJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
                            <div>
                                <h3>Wilem Jackson</h3>
                                <span>Edusity , Uk</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur labore illo quasi? Cupiditate sapiente fuga fugiat aliquam quae eaque laboriosam sed maiores.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://images.unsplash.com/photo-1549473448-5d7196c91f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VvJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
                            <div>
                                <h3>Wilem Jackson</h3>
                                <span>Edusity , Uk</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur labore illo quasi? Cupiditate sapiente fuga fugiat aliquam quae eaque laboriosam sed maiores.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNlbyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div>
                                <h3>Wilem Jackson</h3>
                                <span>Edusity , Uk</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur labore illo quasi? Cupiditate sapiente fuga fugiat aliquam quae eaque laboriosam sed maiores.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
  )
}

export default Testimonials

