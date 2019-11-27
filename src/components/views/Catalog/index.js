import React, { Component } from 'react';

import request from 'superagent';

import { apiUrl, spaceId, accessToken, environmentId } from '~/apiConstants';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    request
      .get(`${apiUrl}/spaces/${spaceId}/environments/${environmentId}/entries`)
      .query({'content_type': 'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        this.setState({ items })
      });
  }

  render() {
    return(
      <div>
        <p>Products</p>
        <ul>
          {
            this.state.items.map(
              (item, index) => (
                <li key={index}>{item.fields.name}</li>
              )
            )
          }
        </ul>
    </div>
    );
  }
}

export default CatalogPage;
