import React from 'react';

class ZipForm extends React.Component {
    //To manage the state of zip codes entered
    constructor(props){
        //To call parent constructor
        super(props);

        //Initialize state
        this.state = {
            zipcode: ""
        };

        //To bind a context to the method during event callback so inputUpdated still connects and updates to state after page rendering.
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    }

    submitZipCode(e) {
        //prevents redirection
        e.preventDefault();

        //pulls internal state from inside this ZipFrom
        const{zipcode} = this.state;
        //passed onSubmit down from parent
        const{onSubmit} = this.props;

        onSubmit(zipcode);
        //to reset state and empty out form field after submission
        this.setState({zipcode: ''});
    }

    inputUpdated(e) {
        const {value} = e.target;

        this.setState({zipcode: value});
    }

    render () {
        return (
            <div className="zip-form">
            <form onSubmit={this.submitZipCode}>
            <label htmlFor="zipcode">Zip Code</label>
            <input
                className="form-control"
                type="input"
                name="zipcode"
                value={this.state.zipcode}
                onInput={this.inputUpdated}/>
            <button type="submit" className='btn btn-success'>Get The Forecast</button>
            </form>
            </div>
        );
    }
}

export default ZipForm;
