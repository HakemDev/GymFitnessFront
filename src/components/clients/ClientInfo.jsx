import React, { Component,Fragment } from 'react';
import './ClientInfo.css';
import { useParams } from 'react-router-dom';
import client from '../../axios_service/client';

export function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }

class ClientInfo extends Component {
    constructor(props){
        super(props)
        //29 to get id you should write this.props.match.params.id 
        this.state={
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            poid:'',
            tall:'',
            address:'',
            tel:'',
            remarque:'', 
            gender:'',
            statu:""
        };
    }
     componentDidMount(){
              client.getCleintById(this.state.id).then((res)=>{
                    //console.log(res.data);
                    let user=res.data;
                    this.setState({firstName:user.prenomClient,
                    lastName:user.nomClient,
                    email:user.emailClient,
                    address:user.address,
                    tel:user.telClient,
                    remarque:user.text, 
                    gender:user.sexe,
                    statu:user.status
                    
                    });
                });
     }
    render() {
        return (
                <Fragment>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-8  row border ">
                                <div className="col-md-4 gradient-custom text-center text-white ara" >
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5 araa"  />
                                    <h5>{this.state.firstName} {this.state.lastName}</h5>
                                    <p>Musculation</p>
                                </div>
                                <div className="col-md-8 azaza">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4"/>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{this.state.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">{this.state.tel}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Status</h6>
                                                <p className="text-muted">{this.state.statu}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Sexe</h6>
                                                <p className="text-muted">{this.state.gender}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Address</h6>
                                                <p className="text-muted">{this.state.address}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Remarque</h6>
                                                <p className="text-muted">{this.state.remarque || 'no data'} </p>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                        </div> 
                    </div>
                </Fragment>
        );
    }
}

export default withRouter(ClientInfo);