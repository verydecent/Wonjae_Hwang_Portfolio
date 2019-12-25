import React from 'react';

export const Card = ({ title, children, footer }) => {
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            {children}
            <div className="footer">{footer}</div>
        </div>
    );
}