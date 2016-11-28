import net from 'net';
import robotjs from 'robotjs'; // @TODO later

import processReq from './request';

const REQ_END = '@@@'; // @TODO define protocol

export default (port) => {
    net.createServer((socket) => {
        let request = '';

        // Handle incoming messages from clients.
        socket.on('data', (data) => {
            request += data;
            if (request.substr(-REQ_END.length) === REQ_END) {
                const answer = processReq(request);
                socket.write(answer);
            }
        });
    }).listen(port);
};
