const powerOff = require('power-off');

powerOff((err, stderr, stdout) => {
    if (!err && !stderr) {
        console.log(stdout);
    }
});
