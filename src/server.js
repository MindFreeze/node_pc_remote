import net from 'net';

import processReq from './request';

// @NOTE example request:
// echo -e "action(JSON)" | nc localhost 5000

export default (port, done) => {
    net.createServer((socket) => {
        let request = '';
        console.info('new connection');

        // Handle incoming messages from clients.
        socket.on('data', (data) => {
            request += data;
        });
        socket.on('end', () => {
            console.info(`recieved: ${request}`);
            processReq(request, (err, answer) => {
                socket.write(`${err || answer || 'OK'}\n`);
            });
        });
    }).listen(port, done);
};
