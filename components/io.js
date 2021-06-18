// var io;

// function initIO(server, cors){
//     io = require('socket.io')(server, cors);
//     console.log("IO_INIT");
//     return io;
// }

// function sendIO(data){
//     // socket io 서버측 코드
//     io.on('connection',function(socket) {
//         console.log('socket connected');
//     });
// }


// module.exports = {
//     initIO: initIO
// }


// socket.io export용
module.exports = function(server, cors){
        var io = require('socket.io')(server, cors);
        console.log("IO_INIT");
        return io;
    }