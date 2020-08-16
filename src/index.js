/**
 * @module     {module} logTool
**/

/**
 * LogTool function that runs the code conditionally based on the config initially set.
 * @param  {Boolean} [enable=true] - boolean setting to turn logger on/off. Default = true
 * @param  {Object}  [props] - config object with optional settings
 * @param  {String}  [props.namespace=''] - Namespace prefix to appear on console with log message.
 * @param  {String}  [props.method='log'] - Console metho to run by name. Defaults to a simple 'log'.
 * @return {Function} function that acts like console.log and friends.
 * 
 * @examples
 *   import { logTool } from './log-tool/src'
 *   const log = debug(true); // console.log output
 *   const logger = debug(true {namespace: 'logger: '}); // console.log prepended with 'logger: '
 *   const tracer = debug(true, {method: 'trace'}); // output console.trace stack
 *   const trace = debug(false, {method: 'trace'}); // console.trace suppressed
 *   const logB = debug(false); // suppressed! (different logger)
 *   const logC = debug({namespace: 'Enabled by default'}); // if no enabled is passed in, always enable
 */
const logTool = (enable = true, props = {}) => {
   if (typeof enable === 'object') {
      props = enable;
      enable = true;
   }
   const { namespace = '', method = 'log' } = props;
   if (enable) {
      // if this is empty, Firefox outputs an "<empty string>" argument
      if (namespace.length) {
         return console[method].bind(console, namespace);
      }
      return console[method].bind(console);
   } else {
      return () => {}
   }
}

export {
   logTool
}