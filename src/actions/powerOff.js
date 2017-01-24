import powerOff from 'power-off';

export default (params, done) => {
    powerOff(err => done(err));
};
