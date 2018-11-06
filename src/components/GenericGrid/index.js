import { MaybeLink, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import EntryWrapper from "./EntryWrapper";
import GridEntries from "./GridEntries";
import TableEntries from "./TableEntries";
import marked from "marked";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// --------------------------------------------------

const SortingOptions = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	flex-direction: row;
	display: flex;

	> div {
		margin: 0 0.5rem;

		&:hover {
			opacity: 0.7;
		}
	}
`;

const GridWrapper = styled.div`
	${ props => props.sorting && `
		position: relative;
		padding-top: 5em
	` }
`;

// --------------------------------------------------

class GenericGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			table: true,
			oldest: false,
		};

		this.toggleTable = this.toggleTable.bind(this);
		this.toggleSorting = this.toggleSorting.bind(this);
	}

	toggleTable() {
		this.setState(prevState => ({
		  table: !prevState.table,
		}));
	}



	toggleSorting() {
		this.setState(prevState => ({
		  oldest: !prevState.oldest,
		}));
	}

	render() {
		let { entries, slug, sorting, } = this.props;

		entries = entries.map( entry => {
			return entry.node || entry;
		});

		if (entries[0].publishingDate) { // can be sorted
			if(this.state.oldest) {
				entries.sort((a, b) => {
					return (
						new Date(a.publishingDate) -
						new Date(b.publishingDate)
					);
				});
			} else {
				entries.sort((a, b) => {
					return (
						new Date(b.publishingDate) -
						new Date(a.publishingDate)
					);
				});
			}
		};

		return (
			<GridWrapper sorting = { sorting }>
				{sorting && 
					<SortingOptions>
						<div onClick = { this.toggleTable }>{ this.state.table ? "Grid view" : "Table view" }</div>

						<div onClick = { this.toggleSorting }>{ this.state.oldest ? "Newest first" : "Oldest first" }</div>
					</SortingOptions>
				}
				
				{
					this.state.table ?
						<TableEntries slug = { slug } entries = { entries }/> :
						<GridEntries sorting = { sorting } entries = { entries }/>
				}
			</GridWrapper>
		);
	}
};

GenericGrid.propTypes = {
	entries: PropTypes.array.isRequired,
	slug: PropTypes.string,
};

export default GenericGrid;
