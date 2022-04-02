import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7b61ff',
  },
  '& label': {
    color: 'grey',
  },

  '& .MuiOutlinedInput-root': {
    color: 'white',

    '& fieldset': {
      borderColor: 'grey',
    },

    '&:hover fieldset': {
      borderColor: 'white',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#7b61ff',
      color: 'white',
    },
  },
});
