import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useState, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact, Menu } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import '../../App-new.css'
import { Card, CardBody, Col, Row, } from "reactstrap";
import Badge from 'react-bootstrap/Badge';


var filterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

const GridExample = () => {

  const gridOptions = {
    // domLayout: 'autoHeight',
    // paginationPageSize: 10,
    // animateRows: true,
    // // rowSelection: 'single',
    // rowSelection: 'multiple',
    // suppressMovableColumns: true, // Add this property
    pagination: true,
    paginationPageSize: 5,
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    suppressCellSelection: false,
    enableSorting: true,
    enableFilter: true,
    defaultColDef: {
      sortable: true,
      filter: true,
    },
    domLayout: 'autoHeight',
  };
  const rowSelection = 'multiple';
  const rowGroupPanelShow = 'always';
  const pivotPanelShow = 'always';
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: '', maxWidth: 50, headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true, filter: 'agSetColumnFilter'
    },
    { headerName: 'Sr. No', field: 'Sr. No', maxWidth: 100, filter: 'agNumberColumnFilter' },
    {
      field: 'Code',
      // filter: 'agDateColumnFilter',
      // filterParams: filterParams,
    },
    { field: 'Firm Name', filter: 'agTextColumnFilter' },
    {
      field: 'Status', filter: 'agMultiColumnFilter', cellRenderer: (params) => {
        // Customize this rendering logic based on your data
        const status = params.value; // Assuming 'Status' contains the status value

        // Customize the props as needed
        const badgeProps = {
          bg: status === 'Active' ? 'success' : 'danger',
          style: { borderRadius: '0' },
        };

        return <Badge {...badgeProps}>{status}</Badge>;
      },
    },
    { field: 'Contact Person', filter: 'agTextColumnFilter' },
    { field: 'Email', filter: 'agNumberColumnFilter' },
    { field: 'Mobile', filter: 'agNumberColumnFilter' },
    { field: 'Office Phone', maxWidth: 150, filter: 'agNumberColumnFilter' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      // minWidth: 150,
      rowDragManaged: true,
      filter: 'agTextColumnFilter',
      menuTabs: ['filterMenuTab'],
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const arr = [
    {
      '': 'Voyager',
      'Sr. No': 1,
      'Code': 'CLI/0030',
      'Firm Name': 'Test Firm Name',
      'Status': 'Active',
      'Contact Person': 'Raj Singh',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
    {
      '': 'Voyager',
      'Sr. No': 2,
      'Code': 'CLI/0030',
      'Firm Name': 'Test Firm Name',
      'Status': 'Active',
      'Contact Person': 'Raj kaushik',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
    {
      '': 'Voyager',
      'Sr. No': 3,
      'Code': 'CLI/0030',
      'Firm Name': 'Test Firm Name',
      'Status': 'Active',
      'Contact Person': 'Raj verma',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
    {
      '': 'Voyager',
      'Sr. No': 4,
      'Code': 'CLI/0030',
      'Firm Name': 'Test Firm Name',
      'Status': 'Deactive',
      'Contact Person': 'Raj verma',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
  ];


  const onGridReady = useCallback((params) => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((resp) => resp.json())
    //   .then((data) => 
    setRowData(arr)
  }, []);






  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center"> */}
      {/* Use Bootstrap Grid System */}
      {/* <div className="col-11 col-md-11 col-lg-11"> */}
      <Card style={{ paddingBottom:'none', paddingTop: '5rem', paddingLeft: '5rem', paddingRight: '5rem', borderRadius: '0', height: 'auto', margin: '1.5rem ', marginBottom: 'none' }}>
        <CardBody>
          <div style={containerStyle}>
            <div
              style={gridStyle}
              className={
                "ag-theme-quartz"
              }
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                gridOptions={gridOptions}
                pagination={true}

              />
            </div>
          </div>

        </CardBody>
      </Card>
      {/* </div> */}
      {/* </div> */}

    </>
  );

};


export default GridExample
