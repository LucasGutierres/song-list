//@flow
import React from 'react';
import './searchBar.css'
import { TextInput, Col, Row, Button, Dropdown } from 'react-materialize'
import type { HeaderState, SearchOption } from './type'
import emitter from './emitter.js'

const options: Array<SearchOption> = [
  'Música',
  'Álbum',
  'Artista'
];

class Searchbar extends React.PureComponent<{}, HeaderState> {
	emitSearch: () => void;
  _onChange: (e: Object) => void;
  _onClick: (e: Object) => void;
  _update: (e: Object) => Function;
  ticking: boolean;
  rAf: any;

  state: HeaderState = {
    media: 'Música',
    query: ''
  };

  constructor(props: Object) {
    super(props);
    this.ticking = false;
    this.rAf = null;
    this.emitSearch = () => emitter.emit('onchange', this.state);
    this._onClick = e => this.setState(
      { media: e.target.textContent },
      () => (this.state.query.length ? this.emitSearch() : null)
    );
    this._update = ({ target: { value: query } }) => _ => {
      this.setState({ query }, () => query.length !== 0 && this.emitSearch());
      this.ticking = false;
    };
    this._onChange = e => {
      if (!this.ticking) {
        this.rAf = window.requestAnimationFrame(this._update(e));
        this.ticking = true;
      }
    };
  }

  renderSearchOption = () => options.map(opt =>
    <li
      key={opt}
      className={this.state.media === opt ? 'select' : ''}
    >
      <a
      	href='/#'
        tabIndex="0"
        role="button"
        onClick={this._onClick}
      >
        {opt}
      </a>
    </li>);

  componentWillUnmount() {
    window.cancelAnimationFrame(this.rAf);
  }

  render() {
    return (
    	<Row>
		    <Col className='searchWrapper' s={12}>
					<TextInput className='searchBox' s={8} value={this.state.value} placeholder='Type to search...' onChange={this._onChange}/>
					<Dropdown trigger={<Button id='openSelect' waves='light' style={{width: '33%', marginTop: '4%'}} s={4}>{this.state.media}</Button>}>
					  <ul>
            	{this.renderSearchOption()}
						</ul>
					</Dropdown>
				</Col>
			</Row>
    );
  }
}

export default Searchbar;