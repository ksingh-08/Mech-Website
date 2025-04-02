import React from 'react'
// //import './Extended.css'
// import provide1 from '../../assets/IC.jpg'
// import provide2 from '../../assets/Inhouse.jpg'
// import provide3 from '../../assets/Workshop.jpg'
// import log1 from '../../assets/log1.png'
// import log2 from '../../assets/log2.png'
// import log3 from '../../assets/log3.png'

// import { Link } from 'react-router-dom'

import MultiActionAreaCard1 from '../../UI/MultiActionAreaCard1'
import MultiActionAreaCard2 from '../../UI/MultiActionCard2'
import MultiActionAreaCard3 from '../../UI/MultiActionCard3'




const ExtendedUpdated = () => {
  return (
    <div className=' programs flex flex-wrap gap-4 justify-center'>
        <div className="program">
        <MultiActionAreaCard1/>
        </div>
        <div className="program">
            <MultiActionAreaCard2/>
        </div>
        
        <div className="program">
        <MultiActionAreaCard3/>
        </div>
    </div>
  )
}

export default ExtendedUpdated
