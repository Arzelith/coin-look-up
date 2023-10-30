import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Loader from './Loader';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
  Avatar,
  ListItemText,
  Paper,
  Fade,
  Box,
} from '@mui/material';

const CoinList = ({ listResponseData, title, loading }) => {
  return (
    <Wrapper>
      <Typography variant='h4' mb={3}>
        {title}
      </Typography>

      {loading ? (
        <Loader height={416} />
      ) : (
        <Fade in={!loading}>
          <Paper sx={{ height: 416, overflow: 'auto' }} variant='outlined'>
            <List sx={{ pl: 3, pr: 3, pt: 1, pb: 1 }}>
              {listResponseData.length === 0 ? (
                <Box height={398} display={'flex'} alignItems={'center'}>
                  <Typography variant='h6' mr={'auto'} ml={'auto'} fontWeight={'bold'}>
                    NO EXISTEN RESULTADOS
                  </Typography>
                </Box>
              ) : (
                <>
                  {listResponseData.map((coin, index) => (
                    <ListItem
                      key={coin.id || coin.item.id}
                      disableGutters
                      divider={index !== listResponseData.length - 1 || index === 0}
                      disablePadding
                    >
                      <ListItemButton component={Link} to={`/${coin.id || coin.item.id}`}>
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography variant='body2' fontWeight='bold'>
                              {coin.name || coin.item.name}
                            </Typography>
                          }
                        />
                        <ListItemAvatar>
                          <Avatar
                            alt='Logo'
                            src={coin.large || coin.item.large}
                            shape=''
                          />
                        </ListItemAvatar>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Paper>
        </Fade>
      )}
    </Wrapper>
  );
};

export default CoinList;

//TODO:
// *imagen para nada encontrado
