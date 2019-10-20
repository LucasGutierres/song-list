import React from 'react';
import type { SearchResult } from './type';
import { Col, Row, Card } from 'react-materialize'

export const SongItem = (props: SearchResult) => (
	<Row>
		<Col m={6} s={12}>
			<Card horizontal 
				header={<img alt='Cover' src={props.artworkUrl100} style={{width:'100px',height:'100px'}} />}>
				<p className="card-title activator grey-text text-darken-4">{props.trackName}</p>
				<p>Álbum: {props.collectionName}</p>
				<p>{props.artistName}</p>
			</Card>
		</Col>
	</Row>
)

export const AlbumItem = (props: SearchResult) => (
	<Row>
		<Col m={6} s={12}>
			<Card horizontal 
				header={<img alt='Capa' src={props.artworkUrl100} style={{width:'100px',height:'100px'}} />}>
				<p className="card-title activator grey-text text-darken-4">{props.collectionName}</p>
				<p>{props.artistName}</p>
			</Card>
		</Col>
	</Row>
)

export const ArtistItem = (props: SearchResult) => (
	<Row>
		<Col m={6} s={12}>
			<Card>
				<p className="card-title activator grey-text text-darken-4">{props.artistName}</p>
			</Card>
		</Col>
	</Row>
)