import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Current_tag = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong>
          </CCardHeader>
          <CCardBody>
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Select Name :
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>

                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Tag Type :
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>

                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Tag Status :
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>

                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Scene Map :
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>

                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Battery :
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>
                </CRow>
                <CButton type="submit">Export</CButton>
                <CButton type="submit">Setup</CButton>
                <CButton type="submit">Query</CButton>
                <CButton type="submit">Reset</CButton>
              </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Personnel List</strong>
          </CCardHeader>
          <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">TagID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grouping</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Electricity quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heart rate (interval)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tag status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Today's mileage</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Map</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Reg</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>01</CTableDataCell>
                    <CTableDataCell>Humas</CTableDataCell>
                    <CTableDataCell>Male</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>
                        <a>Location</a>
                        <a>Video</a>
                        <a>Details</a>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Fanny</CTableDataCell>
                    <CTableDataCell>02</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                    <CTableDataCell>female</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>
                        <a>Location</a>
                        <a>Video</a>
                        <a>Details</a>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>03</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>female</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>
                        <a>Location</a>
                        <a>Video</a>
                        <a>Details</a>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Current_tag
