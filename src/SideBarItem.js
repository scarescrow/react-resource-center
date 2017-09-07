import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from 'material-ui/Menu';

class SideBarItem extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
	}

	render() {
		return (
			<NavLink
				activeClassName="active"
				exact={this.props.isExact}
				to={this.props.linkTo}
				key={this.props.i}
			>
				<MenuItem onTouchTap={this.props.handleClose}>{this.props.primaryText}</MenuItem>
			</NavLink>
		);
	}
}

export default SideBarItem;