import React, { Component,Fragment } from 'react';
import client from '../../axios_service/client';
import {Link} from 'react-router-dom';
import Alert from '../stable/alert';
class ClientsDisplay extends Component {
    constructor(props){
        super(props)

        this.state={
            clients:[],
            error:'false',
            textErro:''
            }
        this.deleteUser=this.deleteUser.bind(this);
        this.searchByname=this.searchByname.bind(this);
     let error
           
    }

    componentDidMount(){
        client.getclients().then((res)=>{
            //console.log(res.data);
            this.setState({clients:res.data});
        });
    }
        //22 a chaque fois on clique sur add new client on va faire this route(adduser) by using link
    deleteUser(id){
            console.log("id "+id);
            client.deleteClient(id).then((res)=>{
            //console.log(res.data);
            this.setState({clients:this.state.clients.filter((client)=>client.idClient !== id)});
        });
    }
    searchByname(e){
        let inputSearch=document.querySelector('.searchByName');
        if(inputSearch.value==''){
            console.log("hey");
            return;
        };
        if(e.key==="Enter" || e.type ==="click")
            {
                client.searchClientByName(inputSearch.value).then((res)=>{                 
                          //  console.log(res);
                           this.setState({clients:res.data});
                }).catch(err=>{
                    console.log(err.response.data.message);
                    this.setState({
                        textErro:err.response.data.message
                    });
                    this.setState({
                        error:'true' 
                    });
                    setInterval(()=>{
                        this.setState({
                                 error:'false' 
                             });
                    },4000)
                })
            }
                            console.log(this.state.error+"  aaaaa  "+ this.state.textErro );

    }
    
    render() {
        const eas=this.state.error;
        return (
            
               <div>
                 {eas==="true" ?  (<Alert className='alert alert-warning d-flex align-items-center' er={this.state.textErro}>aaaasa</Alert>):""}   
                <nav className="navbar navbar-light bg-light">
                    
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bolder font-monospace">Lists of clients: </a>
                        <Link to='/adduser'>
                            <button type="button" className="btn btn-outline-info btn-rounded"  data-mdb-ripple-color="dark">
                              <i className="fas fa-plus ml-3"></i>
                              <span className='m-1'>Add new client</span>
                        </button>
                        </Link>
                        <div className="d-flex input-group w-auto">
                            
                            <input
                                type="search"
                                className="form-control rounded searchByName"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                onKeyDown={this.searchByname}
                            />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search" onClick={this.searchByname}></i>
                            </span>
                        </div>
                    </div>
                </nav>
                <table className="table align-middle mb-0 bg-white rounded-8 ">
                    <thead className="bg-grayish rounded-circl">
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>tél</th>    
                            <th>Status</th>                    
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map(
                                client=>
                                    <tr   key={client.idClient}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                            <img
                                                src="profil.png"
                                                alt=""
                                                width= '45px'
                                                height='45px'
                                                className="rounded-circle"
                                                />
                                            <p className="fw-bold mb-1 text-center">{client.prenomClient} {client.nomClient}</p>
                                            
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-muted mb-0">{client.emailClient}</p>
                                        </td>
                                        <td>
                                            {client.telClient}
                                        </td>
                                        <td >
                                            <span  className={client.status==='paye'? 'badge badge-success bg-success p-2 text-dark bg-opacity-25 rounded-pill  d-inline ':'badge badge-danger bg-danger  p-2 text-dark bg-opacity-25 rounded-pill '}> {client.status} </span>
                                        </td>
                                        
                                        <td>
                                            <Link to={`/update-client/${client.idClient}`}>
                                                <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                    Edit
                                                </button>
                                            </Link>
                                            
                                            <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={()=>this.deleteUser(client.idClient)}>
                                             Delete
                                            </button>

                                            <Link to={`/display-client/${client.idClient}`}>
                                                <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                        }
                      
                    </tbody>
                </table>
                </div>
        );
    }
}

export default ClientsDisplay;