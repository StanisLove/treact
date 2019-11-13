import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ onClickOutside }) => (
  <div>
    {
      ReactDOM.createPortal(
        <div class="modal-overlay" onClick={onClickOutside}>
          <div class="modal">Modal window</div>
        </div>,
        document.body
      )
    }
  </div>
);

class AppModale extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>open Modal</button>
        {isOpen && <Modal onClickOutside={(e) => e.target.className == 'modal-overlay' && this.setState({ isOpen: false })} />}
      </div>
    );
  }
}

export default AppModale;
