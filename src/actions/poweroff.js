import powerOff from 'power-off';

export default (req, done) => {
    powerOff((err, stderr, stdout) => {
        console.log(err, stderr, stdout);
        done(err);
    });
};
