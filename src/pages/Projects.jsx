import React from 'react';
import { Header } from '../components';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import Container from "@mui/material/Container";
import {projectData} from "../data/dummy";
import CardActions from "@mui/material/CardActions";
// import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Projects = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Projects" />
      <Container  >
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {projectData.map((result, index) => {
            return (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card
                  sx={{ maxWidth:400,backgroundColor:'#f0f0f0',alignItems:'stretch'}}
                  style={{ padding: "10px", marginBottom: "30px" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="5"
                      image={result.image}
                      sx={{  objectFit: "cover",width:"100%",height:"15vw" }}
                      style={{ borderRadius: "10px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {result.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions 
                  sx={{justifyItems:"end"}}>
                    <Button variant="contained" size="medium">
                      EDIT
                    </Button>
                    <Button variant="contained" size="medium">
                      LEARN MORE
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default Projects;
