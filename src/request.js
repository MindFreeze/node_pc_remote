import * as actions from './actions';

const ACTION_END = '(';
const PARAMS_END = ')';

export default (req, done) => {
    // parse request and return answer
    const actionEnd = req.indexOf(ACTION_END);
    let action = actionEnd === -1 ? req : req.substr(0, actionEnd);
    let params = {};
    if (actionEnd !== -1) {
        action = req.substr(0, actionEnd);
        let reqBody = req.substr(actionEnd + ACTION_END.length);
        if (req.substr(PARAMS_END.length) === PARAMS_END) {
            reqBody = reqBody.substr(0, reqBody.length - PARAMS_END.length);
        }
        try {
            params = JSON.parse(reqBody);
        } catch (e) {
            done(e);
            return;
        }
    }

    if (actions[action]) {
        actions[action](params, done);
    } else {
        done('Unknown action');
    }
};
