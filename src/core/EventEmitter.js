import events from 'events'

class EventEmitter extends events {
  showModal = (md, title) => this.emit('open-modal', md, title)
  hideModal = () => this.emit('hide-modal')
  navigate = page => this.emit('navigate', page)
}

export default new EventEmitter()
