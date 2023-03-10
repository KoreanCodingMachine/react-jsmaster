import { useState, useEffect } from 'react';
import {
  useLocation,
  useParams,
  Outlet,
  Link,
  useMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { infoData, priceData } from '../api/api';
import { Helmet } from 'react-helmet-async';

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  state: { name: string; loading: boolean };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
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

const Coin = () => {
  // const { coinId } = useParams() as unknown as RouteParams;

  const { coinId } = useParams() as unknown as RouteParams;

  const {
    state: { name },
  } = useLocation() as unknown as RouteState;

  // const [info, setInfo] = useState<InfoData>();

  // const [priceInfo, setPriceInfo] = useState<PriceData>();

  // const [loading, setLoading] = useState<boolean>(true);

  const priceMatch = useMatch(`/:${coinId}/price`);

  const chartMatch = useMatch(`/:${coinId}/chart`);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]); // coinId??? url??? ???????????? ????????? ??????????????? ?????? x

  // ????????? ????????????????????? ?????? ????????? ????????? ????????????
  const { isLoading: infoLoading, data: infoDatas } = useQuery<InfoData>(
    ['infoData', coinId],
    () =>
      coinId != null
        ? infoData(coinId)
        : Promise.reject(new Error('must need coinId'))
  );

  const { isLoading: priceLoading, data: priceDatas } = useQuery<PriceData>(
    ['priceData', coinId],
    () =>
      coinId != null
        ? priceData(coinId)
        : Promise.reject(new Error('must need coinId'))
  );

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>{name ? name : loading ? 'Loading...' : infoDatas?.name}</title>
      </Helmet>
      <Header>
        <Title>{name ? name : loading ? 'Loading...' : infoDatas?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoDatas?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoDatas?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${priceDatas?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoDatas?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceDatas?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceDatas?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`} state={{ name: name }}>
                Chart
              </Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`} state={{ name: name }}>
                Price
              </Link>
            </Tab>
          </Tabs>
          <Outlet context={{ coinId: coinId, priceData: priceDatas }} />
        </>
      )}
    </Container>
  );
};

export default Coin;
