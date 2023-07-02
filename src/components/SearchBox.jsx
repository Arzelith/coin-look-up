import { useMemo } from 'react';
import debounce from '../helpers/debounce';
import { TextField } from '@mui/material';

const SearchBox = ({ handleChange }) => {
  const debounceChange = useMemo(() => debounce(handleChange, 500));

  return (
    <TextField
      fullWidth
      id='coinSearch'
      name='coinSearch'
      label='Buscar...'
      type='text'
      variant='outlined'
      margin='normal'
      autoComplete='off'
      onChange={debounceChange}
      sx={{ maxWidth: '600px', mt: 0, mb: 3 }}
    />
  );
};

export default SearchBox;
