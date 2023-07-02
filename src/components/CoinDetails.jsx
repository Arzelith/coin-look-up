import Wrapper from './Wrapper';
import Loader from './Loader';
import { Typography, List, ListItem, ListItemText, Paper, Fade } from '@mui/material';

const CoinDetails = ({ uniqueResponse, userInput, loadingSingle }) => {
  const getDetails = () => {
    const obj = uniqueResponse?.market_data;
    const currency = userInput.currency.toLowerCase();
    const symbol = uniqueResponse?.symbol?.toUpperCase();
    const details = [
      {
        name: 'Precio actual',
        info: `$${obj?.current_price[currency]} ${userInput.currency}`,
      },
      {
        name: 'Alto histórico',
        info: `$${obj?.ath[currency]} ${userInput.currency}`,
      },
      {
        name: 'Alto 24hrs',
        info: `$${obj?.high_24h[currency]} ${userInput.currency}`,
      },
      {
        name: 'Bajo 24hrs',
        info: `$${obj?.low_24h[currency]} ${userInput.currency}`,
      },
      {
        name: 'Cambio de precio (7D)',
        info: `${obj?.price_change_percentage_7d_in_currency[currency]} %`,
      },
      {
        name: 'Cambio de precio (1H)',
        info: `${obj?.price_change_percentage_1h_in_currency[currency]} %`,
      },
      {
        name: 'Suministro total',
        info: `${obj?.total_supply} ${symbol}`,
      },
      {
        name: 'Suministro en circulación',
        info: `${obj?.circulating_supply} ${symbol}`,
      },
    ];

    return details;
  };

  return (
    <Wrapper>
      <Typography variant='h4' mb={3} textAlign={'center'}>
        Estadísticas de mercado
      </Typography>
      {loadingSingle ? (
        <Loader height={394} />
      ) : (
        <Fade in={true}>
          <Paper variant='outlined'>
            <List sx={{ pl: 3, pr: 3, pt: 0, pb: 0 }}>
              {getDetails().map((item, index) => (
                <ListItem key={item.name} divider={index !== getDetails().length - 1}>
                  <ListItemText
                    sx={{
                      display: 'flex',
                      textAlign: { xs: 'center', sm: 'inherit' },
                      flexDirection: { xs: 'column', sm: 'inherit' },
                    }}
                    disableTypography
                    primary={
                      <Typography
                        variant='body2'
                        fontWeight='bold'
                        flexGrow={1}
                        pb={{ xs: 0.5, sm: 'inherit' }}
                      >
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      item.info.endsWith('%') && item.info.startsWith('-') ? (
                        <Typography color='red' variant='body2' fontWeight='bold'>
                          {item.info}
                        </Typography>
                      ) : item.info.endsWith('%') && !item.info.startsWith('-') ? (
                        <Typography color='green' variant='body2' fontWeight='bold'>
                          {`+${item.info}`}
                        </Typography>
                      ) : (
                        <Typography variant='body2' fontWeight='bold'>
                          {item.info}
                        </Typography>
                      )
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Fade>
      )}
    </Wrapper>
  );
};

export default CoinDetails;
