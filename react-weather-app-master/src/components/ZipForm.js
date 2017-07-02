import React from 'react';
import PropTypes from 'prop-types';

class ZipForm extends React.Component {
    //To manage the state of zip codes entered
    constructor(props){
        //To call parent constructor
        super(props);

        //To bind a context to the method during event callback so inputUpdated still connects and updates to state after page rendering.
        this.submitZipCode = this.submitZipCode.bind(this);
    }

    submitZipCode(e) {
        //passed onSubmit down from parent
        const{onSubmit} = this.props;

        onSubmit(e.target.value);

    }

    render () {
      return (
        <div className="zip-form">
          <form>
            <label htmlFor="zipcode">Zip Code</label>
            <select onChange={this.submitZipCode}>
              <option value="">Select a zip</option>
              {this.props.zips.map(zip =>
                <option key={zip} value={zip}>{zip}</option>
              )}
              </select>
          </form>
      </div>
);
    }
}

ZipForm.PropTypes = {
  zips: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSubmit: PropTypes.func
}

ZipForm.defaultProps = {
  onSubmit: () => {}
};

export default ZipForm;
