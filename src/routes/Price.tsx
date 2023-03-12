import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import { Helmet } from 'react-helmet-async';

interface ICoinData {
  coinId: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Price = () => {
  const { coinId } = useOutletContext<ICoinData>();
  const { priceData }: { priceData: IPriceData } = useOutletContext();

  let setData = Object.values(priceData.quotes.USD).slice(5, 14);
  let setKeys: string[] = Object.keys(priceData.quotes.USD).slice(5, 14);
  let newData: number[][] = [];

  for (let i = 0; i < setData.length; i++) {
    const num = Number(setData[i]);
    newData.push([
      Number(num.toFixed(2)),
      Number((num + 1).toFixed(2)),
      Number((num + 2).toFixed(2)),
      Number((num + 3).toFixed(2)),
    ]);
  }

  const result = [];

  for (let i = 0; i < setData.length; i++) {
    result.push({ x: setKeys[i], y: newData[i] });
  }

  console.log(result);

  return (
    <>
      <Helmet>
        <title>Price</title>
      </Helmet>
      <ApexChart
        type='candlestick'
        series={[
          {
            name: 'Price',
            data:
              // [
              //   {
              //     x: setKeys[0],
              //     y: newData[0],
              //   },
              //   {
              //     x: setKeys[1],
              //     y: newData[1],
              //   },
              //   {
              //     x: setKeys[2],
              //     y: newData[2],
              //   },
              //   {
              //     x: setKeys[3],
              //     y: newData[3],
              //   },
              //   {
              //     x: setKeys[4],
              //     y: newData[4],
              //   },
              //   {
              //     x: setKeys[5],
              //     y: newData[5],
              //   },
              //   {
              //     x: setKeys[6],
              //     y: newData[6],
              //   },
              //   {
              //     x: setKeys[7],
              //     y: newData[7],
              //   },
              //   {
              //     x: setKeys[8],
              //     y: newData[8],
              //   },
              // ],
              result,
          },
        ]}
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            height: 1000,
            width: 1000,
            toolbar: {
              tools: {},
            },
            background: 'transparent',
          },
          grid: {
            show: false,
          },
          plotOptions: {
            candlestick: {
              wick: {
                useFillColor: true,
              },
            },
          },
          xaxis: {
            labels: {
              show: true,
            },
            type: 'category',
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: true,
          },
          tooltip: {
            x: {
              formatter: (v) => `$ ${v.toFixed(2)}`,
            },
            y: {
              formatter: (v) => `$ ${v.toFixed(2)}`,
            },
          },
        }}
      />
    </>
  );
};

export default Price;
