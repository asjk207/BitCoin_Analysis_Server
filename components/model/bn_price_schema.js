const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//binance 가격 데이터 DB저장용 스키마.
var bn_price_Schema = new Schema(
  {
    time: Number,
    open: String,
    high: String,
    low: String,
    close: String,
    volume: String,
    closeTime: Number,
    assetVolume: String,
    trades: Number,
    buyBaseVolume: String,
    buyAssetVolume: String,
    ignored: String,
    date: { type: Date, default: Date.now }
  },
  { collection:'bn_prices' }
);

/*
// Instance methods
UserSchema.methods.add = function(name, callback){
  this.time: time,
  open: String,
  high: String,
  low: String,
  close: String,
  volume: String,
  closeTime: Number,
  assetVolume: String,
  trades: Number,
  buyBaseVolume: String,
  buyAssetVolume: String,
  ignored: String,
  date: { type: Date, default: Date.now }
  return this.save(callback);
}
*/
module.exports = mongoose.model("bn_prices", bn_price_Schema);