import React, {useState} from 'react';
import SidebarComponent from "../../layouts/sidebar";
import HeaderComponent from "../../layouts/header";
import DashboardPages from "./dashboardPages";
import { Route, Link, Routes } from 'react-router-dom';
function AdminPage(props) {
   

    return(
        <>
            <div className="container-fluid position-relative d-flex p-0">
                {/*<div id="spinner"*/}
                {/*     className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
                {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">*/}
                {/*        <span className="sr-only">Loading...</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                
                {/*sitebar*/}
                <SidebarComponent/>
                
                <div className="content">

                    {/*header*/}
                    <HeaderComponent/>
                    <Routes>
                        <Route exact path={`/`} element={<DashboardPages/>} />
                    </Routes>

                    <div className="container-fluid pt-4 px-4">
                        <div className="bg-secondary rounded-top p-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 text-center text-sm-start">
                                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                                </div>
                                <div className="col-12 col-sm-6 text-center text-sm-end">
                                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                    <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>
        </>
    );
}

export default AdminPage;