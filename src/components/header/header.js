import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import SSWLogo from '-!svg-react-loader!../../images/SSWLogo.svg';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
	exit: {
		y: '-100%',
		transition: {
			ease: 'easeInOut',
		},
	},
});

const Header = ({ title }) => (
	<AnimatedContainer>
		<header>
			<div className="flex ml-12 mt-4 mb-6">
				<div className="flex items-center">
					<Link to="/" className="unstyled">
						<SSWLogo aria-label="logo" />
					</Link>
					<h1 className="title ml-2">Our People</h1>
				</div>
			</div>
		</header>
	</AnimatedContainer>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
