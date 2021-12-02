import React from 'react'
import DetailInfo from '../components/DetailInfo';

const CardInfo = () => {
    return (
        <div style={{backgroundColor: 'white', padding: 15, borderRadius: 15, maxHeight: 150}}>
            <p>Keterangan</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <DetailInfo color="red" title="Lantai 1"/>
                    <DetailInfo color="blue" title="Halaman"/>
                    <DetailInfo color="green" title="Lantai 2"/>
                    <DetailInfo color="brown" title="Station"/>
                </div>
        </div>
    )
}

export default CardInfo
