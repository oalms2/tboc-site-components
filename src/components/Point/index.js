import { Row, Column, Button, Image, } from "../toolbox";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const PointImage = styled(Image)`
	max-height: 40vh;
`;

const Point = ( { title, text, image, cta, reverse, }, ) => {
	return (
		<Row reverse = { reverse }>
			<Column>
				{ title && <h3>{ title }</h3> }

				{ text && <p>{ text }</p> }

				{ cta && 
					<Button 
						to = { cta.link }
						text = { cta.text }
						outline = "black"
					/>
				}
			</Column>

			<Column>
				<PointImage src = { image } alt = "Alt text"/>
			</Column>
		</Row>
	);
};

Point.propTypes = {
	cta: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}),
	image: PropTypes.string,
	reverse: PropTypes.bool,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default Point;