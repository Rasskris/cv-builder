import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const Input = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7b61ff',
  },
  '& label': {
    color: 'grey',
    fontSize: '1rem',
    lineHeight: '1.4375em',
  },

  '& .MuiOutlinedInput-root': {
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    lineHeight: '1.4375em',

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
