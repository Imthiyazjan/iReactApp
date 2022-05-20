import React, { useState } from 'react';
import validator from 'validator';
import {Button,Form,FloatingLabel,Container,Row,Col} from 'react-bootstrap';

const Orders = () => {
    const [email, setEmail] = useState('');
    const[emailValid,setEmailValid] = useState(false);
    const emailClass = emailValid ? "form-control is-valid" : "form-control is-invalid";

    const [password, setPassword] = useState('');
    const[passwordValid,setPasswordValid] = useState(false);
    const passwordClass = passwordValid ? "form-control is-valid" : "form-control is-invalid";

    const [address, setAddress] = useState('');
    const[addressValid,setAddressValid] = useState(false);
    const addressClass = addressValid ? "form-control is-valid" : "form-control is-invalid";

    const [address2, setAddress2] = useState('');
    const[address2Valid,setAddress2Valid] = useState(false);
    const address2Class = address2Valid ? "form-control is-valid" : "form-control is-invalid";

    const [city, setCity] = useState('');
    const[cityValid,setCityValid] = useState(false);
    const cityClass = cityValid ? "form-control is-valid" : "form-control is-invalid";

    const [state, setState] = useState('');
    const[stateValid,setStateValid] = useState(false);
    const stateClass = stateValid ? "form-control is-valid" : "form-control is-invalid";

    const [zip, setZip] = useState('');
    const[zipValid,setZipValid] = useState(false);
    const zipClass = zipValid ? "form-control is-valid" : "form-control is-invalid";

    function emailOnChangeHandler(event) {
        setEmail(event.target.value);    
        if (!validator.isEmail(event.target.value)) {
            setEmailValid(false);
            return;
        }
        setEmailValid(true);
    }


    function passwordOnChangeHandler(event){        
        setPassword(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setPasswordValid(false);
            return;
        }
        setPasswordValid(true);
    }

    function addressOnChangeHandler(event){
        setAddress(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setAddressValid(false);
            return;
        }
        setAddressValid(true);
    }

    function address2OnChangeHandler(event){
        setAddress2(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setAddress2Valid(false);
            return;
        }
        setAddress2Valid(true);
    }

    function cityOnChangeHandler(event){
        setCity(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setCityValid(false);
            return;
        }
        setCityValid(true);
    }    

    function stateOnChangeHandler(event){
        setState(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setStateValid(false);
            return;
        }
        setStateValid(true);
    }

    function zipOnChangeHandler(event){
        setZip(event.target.value);
        if (validator.isEmpty(event.target.value)) {
            setZipValid(false);
            return;
        }
        setZipValid(true);
    }

    function formSubmissionHandler(event) {
        event.preventDefault();
        if (!validator.isEmail(email)) {
            setEmailValid(false);
            return;
        }
        setEmailValid(true);

        if (validator.isEmpty(password))
        {
            setPasswordValid(false);
            return;
        }
        setPasswordValid(true);

        if (validator.isEmpty(address)) {
            setAddressValid(false);
            return;
        }
        setAddressValid(true);

        if (validator.isEmpty(address2)) {
            setAddress2Valid(false);
            return;
        }
        setAddress2Valid(true);

        if (validator.isEmpty(city)) {
            setCityValid(false);
            return;
        }
        setCityValid(true);

        if (validator.isEmpty(state)) {
            setStateValid(false);
            return;
        }
        setStateValid(true);

        if (validator.isEmpty(zip)) {
            setZipValid(false);
            return;
        }
        setZipValid(true);
    }

    

    return (
        <div>
            <div className="position-relative overflow-hidden p-3 bg-light">
                <Container fluid="md">
                    <Form className="row g-3" noValidate onSubmit={formSubmissionHandler}>
                        <Col md={6}>
                            <FloatingLabel controlId="txtEmail" label="Email address" className="mb-3">
                                <Form.Control type="email" className={emailClass} onChange={emailOnChangeHandler} aria-describedby="validationEmailFeedback" />
                                <Form.Control.Feedback id="validationEmailFeedback" type="invalid">
                                    Please choose a valid email.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId="txtPassword" label="Password" className="mb-3">
                                <Form.Control type="password" className={passwordClass} onChange={passwordOnChangeHandler} aria-describedby="validationPasswordFeedback" />
                                <Form.Control.Feedback id="validationPasswordFeedback" type="invalid">
                                    Please enter password.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={12}>
                            <FloatingLabel controlId="txtAddress" label="Address" className="mb-3">
                                <Form.Control type="text" className={addressClass}  onChange={addressOnChangeHandler} aria-describedby="validationAddressFeedback" />
                                <Form.Control.Feedback id="alidationAddressFeedback" type="invalid">
                                Please enter address.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={12}>
                            <FloatingLabel controlId="txtAddress2" label="Address 2" className="mb-3">
                                <Form.Control type="text" className={address2Class}  onChange={address2OnChangeHandler} aria-describedby="validationAddress2Feedback" />
                                <Form.Control.Feedback id="alidationAddress2Feedback" type="invalid">
                                Please enter address 2.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId="txtCity" label="City" className="mb-3">
                                <Form.Control type="text" className={cityClass} onChange={cityOnChangeHandler} aria-describedby="validationCityFeedback" />
                                <Form.Control.Feedback id="validationCityFeedback" type="invalid">
                                    Please enter city.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="txtState" label="State" className="mb-3">                                
                                <Form.Select aria-label="Default select example" className={stateClass} onChange={stateOnChangeHandler} aria-describedby="validationStateFeedback">
                                    <option value={null}>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback id="validationStateFeedback" type="invalid">
                                    Please enter state.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="txtZip" label="Zip" className="mb-3">                                
                            <Form.Control type="text" className={zipClass} onChange={zipOnChangeHandler} aria-describedby="validationZipFeedback" />
                                <Form.Control.Feedback id="validationZipFeedback" type="invalid">
                                    Please enter zip.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>                                                                                                                                                                     
                        <div className="col-12">
                            <Form.Check type="radio" id="chkAgree" label="Check me out"/>
                        </div>

                        <div className="col-12">
                            <Button type="submit" variant='outline-primary'>Sign in</Button>
                        </div>
                    </Form>
                </Container>
            </div>            
        </div>
        
    )
}

export default Orders;