import { Box, Button, Link, Stack, Typography } from '@mui/material';
// import Link from 'next/link';

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: 12.5,
        backgroundColor: (theme) => theme.palette.background.default,
        py: 2.5,
        position: 'sticky',
        top: 0,
        zIndex: 999
      }}
    >
      <Typography color='secondary' variant='h4'>
        Chec
      </Typography>

      <Stack direction='row' spacing={10} alignItems='center'>
        <Link
          // href={'#course'}
          underline='hover'
          color='secondary'
          fontSize={21.19}
          fontFamily='Open Sans'
          lineHeight={'23.5px'}
          alignItems='center'
  
        >
          {'Generación de confianza'}
        </Link>
        <Link
          // href={'#buy'}
          underline='hover'
          color='secondary'
          fontSize={21.19}
          lineHeight={'23.5px'}
          fontFamily='Open Sans'
          alignItems='center'
        >
          {'Metodología'}
        </Link>
        <Link
          // href={'#includes'}
          underline='hover'
          color='secondary'
          fontSize={21.19}
          lineHeight={'23.5px'}
          fontFamily='Open Sans'
          alignItems='center'
        >
          {'Evolución y Resultados'}
        </Link>

        <Link
          // href={'#modules'}
          underline='hover'
          color='secondary'
          fontSize={21.19}
          lineHeight={'23.5px'}
          fontFamily='Open Sans'
          alignItems='center'
        >
          {'Medios'}
        </Link>
      </Stack>

      <Button color='secondary'>
        <Typography fontSize={21.19} lineHeight={'23.5px'} fontFamily='Open Sans'>
          Menú
        </Typography>
      </Button>
    </Box>
  );
};
