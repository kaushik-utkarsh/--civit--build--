import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Card, CardBody } from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "../../App-new.css";
import { Container, Row, Col} from "reactstrap";
import GreenTick from "../../components/Common/GreenTickSvg";
const UploadedFileList = () => {
    const [rowData, setRowData] = useState(/* Your data array here */);
    const [columnDefs, setColumnDefs] = useState([
        // {
        //   field: '', maxWidth: 50, headerCheckboxSelection: true,
        //   checkboxSelection: true,
        //   showDisabledCheckboxes: true, filter: 'agSetColumnFilter'
        // },
        { headerName: 'Sr. No', field: 'Sr. No', maxWidth: 100, filter: 'agNumberColumnFilter' },
        {
            field: 'File Name',
            // filter: 'agDateColumnFilter',
            // filterParams: filterParams,
        },
        {
            field: 'File Type', filter: 'agMultiColumnFilter', cellRenderer: (params) => {
                const status = params.value;
                return <Badge className='badge-data-hello'>{status}</Badge>;
            },
        },
        { field: 'Reference No.', filter: 'agNumberColumnFilter' },
        { field: 'Reference Date', filter: 'agDateolumnFilter' },
        { field: 'File Size', filter: 'agNumberColumnFilter' },
        { field: 'Uploaded On', filter: 'agDateColumnFilter' },
        { field: 'Uploaded By', maxWidth: 150, filter: 'agNumberColumnFilter' },
    ]);

    const containerStyle = useMemo(() => ({ width: '100%', height: 'auto' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: 'auto' }), []);

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
        paginationPageSize: 10,
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
            '': '',
            'Sr. No': 1,
            'File Name': 'Identification Document',
            'File Type': 'PDF',
            'Reference No.': 123456,
            'Reference Date': '12.04.23',
            'File Size': '5MB',
            'Uploaded On': '12.04.23-05:30PM ',
            'Uploaded By': 'John Wick',
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
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Client" breadcrumbItems={data} />
                    <Row>
                        {/* {isOpen === 1 && <AddClient onAddClientHandler={onNextPageHandler} />} */}
                        <div className="col col-md-12 add-client-button">
                            <div className="row">
                                <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
                                    <div>
                                        <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>Add Client</h4>
                                    </div>
                                    <div>

                                        <button className="save-button" >Save</button>
                                        <button className="cancel-button" >Cancel</button>
                                    </div>
                                </div>
                            </div>

                            {/* start */}
                            <Card style={{ height: '30rem', borderRadius: '0' }}>
                                <CardBody className="card-body">
                                    <Row>
                                        <Col xs={3}>
                                            <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '115%' }}>
                                                <CardBody style={{ alignItems: 'start' }} className="cstm-stepper-card">
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    COMPANY DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#256EB5", fontSize: "16px", marginBottom: '0px' }}>
                                                                    REGISTRATION DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    DOCUMENTS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />                                <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    BANK DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                        <Col xs={9}>
                                            <div className='mt-3'>
                                                {/* <div className='scrollable-container'> */}
                                                {/* <AvForm onValidSubmit={onSubmit} model={formValue}> */}
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
                                                <p className='pt-3' style={{ fontWeight: 'bolder', color: '#256eb5' }}>+ Add New Documents</p>
                                            </div>
                                            {/* </div> */}
                                        </Col>
                                    </Row>
                                </CardBody >
                            </Card >
                        </div>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default UploadedFileList;
