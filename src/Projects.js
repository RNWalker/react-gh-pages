import React, { useState } from "react";
import './Projects.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  
  return (

    <div className="projects-container">

<div id="project-title">
                <h1>PROJECTS</h1>
        </div>

      <div className="project-grid">

      <Card sx={{ maxWidth: 345, backgroundColor: '#303030' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/react-gh-pages/virtualPetBackend.png" className="project-icon" alt="Virtual Pet Backend"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              Virtual Pet
            </Typography>
            <Typography variant="body2" color="#D0D0D0">
              This project is the backend for a game. Built with Java, Spring, and PostgreSQL.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component ="a" href="https://github.com/RNWalker/BackEndProjectGroup4" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF8C99', fontWeight: 'bold' }}>See my GitHub repo</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: '#303030' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/react-gh-pages/butterfly.png" className="project-icon" alt="Virtual Pet Backend"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              E-Commerce Media Shop
            </Typography>
            <Typography variant="body2" color="#D0D0D0">
              This project is the frontend for a media shop. Built with Javascript and React.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" component ="a" href="https://github.com/RNWalker/bnta_front_end_project" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF8C99', fontWeight: 'bold' }}>See my GitHub repo</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: '#303030' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/react-gh-pages/warehouse.png" className="project-icon" alt="Virtual Pet Backend"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              Packing System
            </Typography>
            <Typography variant="body2" color="#D0D0D0">
              This is a fullstack project. Built with Java, Spring, PostgreSQL, Javascript and React.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" component ="a" href="https://github.com/RNWalker/Capstone_Frontend" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF8C99', fontWeight: 'bold' }}>See my GitHub repo</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: '#303030' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/react-gh-pages/mindmentor.png" className="project-icon" alt="Virtual Pet Backend"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              Mind Mentor Hackathon Entry
            </Typography>
            <Typography variant="body2" color="#D0D0D0">
               The prize-winning app, Mind Mentor. Built with Java, Spring and React Native.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" component ="a" href="https://github.com/RNWalker/Mind_Mentor_Frontend" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF8C99', fontWeight: 'bold' }}>See my GitHub repo</Button>
          </CardActions>
        </Card>

</div>
</div>
  );
}
