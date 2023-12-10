"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Box } from '@mui/material';

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  const ref = useRef(null);

  useEffect(() => {
    let isMounted = true;
    if (typeof window !== 'undefined' && isMounted) {
      import('vanta/dist/vanta.birds.min').then((VantaBirds) => {
        const BIRDS = VantaBirds?.default || VantaBirds;
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
      }

      );
    }
    return () => {
      isMounted = false;
      if (vantaEffect) vantaEffect?.destroy();
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