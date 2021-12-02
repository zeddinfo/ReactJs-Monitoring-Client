import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample, Gap, Loading } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'
import map from 'src/assets/images/bitmap.png'
import { useSelector, useDispatch } from 'react-redux'
import Pusher from 'pusher-js'
import IconPosition from './IconPosition';
import denahImg from '../../assets/images/denah.png';
import Api from 'src/Api'
import LoadingOverlay from 'react-loading-overlay'
import { BounceLoader, HashLoader } from 'react-spinners'
import CardInfo from '../../components/CardInfo';



const Heart_map = () => {
  const {position}= useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initPosition = async () => {
    const pusher = new Pusher('368963ad98d57e49870b', {
        cluster: 'ap1'
      }); 
  
      const channel = pusher.subscribe('my-pusher');
      channel.bind('App\\Events\\NewMessage', function(response) {
          dispatch({type: 'UPDATE_POSITION', payload: response.data});
      }); 
  }

  const getAllPosition = async() => {
    setLoading(true);
    const result = await Api.get('position')
    .then((response) => {
      console.log('response data', response.data);
      dispatch({type: 'UPDATE_POSITION', payload: response.data});
      setLoading(false);
    })
    .catch(error => {
      console.log('error call api', error);
      setLoading(false);
    })
  }

useEffect(() => {
  initPosition();
  getAllPosition();
  return () => {
    console.log('clean up');
  }
}, [dispatch]);


  console.log('state global', position);
  return (
    <LoadingOverlay
      active={loading}
      spinner={<HashLoader color="#33FFC7"/>}
    >
    <CRow>
      <CCol xs={12}>
        <div style={{flexDirection: 'row', display: 'flex'}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Image caps</small>
          </CCardHeader>
          <CCardBody>
              <CRow>
                <CCol lg={12}>
                  <CCard className="mb-3">
                    {position.length > 0 ? position.map((item, index) => {
                      return (
                        <div key={index} style={{position: 'absolute', top: item.position_y, left: item.position_x}}>
                        <IconPosition name="Lorem Ipsum" color='#FF11C9'/>
                      </div>
                      );
                     
                    }) : null}
                    <img src={denahImg}/>
                  </CCard>
                </CCol>
              </CRow>
          </CCardBody>
        </CCard>
        <Gap width={10}/>
        <CardInfo/>
        </div>
  
       
      </CCol>
      
    </CRow>
    </LoadingOverlay>
  
  )
}

export default Heart_map
