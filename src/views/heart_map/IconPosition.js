import React from 'react'
import {BiMale} from 'react-icons/bi';

const IconPosition = ({position_x, position_y, color, name}) => {
    return (
        <div style={{maxWidth: 50, display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
            <BiMale color={color} size={50}/>
        </div>
    )
}

export default IconPosition
