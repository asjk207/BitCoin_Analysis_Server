var request = require('request');
// const it = require('./io.js');

const Binance = require('node-binance-api');
//const { request } = require('../app');
const binance = new Binance().options({
  APIKEY: 'UwxatoM6tICCzKJ43qq1FPkmevJ1gQgDQ938gLuLDvBEFAAUGyaJAxp4AZGIuEdI',
  APISECRET: 'OIM3WqSTlnKIsdq5FryZmNsPJM9OG7Roxfe4IeP3SQHEFj4T3G8KEjsratXiMlKt'
});

//Mongo_DB 가격 스키마
var bn_price = require("./model/bn_price_schema");
//const bn_price_schema = require('./model/bn_price_schema');

//binance파싱 데이터 저장용 임시 변수
//var ticks_r;

// // Getting latest price of a symbol
// //바이낸스 실시간 코인 가격확인.
// binance.prices(function(error, ticker) {
// 	// console.log("prices()", ticker);
// 	console.log("Price of BTC: ", ticker.BTCUSDT);
// });
// // socket io 서버측 코드
// console.log("connect");
// // gio.emit('connection', function (socket) {
// //   console.log('connect');
// // });

// io.on('connection', function (socket) {
//   console.log('connect');
//   var instanceId = socket.id;
//   socket.on('msg', function (data) {
//       console.log(data);
//       socket.emit('recMsg', {comment: instanceId + ":" + data.comment+'\n'});
//   })
// });



// 바이낸스 candle stick형 가격데이터 가져오기
// Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M\
// binance.candlesticks("BTCUSDT", "1d", function(error, ticks) {
// 	//console.log("candlesticks()", ticks);
//   ticks_r = ticks.map((tick) => {
//     //trans to bn_price_schema
//     return new bn_price({
//       time:tick[0], 
//       open:tick[1], 
//       high:tick[2], 
//       low:tick[3], 
//       close:tick[4], 
//       volume:tick[5], 
//       closeTime:tick[6], 
//       assetVolume:tick[7], 
//       trades:tick[8], 
//       buyBaseVolume:tick[9], 
//       buyAssetVolume:tick[10], 
//       ignored:tick[11]
//     });
//   });

//   // saveDB
//   ticks_r.map((tick) => {
//     tick.save()
//       .then((tick) => {
//         console.log(tick);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   })
//   console.log(ticks_r);
// 	let last_tick = ticks[ticks.length - 1];
// 	let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
// 	console.log("BNBBTC last close: "+close);
// });


/*
// Getting list of current balances
binance.balance(function(error, balances) {
	console.log("balances()", balances);
	if ( typeof balances.ETH !== "undefined" ) {
		console.log("ETH balance: ", balances.ETH.available);
	}
});
*/


//바이낸스 API활용 예시
/*
var geturl = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=20201120&endTime=20201220';
//var testurl = 'https://api.binance.com/api/v3/time'

request.get({
    url: geturl
  }, function(error, reponse, body){
    const tmp = JSON.stringify(body);
    const res = JSON.parse(tmp);
    console.log(res);
});
*/

//console.info(res);

