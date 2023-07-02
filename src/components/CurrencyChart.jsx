import { useState, useEffect } from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Wrapper from './Wrapper';
import CurrencyChartControls from './CurrencyChartControls';
import Loader from './Loader';

const CurrencyChart = ({
  id,
  image,
  coinName,
  userInput,
  submitListRequest,
  listResponseData,
  loading,
  setUserInput,
}) => {
  const [chartData, setChartData] = useState([]);
  const [currencyChange, setCurrencyChange] = useState(false);

  useEffect(() => {
    submitListRequest(
      `/coins/${id}/market_chart?vs_currency=${userInput.currency}&days=${userInput.days}&interval=${userInput.interval}&precision=${userInput.precision}`
    );
  }, [userInput]);

  const mapChartData = () => {
    const data = listResponseData.map((item) => {
      const [time, value] = item;
      let dt;
      if (userInput.days === '1') {
        dt = new Date(time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
      } else {
        dt = new Date(time).toLocaleDateString('en-us');
      }
      return {
        Date: dt,
        [userInput.currency]: value,
      };
    });
    setChartData(data);
  };

  useEffect(() => {
    mapChartData();
  }, [listResponseData, userInput.currency]);

  useEffect(() => {
    setCurrencyChange(true);
    setTimeout(() => {
      setCurrencyChange(false);
    }, '300');
  }, [userInput.currency]);

  return (
    <Wrapper>
      <CurrencyChartControls
        userInput={userInput}
        setUserInput={setUserInput}
        image={image}
        coinName={coinName}
      />

      {(loading && chartData.length === 0) || currencyChange ? (
        <Loader height={250} isBox={true} />
      ) : (
        <ResponsiveContainer width='95%' height={250}>
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 35,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Date' interval={'preserveEnd'} dy={5} />
            <YAxis
              domain={[
                Math.min(...chartData.map((item) => item[userInput.currency])),
                Math.max(...chartData.map((item) => item[userInput.currency])),
              ]}
            />
            <Tooltip contentStyle={{ backgroundColor: '#111827' }} />
            <Area
              type='monotone'
              dataKey={userInput.currency}
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Wrapper>
  );
};

export default CurrencyChart;
