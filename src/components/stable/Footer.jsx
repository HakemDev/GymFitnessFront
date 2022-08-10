import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center text-lg-start bg-light text-muted mt-5">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>Sud Fitness
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                        </div>

                        

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                packs
                            </h6>
                            <p className="text-reset">
                                Musuculation
                            </p>
                            <p  className="text-reset">
                                Fitness
                            </p>
                            <p  className="text-reset">
                                Box
                            </p>
                            <p className="text-reset">
                                Taekwando
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> Elhouda, Agadir</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            sudfitness@gmail.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 212694825926</p>
                        
                        </div>
                    </div>
                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="#">SudFitness.com</a>
                </div>
            </footer>   
        );
    }
}

export default Footer;