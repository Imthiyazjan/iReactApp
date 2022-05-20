import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Orders from './orders/Orders';
class Page extends React.Component {
    render() {
        return (            
                <div className="bg-light col-md-10">                
                    <Routes>
                    <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/product" element={<Dashboard />} />
                        <Route path="/customers" element={<Dashboard />} />
                    </Routes>                
                </div>            
        );
    }
}

export default Page;