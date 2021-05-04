import React from 'react'
import events from '../../core/EventEmitter'
import { Close } from '../Icon'

class Modal extends React.Component {
  static propTypes = {}

  state = {
    modal: null
  }

  hideModal = () => {
    this.setState({ modal: null })
    this.detachShortcut()
    document.body.classList.remove('modal-open')
  }

  attacheShortcut = event => {
    if (event.keyCode === 27) {
      this.hideModal()
    }
  }

  detachShortcut = () => {
    window.removeEventListener('keydown', this.attacheShortcut)
  }

  componentDidMount() {
    events.on('hide-modal', this.hideModal)
    events.on('open-modal', modal => {
      this.setState({ modal })
      window.addEventListener('keydown', this.attacheShortcut)
      document.body.classList.add('modal-open')
    })
  }

  componentWillUnmount() {
    events.removeAllListeners('open-modal')
    events.removeAllListeners('hide-modal')
  }

  render() {
    const { modal } = this.state
    if (!modal) return null

    const styles = {
      opacity: 1,
      display: 'block',
    }

    return (
      <div className="modal modal-backdrop" tabIndex="-1" role="dialog" style={styles}>
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <div className="modal-header bg-lawrence">
              <h5 className="modal-title text-oz">TVL chart</h5>
              <Close role="button" onClick={this.hideModal} />
            </div>
            {modal}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
