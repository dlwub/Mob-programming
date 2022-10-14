function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);    
    let count = 0;
    for (let candle of candles){
        if(candle===max){
            count +=1;
        }
    }
    return count;

}
