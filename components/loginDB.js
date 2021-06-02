const mongoose = require('mongoose')
var express = require("express");

// 요기 밑에 추가해주세요!!
//var bn_price = require("./model/bn_price_schema"); // 스키마 불러오기

//mongoDB_Cloud 서버 연결
mongoose.connect('mongodb+srv://yoon:jh@!1993@cluster0.tuirg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))

//test_dummy_data
/*
const bn_price1 = new bn_price({
    time: 1620676800000,
    open: '0.01148700',
    high: '0.01151000',
    low: '0.01115000',
    close: '0.01119000',
    volume: '12666.08000000',
    closeTime: 1620677099999,
    assetVolume: '143.18038368',
    trades: 9455,
    buyBaseVolume: '4744.08000000',
    buyAssetVolume: '53.69071517',
    ignored: '0'
});

// save
bn_price1.save()
    .then((bn_price1) => {
        console.log(bn_price1);
    })
    .catch((err) => {
        console.error(err);
    });
    */

// find
