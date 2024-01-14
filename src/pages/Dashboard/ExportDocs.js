import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Card, CardBody } from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThreeDotSvg from '../../components/Common/ThreeDotSvg';
import Breadcrumbs from '../../components/Common/Breadcrumb';

const Dummy = () => {
  const [rowData, setRowData] = useState(/* Your data array here */);
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

  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      rowDragManaged: true,
      filter: 'agTextColumnFilter',
      menuTabs: ['filterMenuTab'],
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const gridOptions = {
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
  const arr = [
    {
      '': 'Voyager',
      'Sr. No': 1,
      'Code': 'CLI/0030',
      'Firm Name': 'Test ltd',
      'Status': 'Active',
      'Contact Person': 'Raj Singh',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
    {
      '': 'Voyager',
      'Sr. No': 2,
      'Code': 'CLI/0031',
      'Firm Name': 'OPQ Gov',
      'Status': 'Active',
      'Contact Person': 'Raj kaushik',
      'Email': 'abc@gmail.com',
      'Mobile': 9090909090,
      'Office Phone': 9090909090,
    },
    {
      '': 'Voyager',
      'Sr. No': 3,
      'Code': 'CLI/0032',
      'Firm Name': 'ABC Pvt Ltd',
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
  const exportToCsv = () => {
    const params = {
      suppressQuotes: false, // Set this to true if you want to suppress quotes around data
      fileName: 'exportedData.csv',
    };
    // Trigger CSV export
    const gridApi = gridRef.current.api;
    gridApi.exportDataAsCsv(params);
  };

  const gridRef = React.createRef();
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const notify = () => {
    toast.success('Client saved successfully!', {
      position: 'top-center',
      // autoClose: 20000, // Optional: Set the autoClose duration in milliseconds
      style: {
        background: 'green',
        color: 'white',
      },
      closeOnClick: true,
    });
  };

  const toggle = () => {
    setMenu((prevState) => !prevState);
  };
  const print_file = () => {
    window.print()
  }
  const handleClick = (item) => {
    // Handle the click event based on the clicked item
    console.log('Clicked:', item);
  };
  const data = {
    breadcrumbItems: [
      { title: "Product Config", link: "/" },
      { title: "Stakeholder Configuration", link: "#" },
      { title: "Client", link: "/" },
      { title: "Liberty Tower", link: "/" },
    ],
    reports: [
      { icon: "ri-stack-line", title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
      { icon: "ri-store-2-line", title: "Sales Revenue", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
      { icon: "ri-briefcase-4-line", title: "Average Price", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
    ]
  }
  useEffect(() => {
    // Example: Force a reflow by changing opacity
    const iconElement = document.querySelector('.bi-three-dots');
    if (iconElement) {
      iconElement.style.opacity = '0.99';
      setTimeout(() => {
        iconElement.style.opacity = '1';
      }, 0);
    }
  }, []);

  return (
    <>

      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Client" breadcrumbItems={data} />
              
            <div className="row">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                closeButton={false} // Disable the default close button
                // transition={Zoom}
                hideProgressBar={true}
                toastStyle={{
                  background: 'green',
                  // color: 'white',
                }}
              />
              <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>Client</h4>
                </div>
                <div>
                  <button className="save-button-view" onClick={notify}>Add Client</button>
                  <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block user-dropdown" >
                    <DropdownToggle tag="button" className="btn header-item waves-effect export-dropdown custom-square-dots-icon" id="page-header-user-dropdown">
                      <div className=''>
                        <ThreeDotSvg isOpen={menu} />
                      </div>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem onClick={print_file}>
                        <i className="ri-printer-line align-middle me-1"></i> {('Print')}
                      </DropdownItem>
                      <DropdownItem onClick={exportToCsv} className="d-block">
                        <span className="badge badge-success float-end mt-1"></span>
                        <i className="ri-download-line align-middle me-1"></i> {('Export')}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-md-12 col-lg-12"> */}
            <Card style={{ borderRadius: '0', height: '30rem' }}>
              <CardBody style={{ height: '200%' }}>
                <div style={containerStyle}>
                  <div style={gridStyle} className="ag-theme-quartz">
                    <AgGridReact
                      ref={gridRef}
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
          </Container>
        </div>
      </React.Fragment>
    </>
  );
};

export default Dummy;
