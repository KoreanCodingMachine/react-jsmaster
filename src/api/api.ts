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