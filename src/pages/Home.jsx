import { useEffect, useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';
import SearchBox from '../components/SearchBox';
import CoinList from '../components/CoinList';
import Wrapper from '../components/Wrapper';
import Hero from '../components/Hero';

const initialState = {
  coinSearch: '',
};

const Home = () => {
  const {
    userInput,
    handleChange,
    submitListRequest,
    listResponseData,
    loading,
    apiError,
  } = useApiRequest({
    initialState,
  });
  const [title, setTitle] = useState('Populares');

  useEffect(() => {
    if (userInput.coinSearch.trim().length >= 1) {
      submitListRequest(`search?query=${userInput.coinSearch}`);
      setTitle('Resultados de búsqueda');
    }
    if (!userInput.coinSearch) {
      submitListRequest('/search/trending');
      setTitle('Populares');
    }
  }, [userInput]);

  return (
    <Wrapper isPageWrapper={true} apiError={apiError}>
      <Hero/>
      <SearchBox handleChange={handleChange} />
      <CoinList listResponseData={listResponseData} title={title} loading={loading} />
    </Wrapper>
  );
};

export default Home;
