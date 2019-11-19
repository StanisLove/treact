import React, { Component } from 'react';

import request from 'superagent';

import { apiUrl, spaceId, accessToken, environmentId } from '~/apiConstants';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.stat = { entries: [] };
  }

  componentDidMount() {
    request
      .get(`${apiUrl}/spaces/${spaceId}/environments/${environmentId}/entries`)
      .query({'content_type': 'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then((res) => console.log(res.body));
  }

  render() {
    return(
      <p>Products</p>
    );
  }
}

export default CatalogPage;
