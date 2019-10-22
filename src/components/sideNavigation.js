import React, {Component} from "react";
import {MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBIcon} from "mdbreact";

class SideNavPage extends Component {
    state = {
        sideNavLeft: false,
        sideNavRight: false
    }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };

    render() {
        return (
            <dev>
                <MDBSideNav  fixed mask="rgba-blue-strong"  breakWidth={1300}
                            className="sn-bg-1">
                    <li>
                        <div className="logo-wrapper sn-ad-avatar-wrapper">
                            <a href="#!">
                                <img alt="" src="data:image/png;base64,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"
                                     className="rounded-circle"/>
                                <span>Control Panel</span>
                            </a>
                        </div>
                    </li>

                    <MDBSideNavNav>
                        <MDBSideNavLink to="/other-page" topLevel>
                            <MDBIcon icon="pencil-alt" className="mr-2"/>Dashboard
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/menu-list" topLevel>
                            <MDBIcon icon="pencil-alt" className="mr-2"/>Menu Management
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/other-page" topLevel>
                            <MDBIcon icon="pencil-alt" className="mr-2"/>Role Management
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/other-page" topLevel>
                            <MDBIcon icon="pencil-alt" className="mr-2"/>User Setup
                        </MDBSideNavLink>
                        {/*<MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">*/}
                        {/*    <MDBSideNavLink>Submit listing</MDBSideNavLink>*/}
                        {/*    <MDBSideNavLink>Registration form</MDBSideNavLink>*/}
                        {/*</MDBSideNavCat>*/}
                        {/*<MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">*/}
                        {/*    <MDBSideNavLink>For bloggers</MDBSideNavLink>*/}
                        {/*    <MDBSideNavLink>For authors</MDBSideNavLink>*/}
                        {/*</MDBSideNavCat>*/}
                        {/*<MDBSideNavCat name="About" id="about" icon="eye">*/}
                        {/*    <MDBSideNavLink>Instruction</MDBSideNavLink>*/}
                        {/*    <MDBSideNavLink>Monthly meetings</MDBSideNavLink>*/}
                        {/*</MDBSideNavCat>*/}
                        {/*<MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">*/}
                        {/*    <MDBSideNavLink>FAQ</MDBSideNavLink>*/}
                        {/*    <MDBSideNavLink>Write a message</MDBSideNavLink>*/}
                        {/*</MDBSideNavCat>*/}
                    </MDBSideNavNav>
                </MDBSideNav>

            </dev>
        );
    }
}

export default SideNavPage;