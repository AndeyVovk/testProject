import {Button, Modal} from "react-bootstrap";
import React, {ChangeEvent, ReactElement, useState} from "react";
import store from "../store";
import "./add-module-modal.component.scss"
import {ShowModal} from "../Interface/interface";
import Select from "react-select";
import {DataSelect} from "./data-select";
import {state} from "@react-rxjs/core";

export enum General {
    module = 'module'
}

export function AddModuleModal({show, handleHide}: ShowModal): ReactElement {

    const options = new DataSelect().options
    const initialData = {
        stackName: '',
        stackModule: '',
        selectModule: ''
    }
    const [formData, setFormData] = useState(initialData);
    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Module</Modal.Title>
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
                        onChange={(selectOption) => selectValue(selectOption?.value, setFormData, formData)}
                    />
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide}>Close Modal</Button>
                <Button variant="primary"
                        onClick={(v) => saveModule(v, formData)}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}


function saveModule(value: any, formData: any): void {
    const addStackForm = {
        text: value?.stackName,
        module: [
            {
                text: value?.stackModule
            }
        ]
    }
    store.dispatch({type: General.module, payload: [addStackForm]})
    window.location.reload()
}

function selectValue(value: any, setState: Function, formData: any): void {
    setState(() => ({
            ...formData,
            selectModule: value
        }
    ))
}

function handleChange(event: ChangeEvent<HTMLInputElement>, setFormData: Function) {
    event.preventDefault();
    const {name, value} = event.target;
    setFormData((formData: any) => ({
        ...formData,
        [name]: value,
        module: value
    }))
}
