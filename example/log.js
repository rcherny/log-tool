import { logTool } from '../src/index.js';

let log = logTool();

log('This is the external logger'); // 'This is the external logger'

setTimeout(() => {
   log('This is a delayed log'); // 'This is a delayed log'
   setTimeout(() => {
      log('Disable the next logger.'); // 'Disable the next logger.'
      log = logTool(false); 
      log('Are we logging?'); // disabled
   }, 2000)
}, 2000)

const debug = logTool(false);

debug('Testing debug call that should be disabled.'); // disabled

const bugger = logTool(true, {
   namespace: 'Debugger:',
   method: 'debug'
});

bugger('This one is running.'); // 'This one is running.'

