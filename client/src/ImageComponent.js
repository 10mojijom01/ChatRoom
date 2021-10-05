import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img className={this.props.className} src={this.props.url} alt={this.props.alt} />
                

            </div>
        );
    }
}

export default ImageComponent;
