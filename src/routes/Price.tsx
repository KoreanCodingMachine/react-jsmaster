import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import { Helmet } from 'react-helmet-async';
import toCandlestickData from '../utils/to-candlestick-data';

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

const PERCENT_CHANGE_KEYS = [
  'percent_change_1h',
  'percent_change_1y',
  'percent_change_6h',
  'percent_change_7d',
  'percent_change_12h',
  'percent_change_15m',
  'percent_change_24h',
  'percent_change_30d',
  'percent_change_30m',
];

const Price = () => {
  const { coinId } = useOutletContext<ICoinData>();
  const { priceData }: { priceData: IPriceData } = useOutletContext();

  const result = toCandlestickData(priceData.quotes.USD, {
    keys: PERCENT_CHANGE_KEYS,
  });

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
            data: result,
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
