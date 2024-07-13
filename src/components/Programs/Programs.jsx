import React from 'react'
import './Program.css'
import img1 from '../../assets/images-removebg-preview.png'
import img2 from '../../assets/images-removebg-preview (1).png'
import img3 from '../../assets/edu3-removebg-preview.png'

const Programs = () => {
  return (
      <div className="programs" id='program'>
        <div className="program">
            <img src="https://images.unsplash.com/photo-1622126195600-41efc0b028e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWR1YXRpb24lMjBjb21wbGV0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className="caption">
                <img src={img2} alt="" />
                <p>Graduation dergree</p>
            </div>
        </div>
        <div className="program">
            <img src="https://images.unsplash.com/photo-1593985887762-955dccf2b71e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZHVhdGlvbiUyMGNvbXBsZXRlfGVufDB8fDB8fHww" alt="" />
            <div className="caption">
                <img src={img1} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZHVhdGlvbiUyMGNvbXBsZXRlfGVufDB8fDB8fHww" alt=""/>
            <div className="caption">
                <img src={img3} alt="" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
       </div>   
  )
}
export default Programs
