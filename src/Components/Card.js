import React from 'react';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h1 className="card-title">Wonjae Hwang</h1>
                <ul className="card-list">
                    <li className="card-list-item"><a href="/">About</a></li>
                    <li className="card-list-item"><a href="/">Portfolio</a></li>
                    <li className="card-list-item"><a href="/">Contact</a></li>
                </ul>
                <div className="footer">EST. 2020</div>
            </div>
        </div>
    );
}

export default CanvasDrawImage;