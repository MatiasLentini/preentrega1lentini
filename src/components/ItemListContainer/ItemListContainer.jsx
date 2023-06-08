import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@mui/material";
import img from "../../assets/img/zapatilla1.png"
import "./ItemListContainer.css"

const ItemListContainer = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 250 }} className="Card">
      <CardActionArea>
        <CardMedia>
          <img src={img} alt="zapatilla" width="250" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemListContainer;
