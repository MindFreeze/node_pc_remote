import robot from 'robotjs'; // @TODO later


export default (params, done) => {
    const keyboard = robot.Keyboard();
    done(keyboard.click(params));
};
