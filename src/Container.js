// @flow
import React from 'react';
import List from './List';
import emitter from './emitter'
import { getApiUrl } from './utils'
import type { HeaderState, ContainerState } from './type'

class Container extends React.PureComponent<{}, ContainerState> {
  state: ContainerState = {
    status: 'init',
    data: {}
  };

  async getSearchResult(headerState: HeaderState) {
    try {
      this.setState({ status: 'loading' });
      const resp = await fetch(getApiUrl(headerState));
      const json = await resp.json();
      this.setState({
        data: { ...json },
        status: json.resultCount ? '' : 'noContent'
      });
    } catch (e) {
      this.setState({ status: 'error' });
    }
  }

  componentDidMount() {
    emitter.on('onchange', this.getSearchResult.bind(this));
  }

  componentWillUnmount() {
    emitter.removeListener('onchange');
  }

render() {
    const { data } = this.state;
    return (
      <div>
        <List {...data} />
      </div>
    );
  }
};

export default Container;