import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as  Router,Route,Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom"

import client from '../../axios_service/client';

class ClientAddForm extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            poid:'',
            tall:'',
            address:'',
            tel:'',
            remarque:'', 
            gender:'male',
            statu:"paye"
        };
        this.changeFirstname=this.changeFirstname.bind(this);
        this.changeLastname=this.changeLastname.bind(this);
        this.changeAge=this.changeAge.bind(this);
        this.changeTall=this.changeTall.bind(this);
        this.changePoid=this.changePoid.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changeAddress=this.changeAddress.bind(this);
        this.changeTel=this.changeTel.bind(this);
        this.changeRemarque=this.changeRemarque.bind(this);
        this.changeGender=this.changeGender.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
        this.adduser=this.adduser.bind(this);
    }
    changeFirstname(event){
            this.setState({
                firstName:event.target.value
            });
    }
    changeLastname(event){
            this.setState({
                lastName:event.target.value
            });
    }
    changeAge(event){
            this.setState({
                age:event.target.value
            });
    }
    changeTall(event){
            this.setState({
                tall:event.target.value
            });
    }
    changePoid(event){
            this.setState({
                poid:event.target.value
            });
    }
    changeEmail(event){
            this.setState({
                email:event.target.value
            });
    }
    changeAddress(event){
            this.setState({
                address:event.target.value
            });
    }
    changeTel(event){
            this.setState({
                tel:event.target.value
            });
    }
    changeRemarque(event){
            this.setState({
                remarque:event.target.value
            });
    }
    changeGender(event){
            this.setState({
                gender:event.target.value
            });
    }
    changeStatus(event){
            this.setState({
                statu:event.target.value
            });
    }
    adduser(event){
        event.preventDefault();
        let user={
            nomClient:this.state.lastName,
            prenomClient:this.state.firstName,
            telClient:this.state.tel,
            emailClient:this.state.email,
            roleClient:'client',
            motDePasse:this.state.lastName+this.state.firstName,
            status:this.state.statu,
            sexe:this.state.gender,
            address:this.state.address,
            text:this.state.remarque
        }
        
        console.log('user created '+JSON.stringify(user));
        client.createClient(user).then((res)=>{
            console.log(res.data);
                                              
            this.setState({gender:'male'});
            this.setState({ remarque:''});
            this.setState({tel:'' });
            this.setState({  statu:'paye'   });
            this.setState({   address:'' });
            this.setState({  email:''   });
            this.setState({   poid:''   });
            this.setState({   firstName:''  });
            this.setState({  lastName:''  });
            this.setState({   age:''   });
            this.setState({    tall:''  });
            });
            <Navigate to="/users" />
    }
    render() {
        return (
            <Fragment>
                    
                    <form onSubmit={this.adduser} className="row g-3 rounded border border-dark p-3 mt-5">
                        <h1>Add New Client</h1>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail10" className="form-label float-start">First Name</label>
                            <input type="text" className="form-control" id="inputEmail10" value={this.state.firstName} onChange={this.changeFirstname}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword11" className="form-label float-start">Last Name</label>
                            <input type="text" className="form-control" id="inputPassword11" value={this.state.lastName} onChange={this.changeLastname} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail10" className="form-label float-start">Age</label>
                            <input type="number" className="form-control" id="inputEmail10" min={0} value={this.state.age} onChange={this.changeAge}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword11" className="form-label float-start">Tall</label>
                            <input type="number" className="form-control" id="inputPassword11"  min={0} value={this.state.tall} onChange={this.changeTall}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label float-start">Poid</label>
                            <input type="number " className="form-control" id="inputEmail4" min={0} value={this.state.poid} onChange={this.changePoid}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label float-start">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" value={this.state.email} onChange={this.changeEmail}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAddress" className="form-label float-start">Address</label>
                            <input type="text" className="form-control" id="inputAddress" value={this.state.address} onChange={this.changeAddress}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="telinput" className="form-label float-start">Tél:  </label>
                            <input type="text" className="form-control" id="telinput" value={this.state.tel} onChange={this.changeTel}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="ramarqueinput" className="form-label float-start">Remarque: </label>
                            <input type="text" className="form-control" id="ramarqueinput" value={this.state.remarque} onChange={this.changeRemarque}/>
                        </div>
                        <div className="row md-12 col-md-6 mt-2">
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="genderradio" id="gridRadios1" value="male" checked={this.state.gender==="male"} onChange={this.changeGender}/>
                                    <label className="form-check-label float-start" htmlFor="gridRadios1">
                                    Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="genderradio" id="gridRadios2" value="female" checked={this.state.gender==="female"} onChange={this.changeGender}/>
                                    <label className="form-check-label float-start" htmlFor="gridRadios2">
                                    Female
                                    </label>
                                </div> 
                            </div>
                        </div>
                        <div className="row md-12 col-md-6 mt-2">
                            <legend className="col-form-label col-sm-2 pt-0">Status: </legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input " type="radio" name="statutradio3" id="statutradio1" value="paye" checked={this.state.statu==="paye"} onChange={this.changeStatus}/>
                                    <label className="form-check-label float-start" htmlFor="statutradio1">
                                    Payé
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="statutradio3" id="statutradio2" value="non paye" checked={this.state.statu==="non paye"} onChange={this.changeStatus}/>
                                    <label className="form-check-label float-start" htmlFor="statutradio2">
                                    Non payé
                                    </label>
                                </div> 
                            </div>
                        </div>
                        <div className="col-12 ">
                            
                                <button type="submit" className="btn btn-success ">Validate</button>
                            <Link to='/users/'>
                                <button type="submit" className="btn btn-danger mr-5">Cancel</button>
                            </Link>

                        </div>
                    </form>
            </Fragment>
           
        );
    }
}

export default ClientAddForm;