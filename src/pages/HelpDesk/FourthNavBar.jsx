import React, { useState } from "react";
import { connect } from "react-redux";
import CompanyLogo from "../../assets/images/logo-light.png";

import { withNamespaces } from "react-i18next";
import ProfileMenu from "../../components/CommonForBoth/TopbarDropdown/ProfileMenu";

const Header = () => {
    const [isSearch, setIsSearch] = useState(false);

    const toggleFullscreen = () => {
        const element = document.documentElement;
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                );
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };

    return (
        <header id="page-topbar" style={{ boxShadow: 'none' }}>
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="logo logo-lg px-4">
                        <img src={CompanyLogo} alt="company-logo"></img>
                    </div>
                </div>
                <div className="d-flex align-items-center">
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
                    <ProfileMenu />
                </div>
            </div>
        </header>
    );
};

const mapStatetoProps = state => {
    const { layoutType } = state.Layout;
    return { layoutType };
};

export default connect(mapStatetoProps, {})(withNamespaces()(Header));
