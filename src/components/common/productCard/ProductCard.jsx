import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  // Grid,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
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
        <Link to={`/productDetail/${elemento.id}`}>
          <Button
            className="btnDetalle"
            style={{
              fontSize: "10px",
              color: "grey",
              marginLeft: "70px",
            }}
          >
            VER DETALLE
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
