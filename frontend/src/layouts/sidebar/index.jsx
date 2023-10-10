import React, {useState} from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
function SidebarComponent(props) {
    const { pathname } = useLocation();
    console.log('pathname',pathname)
    const navData = [
        {
            title : 'dashboard',
            type: 'chilrent',
            icon: 'fa fa-tachometer-alt me-2',
            link: '/admin',
        },
        {
            title : 'Elements',
            type: 'parent',
            icon :'fa fa-laptop me-2',
            link: '/test',
            chilrent : [
                {
                    title : 'Buttons',
                    link: 'test',
                },
                {
                    title : 'Typography',
                    link: 'test',
                },
                {
                    title : 'Other Elements',
                    link: 'test',
                },
            ]
        },
        {
            title : 'Widgets',
            type: 'chilrent',
            icon: 'fa fa-th me-2',
            link: 'test',
        },
        {
            title : 'Forms',
            type: 'chilrent',
            icon: 'fa fa-keyboard me-2',
            link: 'test',
        }, 
        {
            title : 'Tables',
            type: 'chilrent',
            icon: 'fa fa-table me-2',
            link: 'test',
        },
    ]

    return(
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="../styles/adminPages/images/user.jpg" alt=""style={{width: '40px', height: '40px'}} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                
                <div className="navbar-nav w-100">
                    {navData.map(item => {
                        if(item.type == 'chilrent'){
                            return (<a href={item.link} className={(item.link === pathname ? 'nav-item nav-link active' : 'nav-item nav-link')}><i className={item.icon}></i>{item.title}</a>)
                        }else{ 
                            return (
                                <div className="nav-item dropdown">
                                    <a href={item.link} className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className={item.icon}></i>{item.title}</a>
                                    <div className="dropdown-menu bg-transparent border-0">
                                        {
                                            item.chilrent.map(chilrent => {
                                                return (<a href={chilrent.link} className="dropdown-item">{chilrent.title}</a>)
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <a href="table.html" className="nav-item nav-link"><i
                        className="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                            className="far fa-file-alt me-2"></i>Pages</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" className="dropdown-item">Sign In</a>
                            <a href="signup.html" className="dropdown-item">Sign Up</a>
                            <a href="404.html" className="dropdown-item">404 Error</a>
                            <a href="blank.html" className="dropdown-item">Blank Page</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SidebarComponent;