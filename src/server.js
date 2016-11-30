import net from 'net';
import robotjs from 'robotjs'; // @TODO later

import processReq from './request';

const REQ_END = '@@@'; // @TODO define protocol

// @NOTE example request:
// echo -e "action@@@" | nc localhost 5000

export default (port, done) => {
    net.createServer((socket) => {
        let request = '';
        console.info('new connection');

        // Handle incoming messages from clients.
        socket.on('data', (data) => {
            console.info(`recieved: ${data}`);
            request += data;
            const end = request.indexOf(REQ_END);
            if (end !== -1) {
                processReq(request.substr(0, end), (err, answer) => {
                    socket.write(`${err || answer || 'OK'}\n`);
                });
                request = request.substr(end + REQ_END.length);
            }
        });
    }).listen(port, done);
};
