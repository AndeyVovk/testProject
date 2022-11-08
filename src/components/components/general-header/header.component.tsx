import React, {ReactElement, useState} from "react"
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {AiOutlinePlusSquare} from "react-icons/ai";
import "./header.component.scss"
import {AddModuleModal} from "../../modal-components/add-module-modal.component";
import {AddStackModal} from "../../modal-components/add-stack/add-stack-modal.component";

function HeaderComponent(): ReactElement {
    const [show, setShow] = useState(false) as any;
    // @ts-ignore
    const handleShowModuleModal = () => setShow({isShowModel: true});
    // @ts-ignore
    const handleShowStackModal = () => setShow({isShowStack: true})

    const handleHide = () => setShow(false);
    return (
        <React.Fragment>
            <div>
                    <nav className="col-12 row">
                        <div className="ballStyle">
                            <label className="body-module col-2">
                                <button className="add-module" onClick={handleShowStackModal}>
                                    <AiOutlinePlusSquare/>
                                </button>
                                <span>
                                    add Stack
                                </span>
                            </label>

                            <label className="body-module col-2">
                                <button className="add-module" onClick={handleShowModuleModal}>
                                    <AiOutlinePlusSquare/>
                                </button>

                                <span>
                       add Module
                       </span>
                            </label>
                            <button className="buttonForLink col-2">
                                <Link className="styleForLink"
                                      to={'second'}>
                                    Stack Module
                                </Link>
                            </button>
                            <button className="buttonForLink col-2">
                                <Link className="styleForLink"
                                      to={'main'}>
                                    Stack Map
                                </Link>
                            </button>

                        </div>
                    </nav>
                <div>
                    <AddModuleModal show={show?.isShowModel} handleHide={handleHide}/>
                    <AddStackModal show={show?.isShowStack} handleHide={handleHide}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent
