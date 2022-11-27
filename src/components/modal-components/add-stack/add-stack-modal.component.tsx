import React, {ChangeEvent, ReactElement, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {General} from "../add-module-modal.component";
import store from "../../store";
import {ShowModal, Stack} from "../../Interface/interface";
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
                <span>Stack name</span>
                <input type="text"
                       name="stackName"
                       value={formData.stackName}
                       onChange={($event: ChangeEvent<HTMLInputElement>) => handleChange($event, setFormData)}
                />
            </label>
            <label className="input-module">
                <span>Stack Competency (select)</span>
                <Select
                    options={options}
                    onChange={(selectOption) => selectValue(selectOption?.value, setFormData, formData)}
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
        text: formData?.selectModule,
        module: [
            {
                text: formData?.stackName
            }
        ]
    }
    debugger;
    const testing = store.getState().stacks.some((value: Stack) => value.data.text === formData?.selectModule)
    if (!testing) {
        store.dispatch({type: General.module, payload: [addStackForm]})
    } else {
        store.dispatch({type: General.updateModule, payload: [addStackForm]})
    }
    window.location.reload()
}

function handleChange(event: ChangeEvent<HTMLInputElement>, setFormData: Function) {
    event.preventDefault();
    const {name, value} = event.target;
    setFormData((formData: any) => ({
        ...formData,
        [name]: value,
    }))

}

function selectValue(value: string | undefined, setState: Function, formData: { [key: string]: string }): void {
    setState(() => ({
            ...formData,
            selectModule: value
        }
    ))
}
