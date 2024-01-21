import React from 'react';
import './css/style.css';

class PlayerSelect extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="label">Character One</div>
                </div>
                <div className="box">
                    <div className="label">Character Two</div>
                </div>
                <div className="box">
                    <div className="label">Character Three</div>
                </div>
            </div>
        );
    }
}

export default PlayerSelect;