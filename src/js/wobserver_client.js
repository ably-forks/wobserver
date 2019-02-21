import {WobserverApiFallback} from './wobserver_api_fallback';

class WobserverClient {
  constructor(host) {
    this.host = host;
    this.socket = null;
    this.node = 'local';
    this.promises = {}
    this.state = 0;
    this.url = (location.protocol == 'https:' ? 'wss' : 'ws') + '://' + this.host + '/ws'
  }

  connect(node_change, fallback_callback, connected_callback) {
    this.node_change = node_change;
    fallback_callback(new WobserverApiFallback(this.host, this.node));
    connected_callback();
  }
}

export{ WobserverClient }
