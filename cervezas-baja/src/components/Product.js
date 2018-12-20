import React from 'react';
import { InstantSearch, Hits, Highlight } from 'react-instantsearch-dom';

function Product({ hit }) {
	console.log(hit);
	return (
		<div className="beer-item" style={{ marginTop: '10px' }}>
			<img
				style={{ width: '50px', margin: '25px auto', display: 'block' }}
				src={hit.label}
				alt="beer logo."
			/>
			<span className="hit-name" />
			<Highlight
				style={{ fontSize: '24px', fontWeight: 'bold' }}
				attribute="name"
				hit={hit}
			/>
			<p style={{ fontSize: '12px', margin: '10px' }}>
				Tipo de Cerveza: {hit.style}
				<br />
				Porcentaje de Alcohol (ABV): {hit.abv + '%'}
				{/* {hit.description.length > 0 ? 'Descripcion:' + hit.description : ''} */}
			</p>
			<p style={{ fontSize: '12px', margin: '10px' }}>
				Cervezeria: {hit.brewery.brewery_name}
			</p>
		</div>
	);
}

export default Product;
