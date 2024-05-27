import { useState, useEffect } from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
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

  const mapChartData = async () => {
    const data = await listResponseData.map((item) => {
      const [time, value] = item;
      let dt;
      dt = new Date(time).toLocaleDateString('es-cl');
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
        <Loader height={400} isBox={true} />
      ) : (
        <ResponsiveContainer width={'100%'} height={400}>
          <AreaChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 50,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#ffffff' stopOpacity={1} />
                <stop offset='95%' stopColor='#04ffe6' stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey='Date'
              interval={'equidistantPreserveStart'}
              dy={5}
              tickLine={true}
              tickCount={1}
              angle={-45}
              textAnchor='end'
              fontSize={'0.8rem'}
              stroke='#bac3cc'
              fontWeight={'bold'}
            />
            <YAxis
              domain={[
                Math.min(...chartData.map((item) => item[userInput.currency])),
                'auto',
              ]}
              dx={-5}
              tickLine={true}
              fontSize={'0.8rem'}
              stroke='#bac3cc'
              fontWeight={'bold'}
            />

            <Tooltip contentStyle={{ backgroundColor: '#111827' }} />
            <Area
              dataKey={userInput.currency}
              stroke='#04ffe6'
              fill='url(#colorUv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Wrapper>
  );
};

export default CurrencyChart;
