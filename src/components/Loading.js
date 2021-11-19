import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { BounceLoader } from 'react-spinners'

const Loading = ({active}) => {
    return (
        <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: 100}}>
            <LoadingOverlay
                active={active}
                spinner={<BounceLoader/>}
            >

            </LoadingOverlay>
        </div>
    
    )
}

export default Loading
