# Log Tool

Exceptionally minimal browser console log tool.

## Features

- tiny footprint
- preserve line numbers in console
- enable/disable loggers and keep them in the code
- No dependencies

# Example

To run the example, run a static server in this root folder, and load [the eample page](example/index.html) in a browser.

## Using

Simply import the module and run with it.

```
import { logTool } from 'log-tool';

// Create a logger:
const loggerA = logTool(true, {
    namespace: 'Logging Module A:'
})

loggerA('log any value as necessary'); // Logging Module A: log any value as necessary

// Disabled:
const loggerB = logTool(false, {
    namespace: 'Logging Module B:'
})
loggerB('This has no output'); // Disabled, no output.

// return to first logger
loggerA('Logging more things.'); // Logging Module A: Logging more things.

// Simple defaults
const loggerC = logTool();
loggerC('Logging!') // Logging!
```

## Todo

- [] Change so you do no have to pass a method in to use a different method
- [] Use session storage for global overrides
- [] Actual unit tests
- [] Push to npm (maybe)

## Other Logging Tools

There are much fancier tools. Really.

- [Log Level](https://github.com/pimterry/loglevel "GitHub - pimterry/loglevel: Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods")
- [Min Log](https://github.com/chunpu/min-log "GitHub - chunpu/min-log: Better Logger with Custom Level and Outputer Taking over the original console")

## License

See LICENSE file.







