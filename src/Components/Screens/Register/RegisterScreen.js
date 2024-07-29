import React, { useRef, useState } from "react";
import Logo from '../../Images/logo.png';
import '../../Styles/RegisterScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom'
import { db } from "../../../firebase";
import { auth } from "../../../firebase";
// import Dropdown from 'bootstrap-react/Dropdown'
const RegisterScreen = () => {
    const [Phonenumber, setPhonenumber] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Address, setAddress] = useState("");
    const [selector, setSelector] = useState("");
    const [Title, setTitle] = useState("");
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const {uid,emailRef,Firstname,Phonenumber,Lastname} = data
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('password do not match')
        }
        try {
            setError('')

            //   await signup(emailRef.current.value,passwordRef.current.value)
            await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
                .then(res => {
                    const user={
                        Firstname: Firstname,
                        LastName: Lastname,
                        Address:Address,
                        emailRef: emailRef.current.value,
                        Title: Title,
                        Selector:selector,
                        uid: res.user.uid
                    }
                      console.log(user)
                    db.ref('/user')
                    .child(res.user.uid)
                    .set(user)
                    .then((result) => {
                        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<")
                        try {
                
                            localStorage.setItem("user", res.user.uid)
                        } catch (e) {
                          // saving error
                          console.log('no data')
                        }
                        history.push('/account')
                    }).catch((error) => {
                        console.log(error, "----------------------")
                        setError(error)
                    })
                })
        } catch (error) {
            setError('failed to create an account',)
        }


    }

    return <div className="container-fluid w-100 h-100 m-0 p-0 main-container-register bg-primary d-flex p-3">
        <Container className="p-2 main-register-con d-flex">
            
                <Card className="w-100 card-register bg-light">
                    
                    <Card.Body className="justify-content-center text-center con-login">
                        {/* <img src={Logo} alt="logo" /> */}

                        <div className="justify-content-center text-center align-items-center info-con-register">
                            <hr className="p-0 m-0 bg-secondary" />
                            <p className="text-secondary pt-2">Please enter  credentials to register for an account.</p>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <hr className="p-0 m-0 bg-secondary" />
                        </div>

                        <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                            <Form className="form pe-5 ps-5 mt-4" onSubmit={handleSubmit}>
                                <div className="inputs-con">

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                                <input type="email" required ref={emailRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter  email'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                        <select class="custom-select" id="gender3" 
          value={selector} onChange={e=>setSelector(e.target.value)} >
            <option selected>Choose...</option>
            <option  name="Mr" >Mr</option>
            <option name="Miss" >Miss</option>
            <option name="Mrs" >Mrs</option>
            <option name="DR" >DR</option>
            <option name="PROF" >PROF</option>
          </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setFirstname(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Name'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setLastname(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Lastname'></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setTitle(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Highest Qualification'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setAddress(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Address'></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-0  input-in">
                                                <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                                                <input type="password" required ref={passwordRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Password'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-0 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                                                <input type="password" required ref={passwordConfirmRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Password Confirm'></input>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Button type="submit" className="btn d-block acc-update-btn mt-4">CREATE Account</Button>

                                <div className="row pt-3 w-50 m-auto">
                                    <div className="col col-md-12 ps-3">
                                        <p className="text-secondary">Already have an account? <Link to="/" className="ps-3 text-primary">Sign In</Link></p>
                                    </div>
                                    <div className="col col-md-4">
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
        </Container>


    </div>;
};

export default RegisterScreen;
