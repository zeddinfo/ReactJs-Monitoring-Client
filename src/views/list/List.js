import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <CRow>
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
                    <CTableHeaderCell scope="col">Tag ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Departement</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
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
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Fanny</CTableDataCell>
                    <CTableDataCell>02</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                    <CTableDataCell>female</CTableDataCell>
                    <CTableDataCell>5</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>03</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>female</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
