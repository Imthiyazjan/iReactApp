import React from 'react';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="position-relative overflow-hidden p-3 text-center bg-light">
                    <div className="col-md-12">
                        <h1 className="display-6 fw-normal text-dark">Home</h1>
                        <p className="lead fw-normal">Page:Home</p>
                        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>
        );
    }
}

export default Home;