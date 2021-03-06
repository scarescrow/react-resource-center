import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem';

const links = [
	{ isExact: true, linkTo: '/', text: 'Home'},
	{ isExact: false, linkTo: '/logos', text: 'Logos'},
	{ isExact: false, linkTo: '/posters', text: 'Posters'},
	{ isExact: false, linkTo: '/letterhead', text: 'Letterhead'},
	{ isExact: false, linkTo: '/share-a-story', text: 'Share a Story'},
	{ isExact: false, linkTo: '/service-request-form', text: 'Service Request Form'},
	{ isExact: false, linkTo: '/tutorial', text: 'Tutorial'},
];

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
	}

	handleClose = () => this.setState({ open: false });
	handleOpen = () => this.setState({ open: true });

	render() {
		return (
			<div>
				<ButtonAppBar handleButtonOpen={this.handleOpen} />
				<Drawer
					open={this.state.open}
					onRequestClose={() => this.setState({open: false})}
					onClick={this.handleClose}
				>
					{links.map((link, i) => {
						return (
							<SideBarItem
								isExact={link.isExact}
								linkTo={link.linkTo}
								primaryText={link.text}
								handleClose={this.handleClose}
								key={i}
								i={i}
							/>
						);
					})}
				</Drawer>
			</div>
		);
	}
}

export default SideNav;