import http from 'http';
import { EventEmitter } from 'events';
import { createWriteStream } from 'fs';

// Logger
class Logger extends EventEmitter {
  constructor() {
    super();
    this.stream = createWriteStream('log.txt', { flags: 'a' });//flags : a means, appending mode

    this.on('logReceived', (msg) => {
      this.stream.write(msg + '\n');
    });

    this.stream.on('error', (err) => {
      this.emit('error', err);
    });
  }

  log(message) {
    this.emit('logReceived', message);
  }
}

const logger = new Logger();
export default logger;