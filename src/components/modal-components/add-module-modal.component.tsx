import {Button, Modal} from "react-bootstrap";
import React, {ChangeEvent, ReactElement, useState} from "react";
import store from "../store";
import "./add-module-modal.component.scss"
import {ShowModal, Stack} from "../Interface/interface";
import Select from "react-select";
import {DataSelect} from "./data-select";

export enum General {
    module = 'module',
    updateModule = 'updateModule'
}

export function AddModuleModal({show, handleHide}: ShowModal): ReactElement {

    const initialData = {
        stackName: '',
        stackModule: '',
        selectModule: ''
    }
    const [formData, setFormData] = useState(initialData);
    const state = JSON.parse(localStorage.getItem('stacks') as string)
    const options = state.map((v: any) => {
        return {value: v.data.text, label: v.data.text}
    })
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
                        onChange={(selectOption: any) => selectValue((selectOption?.value), setFormData, formData)}
                    />
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide}>Close Modal</Button>
                <Button variant="primary"
                        onClick={() => saveModule(formData)}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

function saveModule(formData: { [key: string]: string }): void {
    const addStackForm = {
        text: formData?.selectModule,
        module: [
            {
                text: formData?.stackName
            }
        ]
    }
    const testing = store.getState().stacks.some((value: Stack) => value.data.text === formData?.selectModule)
    if (!testing) {
        store.dispatch({type: General.module, payload: [addStackForm]})
    } else {
        store.dispatch({type: General.updateModule, payload: [addStackForm]})
    }
    window.location.reload()
}

function selectValue(value: string | undefined, setState: Function, formData: { [key: string]: string }): void {
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
