import * as actions from './actions';

export default (req, done) => {
    // @TODO parse request and return answer
    if (actions[req]) {
        actions[req](req, done);
    } else {
        done('Unknown action');
    }
};
