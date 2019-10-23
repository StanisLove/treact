import React, { Component, Fragment } from 'react'

class EventListener extends Component {
  constructor(props) {
    super(props);

    this.state = { eventType: 'Unknown' };
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({
      eventType: event.type
    });
  }

  render() {
    return (
      <Fragment>
        <h2>{`Event type: ${this.state.eventType}`}</h2>
        <textarea
          style={{ border: '1px solid #000' }}
          // onChange={this.update}
          onPaste={this.update}
          onCopy={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
        />
      </Fragment>
    );
  }
}

export default EventListener
