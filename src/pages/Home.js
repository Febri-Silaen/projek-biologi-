import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Typography, Button, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/quiz');
  };

  const handleMaterialClick = (link) => {
    navigate(link);
  };

  const materials = [
    {
      title: 'Ruang Lingkup Biologi',
      description: 'Pelajari dasar-dasar dan ruang lingkup ilmu biologi',
      imageUrl: '/images/logo192.png',
      link: '/ruang-lingkup',
    },
    {
      title: 'Keanekaragaman Hayati',
      description: 'Eksplorasi keanekaragaman makhluk hidup di Indonesia',
      imageUrl: '/images/Keanekaragaman Hayati.jpg',
      link: '/keanekaragaman',
    },
    {
      title: 'Keanekaragaman Hayati',
      description: 'Eksplorasi keanekaragaman makhluk hidup di Indonesia',
      imageUrl: '/images/Keanekaragaman Hayati.jpg',
      link: '/keanekaragaman',
    },
  ];

  return (
    <div className="home-container">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography className="hero-title">Selamat Datang di Sibisuk</Typography>
        <Typography className="hero-description">
          Platform Pembelajaran Biologi Kelas 10 yang Interaktif
        </Typography>
        <Button
          className="start-button"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleStartLearning}
        >
          Mulai Belajar
        </Button>
      </motion.div>

      <div className="materials-section">
        <Typography className="section-title" variant="h4" gutterBottom>
          Materi Pembelajaran
        </Typography>
        <Grid container spacing={4}>
          {materials.map((material, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                className="material-card-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="material-card" onClick={() => handleMaterialClick(material.link)}>
                  <CardActionArea>
                    <CardMedia
                      className="material-image"
                      image={material.imageUrl}
                      title={material.title}
                    />
                    <CardContent className="material-content">
                      <Typography className="material-title" variant="h5" component="h2">
                        {material.title}
                      </Typography>
                      <Typography className="material-description" variant="body2" color="textSecondary">
                        {material.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;

