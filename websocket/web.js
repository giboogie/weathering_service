const WebSocket = require('ws');

const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbkrw@ticker');
//btcbkrw
//btcusdt@depth5@1000ms
// "u" : 400900217 ,      // 주문서 updateId 
// "s" : "BNBUSDT" ,      // 기호 
// "b" : "25.35190000" ,  // 최고 입찰 가격  bestbidprice
// "B" : "31.21000000" ,  // 최고 입찰 수량 
// " a " : "25.36520000 " ,  // 최고 가격 
// "A " : "40.66000000 "   // 최고 수량 

ws.on('message', function incoming(data) {
    const trade = JSON.parse(data); // parsing single-trade record
    console.log(trade);
});
