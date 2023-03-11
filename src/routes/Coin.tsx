import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';

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

interface RouteParams {
  coinId: string;
}

interface RouteState {
  state: { name: string; loading: boolean };
}

const Coin = () => {
  // const { coinId } = useParams() as unknown as RouteParams;

  const { coinId } = useParams() as unknown as RouteParams;
  const { state } = useLocation() as unknown as RouteState;
  const { name, loading } = state;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  console.log(info, priceInfo);

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{name || 'loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
