import React from 'react';
import './style.css';

export default class Switch extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: null
		}

        // bind _handleChange in constructor into context 'this'
        this._handleChange = this._handleChange.bind(this)
    }
	
	componentWillMount () {
		this.setState( { 
            isChecked: this.props.isChecked 
        } );
	}

    _handleChange () {
        this.setState( { 
            isChecked: !this.state.isChecked 
        } );
    }

    render () {

        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox" />
                    <div>          
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }

}
