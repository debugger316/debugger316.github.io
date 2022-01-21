import React, { useState } from 'react';
import { IconButton, ButtonGroup, Paper, useMediaQuery } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { websiteTheme } from '../../styles/websiteTheme';
import { markers, stories } from './constants';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const hoveredColor = websiteTheme.palette.secondary.main;
const unhoveredColor = websiteTheme.palette.primary.main;
const center = [0, 0];
const mapWidth = 800;
const mapHeight = 400;

export const Map = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [position, setPosition] = useState({ coordinates: center, zoom: 1 });
  const [hovered, setHovered] = useState('');
  const [selected, setSelected] = useState('');
  const maxZoom = isMobile ? 5 : 3;

  const handleMarkerHover = (place) => {
    setHovered(place);
  };

  const handleMarkerLeave = () => {
    setHovered(null);
  };

  const handleMarkerClick = async (place, coords) => {
    setPosition({ coordinates: coords, zoom: maxZoom });
    setSelected(place);

    const story = stories[place];
    const reactSwal = withReactContent(Swal);
    const result = await reactSwal.fire({
      title: story.title,
      text: story.text,
      confirmButtonText: 'Close',
      confirmButtonColor: websiteTheme.palette.primary.main,
      width: isMobile ? '95%' : '60%',
    });

    if (result.isConfirmed || result.isDismissed) {
      setPosition({ coordinates: [0, 0], zoom: 1 });
      setSelected('');
    }
  };

  const handleZoomIn = () => {
    if (position.zoom >= maxZoom) {
      return;
    }

    setPosition((prev) => ({ ...prev, zoom: prev.zoom + 1 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) {
      return;
    }

    setPosition((prev) => ({ ...prev, zoom: prev.zoom - 1 }));
  };

  const handleResetZoom = () => {
    setPosition({ coordinates: center, zoom: 1 });
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  return (
    <Paper
      elevation={5}
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <ButtonGroup variant='text' size='large'>
        <IconButton color='whites' onClick={handleZoomIn}>
          <ZoomInIcon />
        </IconButton>
        <IconButton color='whites' onClick={handleZoomOut}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton color='whites' onClick={handleResetZoom}>
          <CenterFocusWeakIcon />
        </IconButton>
      </ButtonGroup>
      <ComposableMap
        height={mapHeight}
        width={mapWidth}
        projectionConfig={{ scale: 150 }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          maxZoom={maxZoom}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((cont) => cont.properties.REGION_UN !== 'Antarctica')
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill='#DDD'
                    stroke='#FFF'
                  />
                ))
            }
          </Geographies>
          {markers.map(({ place, coords }) => (
            <Marker key={place} coordinates={coords}>
              <circle
                onMouseEnter={() => handleMarkerHover(place)}
                onMouseLeave={handleMarkerLeave}
                onClick={() => handleMarkerClick(place, coords)}
                r={4}
                fill={
                  (hovered || selected) === place
                    ? hoveredColor
                    : unhoveredColor
                }
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </Paper>
  );
};
