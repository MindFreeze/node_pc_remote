const powerOff = require('power-off');
const robotjs = require('robotjs'); // @TODO later

powerOff((err, stderr, stdout) => {
  if (!err && !stderr) {
    console.log(stdout);
  }
});
