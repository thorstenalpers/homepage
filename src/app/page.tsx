"use client";
import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';
import { Box, Button, Grid, List, ListItem, Paper, Typography, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ref.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff,
          color1: 0x1c00ff
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div ref={ref} style={{ height: '100%', width: '100%', minHeight: '85vh' }}>

          <Box bottom={100} position={'absolute'}>
            <h1 style={{ fontSize: 72 }}>Thorsten Alpers</h1>
            <h3 style={{ fontSize: 26 }}>An excellent full-stack software developer and architect.</h3>
         </Box> 
      </div>
    </div>
  );
};

export default HomePage;