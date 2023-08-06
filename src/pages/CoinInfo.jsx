import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApiRequest from '../hooks/useApiRequest';
import CurrencyChart from '../components/CurrencyChart';
import CoinDetails from '../components/CoinDetails';
import Wrapper from '../components/Wrapper';
import { Button } from '@mui/material';

const initialState = {
  currency: 'USD',
  days: '1',
  interval: 'daily',
  precision: '6',
};

const CoinInfo = () => {
  const {
    userInput,
    submitListRequest,
    listResponseData,
    loading,
    loadingSingle,
    setUserInput,
    submitUniqueRequest,
    uniqueResponse,
    apiError,
  } = useApiRequest({
    initialState,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    submitUniqueRequest(`/coins/${id}?localization=true&tickers=true&market_data=true`);
  }, []);

  return (
    <Wrapper isPageWrapper={true} apiError={apiError}>
      <CurrencyChart
        id={id}
        image={uniqueResponse?.image?.large}
        coinName={uniqueResponse?.name}
        userInput={userInput}
        submitListRequest={submitListRequest}
        listResponseData={listResponseData}
        loading={loading}
        setUserInput={setUserInput}
      />
      <Button variant='contained' onClick={() => navigate('/')} sx={{ mt: 3, mb: 3 }}>
        Buscar otra cripto moneda
      </Button>
      <CoinDetails
        loadingSingle={loadingSingle}
        uniqueResponse={uniqueResponse}
        userInput={userInput}
      />
    </Wrapper>
  );
};

export default CoinInfo;
