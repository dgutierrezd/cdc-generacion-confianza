import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
// import Link from 'next/link';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 12.5,
        backgroundColor: (theme) => theme.palette.background.default,
        py: 2.5,
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Stack direction="column" alignItems="flex-end" paddingRight={3.5}>
          <Link href="/" underline="none" textAlign="end">
            <Typography
              color="secondary"
              fontSize={32.73}
              lineHeight={"36.3px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
            >
              Generación
            </Typography>
            <Typography
              color="primary"
              fontSize={32.73}
              lineHeight={"36.3px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
            >
              de Confianza
            </Typography>
          </Link>
        </Stack>
        <Image alt="logo" src={"/imgs/line-navbar.png"} width={2} height={64} />
        <Stack paddingLeft={3.5}>
          <Link href="https://www.chec.com.co/" target="_blank">
            <Image
              alt="logo"
              src={"/imgs/navbar-logo.png"}
              width={96}
              height={64}
            />
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={10} alignItems="center">
        <Link
          // href={'#course'}
          href={"/generacion-confianza"}
          underline="hover"
          fontWeight={800}
          color="secondary"
          fontSize={'1rem'}
          fontFamily="Open Sans"
          lineHeight={"23.5px"}
          alignItems="center"
        >
          {"Generación de confianza"}
        </Link>
        <Link
          href={"/metodologia"}
          underline="hover"
          color="secondary"
          fontSize={'1rem'}
          fontWeight={800}
          lineHeight={"23.5px"}
          fontFamily="Open Sans"
          alignItems="center"
        >
          {"Metodología"}
        </Link>
        <Link
          href={"/evolucion-resultados"}
          underline="hover"
          color="secondary"
          fontSize={'1rem'}
          fontWeight={800}
          lineHeight={"23.5px"}
          fontFamily="Open Sans"
          alignItems="center"
        >
          {"Evolución y Resultados"}
        </Link>

        <Link
          href={'/medios'}
          underline="hover"
          color="secondary"
          fontSize={'1rem'}
          fontWeight={800}
          lineHeight={"23.5px"}
          fontFamily="Open Sans"
          alignItems="center"
        >
          {"Medios"}
        </Link>
      </Stack>

      {/* <Button color="secondary"> */}
      <Typography
        fontSize={21.19}
        lineHeight={"23.5px"}
        fontFamily="Open Sans"
      ></Typography>
      {/* </Button> */}
    </Box>
  );
};

export default Navbar;
