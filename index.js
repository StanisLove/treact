import React, { Children } from 'react';
import ReactDOM from 'react-dom';

const Segment = ({ children, color, dashed }) => (
  <div style={{ border: `1px ${dashed ? 'dashed' : 'solid'} ${color}` }}>
    {
      Children.map(
        children,
        (child, key) => (
        <div key={key} style={{ border: '1px solid red' }}>
          {child}
        </div>
      ))
    }
  </div>
);

Segment.defaultProps = {
  color: 'blue'
};

ReactDOM.render(
  <Segment color={undefined} dashed>
    <div> div 1 </div>
    <div> div 2 </div>
    { () => <div> div 3 </div> }
  </Segment>,
  document.getElementById('root')
);
