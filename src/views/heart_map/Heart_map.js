import React, {useEffect} from 'react'
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
import { DocsCallout, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'
import map from 'src/assets/images/bitmap.png'
import { useSelector, useDispatch } from 'react-redux'
import Pusher from 'pusher-js'



const Heart_map = () => {

 

  const {position} = useSelector(state => state);
  const dispatch = useDispatch();

  const initPosition = () => {
    const pusher = new Pusher('368963ad98d57e49870b', {
        cluster: 'ap1'
      }); 
  
      const channel = pusher.subscribe('my-pusher');
      channel.bind('App\\Events\\NewMessage', function(response) {
          dispatch({type: 'UPDATE_POSITION', payload: response.data});
      });
}

useEffect(() => {
  initPosition();
}, [dispatch]);


  console.log('state global', position);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Image caps</small>
          </CCardHeader>
          <CCardBody>
              <CRow>
                <CCol lg={12}>
                  <CCard className="mb-3">
                    <CCardImage orientation="top" src={map} />
                  </CCard>
                </CCol>
              </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Heart_map
