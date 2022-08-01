import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import useIsXs from "../../../utils/useIsXs";
// import Link from 'next/link';

interface INavbarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar = (props: INavbarProps) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isXs = useIsXs();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.background.default,
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Stack direction='row' alignItems='center' justifyContent='center' p={2}>
        <Stack
          direction='column'
          alignItems='flex-end'
          paddingRight={{ xs: 2, sm: 3.5 }}
        >
          <Link href='/' underline='none' textAlign='end'>
            <Typography
              color='secondary'
              fontSize={{ xs: 16, sm: 32.73 }}
              lineHeight={{ xs: 1, sm: "36.3px" }}
              fontFamily='VAGROUNDEDSTD'
              fontWeight={800}
            >
              Generación
            </Typography>
            <Typography
              color='primary'
              fontSize={{ xs: 16, sm: 32.73 }}
              lineHeight={{ xs: 1, sm: "36.3px" }}
              fontFamily='VAGROUNDEDSTD'
              fontWeight={800}
            >
              de Confianza
            </Typography>
          </Link>
        </Stack>
        <Box
          sx={{
            backgroundColor: "secondary.light",
            width: { xs: "1px", sm: 2 },
            height: { xs: "50px", sm: 64 },
          }}
        />
        <Stack paddingLeft={{ xs: 2, sm: 3.5 }}>
          <Link href='https://www.chec.com.co/' target='_blank'>
            <Image
              alt='logo'
              src={"/imgs/navbar-logo.png"}
              width={isXs ? 69 : 96}
              height={isXs ? 51.75 : 64}
            />
          </Link>
        </Stack>
      </Stack>
      <Divider />
      <Stack display='flex' justifyContent='space-between' height='85%'>
        <Stack spacing={2} py={2} alignItems='center'>
          <Link
            href={"/generacion-confianza"}
            underline='hover'
            fontWeight={800}
            color='secondary'
            fontSize={"1rem"}
            fontFamily='Open Sans'
            lineHeight={"23.5px"}
            alignItems='center'
          >
            {"Generación de confianza"}
          </Link>
          <Link
            href={"/metodologia"}
            underline='hover'
            color='secondary'
            fontSize={"1rem"}
            fontWeight={800}
            lineHeight={"23.5px"}
            fontFamily='Open Sans'
            alignItems='center'
          >
            {"Metodología"}
          </Link>
          <Link
            href={"/evolucion-resultados"}
            underline='hover'
            color='secondary'
            fontSize={"1rem"}
            fontWeight={800}
            lineHeight={"23.5px"}
            fontFamily='Open Sans'
            alignItems='center'
          >
            {"Evolución y Resultados"}
          </Link>

          <Link
            href={"/medios"}
            underline='hover'
            color='secondary'
            fontSize={"1rem"}
            fontWeight={800}
            lineHeight={"23.5px"}
            fontFamily='Open Sans'
            alignItems='center'
          >
            {"Medios"}
          </Link>
        </Stack>
        <Link href='https://www.chec.com.co/' target='_blank'>
          <Image
            alt='Chec logo'
            src={"/imgs/chec-logo.png"}
            width={88}
            height={83}
          />
        </Link>
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, sm: 12.5 },
          backgroundColor: (theme) => theme.palette.background.default,
          py: 2.5,
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Stack direction='row' alignItems='center'>
          <Stack
            direction='column'
            alignItems='flex-end'
            paddingRight={{ xs: 2, sm: 3.5 }}
          >
            <Link href='/' underline='none' textAlign='end'>
              <Typography
                color='secondary'
                fontSize={{ xs: 16, sm: 32.73 }}
                lineHeight={{ xs: 1, sm: "36.3px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                Generación
              </Typography>
              <Typography
                color='primary'
                fontSize={{ xs: 16, sm: 32.73 }}
                lineHeight={{ xs: 1, sm: "36.3px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                de Confianza
              </Typography>
            </Link>
          </Stack>
          <Box
            sx={{
              backgroundColor: "secondary.light",
              width: { xs: "1px", sm: 2 },
              height: { xs: "50px", sm: 64 },
            }}
          />
          <Stack paddingLeft={{ xs: 2, sm: 3.5 }}>
            <Link href='https://www.chec.com.co/' target='_blank'>
              <Image
                alt='logo'
                // layout=""
                src={"/imgs/navbar-logo.png"}
                width={isXs ? 69 : 96}
                height={isXs ? 51.75 : 64}
              />
            </Link>
          </Stack>
        </Stack>
        {!isXs && (
          <Stack
            direction='row'
            spacing={10}
            alignItems='center'
            // sx={{ display: { xl: "inherit" } }}
          >
            <Link
              href={"/generacion-confianza"}
              underline='hover'
              fontWeight={800}
              color='secondary'
              fontSize={"1rem"}
              fontFamily='Open Sans'
              lineHeight={"23.5px"}
              alignItems='center'
            >
              {"Generación de confianza"}
            </Link>
            <Link
              href={"/metodologia"}
              underline='hover'
              color='secondary'
              fontSize={"1rem"}
              fontWeight={800}
              lineHeight={"23.5px"}
              fontFamily='Open Sans'
              alignItems='center'
            >
              {"Metodología"}
            </Link>
            <Link
              href={"/evolucion-resultados"}
              underline='hover'
              color='secondary'
              fontSize={"1rem"}
              fontWeight={800}
              lineHeight={"23.5px"}
              fontFamily='Open Sans'
              alignItems='center'
            >
              {"Evolución y Resultados"}
            </Link>

            <Link
              href={"/medios"}
              underline='hover'
              color='secondary'
              fontSize={"1rem"}
              fontWeight={800}
              lineHeight={"23.5px"}
              fontFamily='Open Sans'
              alignItems='center'
            >
              {"Medios"}
            </Link>
          </Stack>
        )}
        {isXs && (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            // sx={{ mr: 2 }}
          >
            <Image
              alt='Chec logo'
              src={"/icons/menu.png"}
              width={29}
              height={22}
            />
          </IconButton>
        )}
        {/* <Button color="secondary">  */}
        {!isXs && (
          <Typography
            fontSize={21.19}
            lineHeight={"23.5px"}
            fontFamily='Open Sans'
          ></Typography>
        )}

        {/* </Button> */}
      </Box>
      <Box>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
