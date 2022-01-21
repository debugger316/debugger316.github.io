import React from 'react';
import { Container, Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { KitchenPage } from './pages/KitchenPage';
import { background } from './assets';
import { ProjectPage } from './pages/ProjectPage';

const App = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' element={<Navigate replace to='/about' />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/portfolio/:project' element={<ProjectPage />} />
          <Route path='/kitchen' element={<KitchenPage />} />
          <Route path='*' element={<AboutPage />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
