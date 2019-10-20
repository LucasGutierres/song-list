// @flow
import React from 'react';
import type { HeaderState, SearchResult } from './type';
import { Col, Row, Card } from 'react-materialize'

const SongItem = (props: SearchResult) => (
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

const AlbumItem = (props: SearchResult) => (
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

const ArtistItem = (props: SearchResult) => (
  <Row>
    <Col m={6} s={12}>
      <Card>
        <p className="card-title activator grey-text text-darken-4">{props.artistName}</p>
      </Card>
    </Col>
  </Row>
)

class Item extends React.PureComponent<{}, HeaderState>{
  constructor(props: Object) {
    super(props);
    this.setItem = this.setItem.bind(this);
  }

  setItem (data: Object) {
    if (data.kind === 'song') {
      return <SongItem {...data}/>
    } else if (data.collectionType === 'Album') {
      return <AlbumItem {...data}/>;
    } else if (data.artistType === 'Artist') {
      return <ArtistItem {...data}/>;
    }
  }

  render() {
    const createItem = this.setItem(this.props)
    return (
    <div>
      {createItem}
    </div>
		);
  }
}

export default Item