import axios from "axios"

export async function getCoins(){
    return await axios.get('https://api.coinpaprika.com/v1/coins').then((res)=>res.data)
}