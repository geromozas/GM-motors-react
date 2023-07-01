import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCardCart = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: "20px" }}
          >
            {elemento.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${elemento.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="contained">
          Agregar el carrito
        </Button>
      </CardActions>
    </Card>
  );
};
