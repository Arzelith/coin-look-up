import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Avatar,
  Skeleton,
} from '@mui/material';

const tb = [
  { days: '1', interval: '', name: '1D' },
  { days: '7', interval: 'hourly', name: '7D' },
  { days: '30', interval: 'daily', name: '1M' },
  { days: '365', interval: 'monthly', name: '1A' },
  { days: 'max', interval: 'yearly', name: 'TODO' },
];

const CurrencyChartControls = ({ userInput, setUserInput, image, coinName }) => {
  const handlePeriodChange = (event, newAlignment) => {
    setUserInput(newAlignment);
  };

  const handleCurrencyChange = (e) => {
    const curr = e.target.value;
    let precision;
    if (curr === 'USD') {
      precision = '6';
    }
    if (curr === 'CLP') {
      precision = '4';
    }
    if (curr === 'ARS') {
      precision = '5';
    }
    if (curr === 'EUR') {
      precision = '6';
    }
    setUserInput({ ...userInput, currency: e.target.value, precision });
  };

  return (
    <Box
      display={'flex'}
      pb={2}
      sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 1, md: 0 } }}
    >
      <Box display={'flex'} alignItems={'center'} flexGrow={1}>
        {!image ? (
          <>
            <Skeleton variant='circular' width={50} height={50} sx={{ mr: 1 }} />
            <Skeleton variant='text' sx={{ fontSize: '32px', width: 120 }} />
          </>
        ) : (
          <Avatar alt='coin' src={image} sx={{ mr: 1, width: 50, height: 50 }} />
        )}
        <Typography flexGrow={1} variant='h4' fontWeight={'bold'}>
          {coinName}
        </Typography>
      </Box>

      <Box display={'flex'} alignItems={'center'} height={48.5}>
        <ToggleButtonGroup
          color='primary'
          value={userInput}
          exclusive
          onChange={handlePeriodChange}
          aria-label='Platform'
          sx={{ mr: 1 }}
        >
          {tb.map((item) => (
            <ToggleButton
              key={item.name}
              selected={item.days === userInput.days}
              value={{
                currency: userInput.currency,
                days: item.days,
                interval: item.interval,
                precision: userInput.precision,
              }}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <FormControl sx={{ minWidth: 77 }}>
          <Select
            value={userInput.currency}
            onChange={handleCurrencyChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ height: '48.5px' }}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value='CLP'>CLP</MenuItem>
            <MenuItem value='ARS'>ARS</MenuItem>
            <MenuItem value='EUR'>EUR</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CurrencyChartControls;
