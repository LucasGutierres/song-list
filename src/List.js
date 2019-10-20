// @flow
import React from 'react';
import Item from './Item';
import type { SearchResult } from './type';

const List = ({
	results,
	resultCount
}: {
	results: Array<SearchResult>,
	resultCount: number
}) => (
	<div>
		{resultCount > 0 ? results.map((item, i) => <Item key={item.trackId || i} {...item} />) : null}
	</div>
);

export default List;