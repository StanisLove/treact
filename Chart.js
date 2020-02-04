import React, { Component } from 'react';
import c3 from 'c3';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = [
      ['data1', 1, 2, 3, 4, 5],
      ['data2', 2, 3, 4, 5, 6]
    ];
    // 1. Create ref object
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    debugger
    c3.generate({
      // 3. Get div from ref
      bindto: this.chartRef.current,
      data: { columns: this.data }
    });
  }

  render() {
    return (
      // 2. Assign div to ref current
      <div ref={this.chartRef} />
    )
  }
}

export default Chart;
