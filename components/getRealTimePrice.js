const it = require('./io.js');

const Binance = require('node-binance-api');
//const { request } = require('../app');
const binance = new Binance().options({
  APIKEY: 'UwxatoM6tICCzKJ43qq1FPkmevJ1gQgDQ938gLuLDvBEFAAUGyaJAxp4AZGIuEdI',
  APISECRET: 'OIM3WqSTlnKIsdq5FryZmNsPJM9OG7Roxfe4IeP3SQHEFj4T3G8KEjsratXiMlKt'
});

const fetch = require('node-fetch');

const url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
const options = {method: 'GET', headers: {Accept: 'application/json'}};




// Getting latest price of a symbol

// socket io 바이낸스 실시간 가격정보 서버측 코드
function getrt_BN_Price(io){
    // console.log(io)
    io.on('connection', function (socket) {
        console.log('connect_BN_RT');
        //바이낸스 실시간 코인 가격확인
        socket.on('bn_price', (code) => {
            binance.prices(function(error, ticker) {
                // console.log("prices()", ticker);
                console.log(code);
                console.log("Price of BTC: ", ticker.BTCUSDT);
                io.emit('bn_price', ticker.BTCUSDT);
            });

        })
    });
}

function getrt_UB_Price(io2){
    io2.on('connection', function (socket) {
        console.log('connect_UB_RT');
        socket.on('ub_price', (code) => {
            // 업비트 실시간 가격정보 요청
            fetch(url, options)
            .then(res => res.json())
            .then((json) => {
                console.log(json[0].trade_price)
                io2.emit('ub_price', json[0].trade_price);
            })
            .catch(err => console.error('error:' + err));
            });
        })
    }



module.exports = {
    getrt_BN_Price: getrt_BN_Price,
    getrt_UB_Price: getrt_UB_Price,
}