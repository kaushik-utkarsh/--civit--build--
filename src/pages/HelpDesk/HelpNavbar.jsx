import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form, FormGroup, InputGroup, Input } from "reactstrap";
import { withNamespaces } from "react-i18next";
import { toggleRightSidebar } from "../../store/actions";
import CompanyLogo from "../../assets/images/logo-dark.png";
import '../../App-new.css'

const Header = ({ toggleRightSidebar, t }) => {
    const [isSearch, setIsSearch] = useState(false);

    const toggleFullscreen = () => {
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                );
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    };
    // const [isSearch, setIsSearch] = useState(false);

    const toggleMenu = () => {
        // Implement your toggleMenu functionality here
    };

    // const toggleFullscreen = () => {
        // ... (previous code)
    // };

    return (
        <>
            <header id="page-topbar" style={{ boxShadow: 'none' }}>
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <Button size="sm" color="none" type="button" onClick={toggleMenu} className="px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </Button> */}
                        <div className="logo logo-lg px-4">
                            <img src={CompanyLogo}  alt="company-logo"></img>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-none d-lg-inline-block  px-0" >
                            <button color="none" type="button" className=" noti-icon save-button-transparent waves-effect px-0" onClick={toggleFullscreen}>
                                Contact Us
                            </button>
                        </div>
                        <div className="dropdown d-none d-lg-inline-block px-0" >
                            <button color="none" type="button" className=" save-button-transparent noti-icon waves-effect" onClick={toggleFullscreen}>
                                Download Brochure
                            </button>
                        </div>
                        <div className="dropdown d-none d-lg-inline-block" >
                            <button color="none" type="button" className="save-button waves-effect" onClick={toggleFullscreen}>
                                Signup
                            </button>
                        </div>
                        <div className="dropdown d-none d-lg-inline-block ms-1 px-4" >
                            <button color="none" type="button" className=" cancel-button waves-effect" onClick={toggleFullscreen}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStatetoProps = state => {
    const { layoutType } = state.Layout;
    return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
