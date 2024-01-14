import React, { Component, useState } from 'react';
import { Card, CardBody, Col, Row, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button } from "reactstrap";


export const SideCard = () => {
    return (
        <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '105%' }}>
            <CardBody style={{ alignItems: 'start' }}>
                {steps.map((step) => (
                    <Row style={{ display: 'flex', alignItems: 'start' }} key={step.id}>
                        <div style={{ display: 'flex', gap: '20px', cursor: 'pointer' }} onClick={() => setActiveStep(step.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="128" cy="128" r="96" fill="none" stroke="#256EB5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"></circle>
                                {step.id < 6 && <polyline points="108 100 132 84 132 176" fill="none" stroke={activeStep === step.id ? "#256EB5" : "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="15"></polyline>}
                            </svg>
                            <div>
                                <h6 style={{ color: activeStep === step.id ? "#256EB5" : "#000", fontSize: "13px" }}>{step.title}</h6>
                                <p className="card-title-desc">{step.id === activeStep ? "Active" : "Optional"}</p>
                            </div>
                        </div>
                    </Row>
                ))}
            </CardBody>
        </Card>
    )
}
