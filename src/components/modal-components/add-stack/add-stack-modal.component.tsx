import React, {ChangeEvent, ReactElement, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {General} from "../add-module-modal.component";
import store from "../../store";
import {ShowModal} from "../../Interface/interface";
import Select from 'react-select';
import {DataSelect} from "../data-select";

export function AddStackModal({show, handleHide}: ShowModal): ReactElement {
    const options = new DataSelect().options

    const [formData, setFormData] = useState({
        stackName: '',
        stackModule: '',
        selectModule: ''
    });
    return (<Modal show={show} onHide={handleHide}>

        <Modal.Header closeButton>
            <Modal.Title>Add Stack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label className="input-module">
                <span>Module name</span>
                <input type="text"
                       name="stackName"
                       value={formData.stackName}
                       onChange={($event: ChangeEvent<HTMLInputElement>) => handleChange($event, setFormData)}
                />
            </label>
            <label className="input-module">
                <span>Module Competency (select)</span>
                <Select
                    options={options}
                />
            </label>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleHide}>Close Modal</Button>
            <Button variant="primary" onClick={() => saveModule(formData)}>Save</Button>
        </Modal.Footer>
    </Modal>)
}

function saveModule(formData: any): void {
    const addStackForm = {
        text: formData?.stackName,
        module: [
            {
                text: formData?.stackModule
            }
        ]
    }
    store.dispatch({type: General.module, payload: [addStackForm]})

}

function handleChange(event: ChangeEvent<HTMLInputElement>, setFormData: Function) {
    event.preventDefault();
    const {name, value} = event.target;
    setFormData((formData: any) => ({
        ...formData,
        [name]: value,
    }))

}
