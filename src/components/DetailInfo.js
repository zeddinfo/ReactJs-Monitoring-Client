import React from 'react'
import { Gap } from '.'

const DetailInfo = ({title, color}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignContent: 'center',}}>
            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'flex-start'}}>
                <div style={{width: 10, height: 10, borderRadius: 10 / 2, backgroundColor: color}}></div>
                <Gap width={8}/>
                <p style={{fontSize: 12, height: 0, fontWeight: 'bold'}}>{title}</p>
            </div>
        </div>
    )
}

export default DetailInfo
