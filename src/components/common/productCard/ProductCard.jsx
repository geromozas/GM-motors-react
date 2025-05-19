import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento }) => {
  return (
    <div className="card">
      <Card sx={{ width: 400, height: 400 }}>
        <CardActionArea>
          <CardMedia
            sx={{ marginTop: 5 }}
            style={{ width: 250, height: 230, margin: "auto" }}
            className="cardImg"
            component="img"
            height="200"
            image={elemento.img}
            alt={elemento.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontSize: "20px", height: 50 }}
            >
              {elemento.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {Number(elemento.price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
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
