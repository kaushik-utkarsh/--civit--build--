import React from 'react'
import { Container } from "reactstrap";
import search_line from "../../assets/images/search-line.svg";
import "../../App-new.css";
import './HelpDesk.css';

const SearchSection = () => {
  return (
    <div className=''>
      <div className='my-5 py-5 mb-0 pb-0 text-center align-items-center'>
        <h1 className='heading-600-24'>How can we help?</h1>
        <Container fluid className='p-0' >
          <div className='search-box d-flex justify-content-between mt-3 help-desk-search h-center'>
            <div className=' search-text align-items-center'>
              <p className='product-congif-item-para m-0 px-2'>Search for Functions (Add User, Add Role, Add company)</p>
            </div>
            <div className='mx-2'>
              <img src={search_line} alt="" />
            </div>
          </div>
        </Container>
        <div className='h-center m-3 p-1'>
          <div className='d-flex justify-content-center'>
            <div className='ms-1 p-3 '>
              Top searches
            </div>
            <div className='ms-3 pointer-global top-search'>
              Billing
            </div>
            <div className='ms-3 pointer-global top-search'>
              Bid Management
            </div>
            <div className='ms-3 pointer-global top-search'>
              Daily Report
            </div>
            <div className='ms-3 pointer-global top-search'>
              Add Employee
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchSection