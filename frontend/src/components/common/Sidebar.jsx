import React, { useContext } from 'react';
import { AuthContext } from '../backend/context/Auth';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {logout} = useContext(AuthContext);
    return (
        <div>
            <div className="sidebar">
                <div className="card shadow border-0">
                    <div className="card-body p-4">
                        <h4>Sidebar</h4>
                        <ul>
                            <li>
                                <Link to="/admin/dashboard">DashBoard</Link>
                            </li>
                            <li>
                                <Link to="/admin/services">Services</Link>
                            </li>
                            <li>
                                <a href="">Project</a>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                            <li>
                              <button onClick={logout} className='btn btn-danger btn-sm mt-3'>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;