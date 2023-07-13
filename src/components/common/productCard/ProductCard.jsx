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
    <div className="card">
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ marginTop: 5 }}
            className="cardImg"
            component="img"
            height="200"
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
          <Link to={`/productDetail/${elemento.id}`}>
            <Button size="small" color="primary" variant="contained">
              VER DETALLE
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
