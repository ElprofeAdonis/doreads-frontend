import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';

export default function ActionAreaCard(props) {
  const StyledCardActionArea = styled(CardActionArea)({
    transition: 'all 0.2s ease-in-out',
    transform: 'perspective(1000px)',
    '&:hover': {
      transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg) rotateZ(0deg)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)'
    }
  });

  const card = {
    background: 'none',
    boxShadow: 'none',
    padding: '0',
    width: '220px',
    maxWidth: 220,
    maxHeight: 400,
    marginLeft: '55px',
    marginRigth: '50px'
  };
  return (
    <Card style={card}>
      <StyledCardActionArea>
        <div>
          <h1 className="TitleBook">{props.title}</h1>
        </div>
        <CardMedia
          component={'img'}
          height="330"
          width="220px"
          border="none"
          image={props.img}
          alt="BookIMG"
        />

        <CardContent sx={{ padding: 0 }}>
          <h2 className="DescBooks">ISBN:{props.ISBN}</h2>
          <h2 className="DescBooks2">Quantity:1</h2>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
}
