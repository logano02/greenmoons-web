import { useState } from 'react'
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from '../../utils/format-number';

import Label from '../../components/label';
import { ColorPreview } from '../../components/color-utils';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function WingetMovie({ movie }) {

  const [fev, setFev] = useState(false)

  const renderStatus = (
    <Iconify icon="mdi:favorite" sx={{
      mr: 0.5, width: 32, height: 32,
      zIndex: 9,
      top: 16,
      right: 16,
      position: 'absolute',
      color: fev === true ? 'white' : '#ee11a8',
      cursor:'pointer'

    }} onClick={() => {
      setFev(!fev)
    }} />
  );

  const renderImg = (
    <Box
      component="img"
      alt={movie?.title_th}
      src={movie?.poster_url}
      sx={{
        objectFit: 'cover',
        width: '100%',
        maxHeight: '280px'
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {movie?.priceSale && fCurrency(300)}
      </Typography>
      &nbsp;
      {fCurrency(300)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        {true && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {movie?.title_th}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={movie?.colors} /> */}
          {/* {renderPrice} */}
        </Stack>
      </Stack>
    </Card>
  );
}

WingetMovie.propTypes = {
  product: PropTypes.object,
};
