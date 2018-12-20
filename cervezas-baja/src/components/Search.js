import React from 'react';
import {
	InstantSearch,
	Hits,
	SearchBox,
	RefinementList,
	Pagination,
	CurrentRefinements,
	ClearRefinements
} from 'react-instantsearch-dom';
import Product from './Product';

function Search() {
	return (
		<div className="container">
			<SearchBox />
			<Hits hitComponent={Product} />
			<Pagination />
		</div>
	);
}

export default Search;
