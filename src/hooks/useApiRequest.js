import { useState } from 'react';
import { axiosCoins } from '../api/axios';
import { handleApiError } from '../helpers/apiErrorHandler';

const useApiRequest = ({ initialState }) => {
  const [userInput, setUserInput] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(true);
  const [listResponseData, setListResponseData] = useState([]);
  const [uniqueResponse, setUniqueResponse] = useState({});
  const [apiError, setApiError] = useState({});

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitListRequest = async (url) => {
    setApiError(null);
    setLoading(true);
    try {
      const response = await axiosCoins.get(url);
      if (response.data.coins) {
        setListResponseData([...response.data.coins]);
      }
      if (response.data.prices) {
        setListResponseData([...response.data.prices]);
      }
      setLoading(false);
    } catch (error) {
      setApiError(handleApiError(error));
      setLoading(false);
    }
  };

  const submitUniqueRequest = async (url) => {
    setApiError(null);
    setLoadingSingle(true);
    try {
      const response = await axiosCoins.get(url);
      setUniqueResponse(response.data);
      setLoadingSingle(false);
    } catch (error) {
      setApiError(handleApiError(error));
      setLoadingSingle(false);
    }
  };

  return {
    userInput,
    handleChange,
    submitListRequest,
    submitUniqueRequest,
    loading,
    loadingSingle,
    listResponseData,
    uniqueResponse,
    setUserInput,
    apiError,
  };
};

export default useApiRequest;
