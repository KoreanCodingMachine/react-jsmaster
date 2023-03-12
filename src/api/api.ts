import axios from "axios"

export async function getCoins(){
    return await axios.get('https://api.coinpaprika.com/v1/coins').then((res)=>res.data)
}

export async function infoData(coinId:string){
    return await axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(res=>res.data)
}

export async function priceData(coinId:string){
    return await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(res=>res.data)
}

export async function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    const response = await fetch(
        `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId} `
    );
    return await response.json();
  }