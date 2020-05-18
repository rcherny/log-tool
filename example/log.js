import { logTool } from '../src/index.js';

let log = logTool();

log('This is the external logger');

setTimeout(() => {
   log('This is a delayed log');
   setTimeout(() => {
      log('Disable the next logger.');
      log = logTool(false);
      log('Disabled');
   }, 2000)
}, 2000)

const debug = logTool(false)

debug('Testing debug call that should be disabled.');

const bugger = logTool(true, {
   namespace: 'Debugger:',
   method: 'debug'
})

bugger('This one is running.');

