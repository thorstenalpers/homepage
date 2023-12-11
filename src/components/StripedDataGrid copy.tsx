import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#003380',
  },
});

export default StyledRating;