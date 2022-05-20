import React from 'react';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="position-relative overflow-hidden p-3 text-center bg-light">
                    <div className="col-md-12">
                        <h1 className="display-6 fw-normal text-dark">Dashboard</h1>
                        <p className="lead fw-normal">Page:Dashboard</p>
                        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>
        )
    }
}

export default Dashboard;