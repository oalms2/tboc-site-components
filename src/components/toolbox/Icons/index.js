import React from "react";
import styled from "styled-components";
import { faLinkedin, faFacebook, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const iconMap = {
	linkedin: faLinkedin,
	facebook: faFacebook,
	twitter: faTwitter,
	youtube: faYoutube,
};

const _Icon = styled(FontAwesomeIcon)`
	margin: 0.5em;
`;

const Icon = ( props ) => (
	<_Icon 
		icon = { iconMap[ props.icon ] }
	/>
);

export { Icon, };