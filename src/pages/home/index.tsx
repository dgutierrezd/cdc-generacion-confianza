import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import Footer from "../components/footer/footer";
import useIsXs from "../../utils/useIsXs";

const Home = () => {
  const isXs = useIsXs();

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
      <Navbar />
      <Grid
        container
        // width='100%'
        pt={{ xs: 5, sm: 21 }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        paddingBottom={{ xs: 5, sm: 14.75 }}
      >
        <Grid item xs={10} sm={10} textAlign={isXs ? "center" : "left"}>
          <Stack>
            <Typography
              color='secondary'
              fontSize={{ xs: 40, md: 82.1 }}
              lineHeight={{ xs: 1.4, md: "82.73px" }}
              fontWeight={800}
            >
              Fomentando la cultura de la legalidad.
            </Typography>
            <Typography
              color='primary'
              fontSize={{ xs: 40, md: 82.1 }}
              lineHeight={{ xs: 1.4, md: "82.73px" }}
              fontWeight={800}
            >
              Consolidando procesos de fidelización.
            </Typography>
            <Typography
              color='secondary'
              fontSize={{ xs: 40, md: 82.1 }}
              lineHeight={{ xs: 1.4, md: "82.73px" }}
              fontWeight={800}
            >
              Generando confianza en el territorio.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5} sm={10} justifyContent={isXs ? "center" : "left"}>
          <Stack
            direction='row'
            display='flex'
            alignItems='center'
            spacing={1}
            pt={2.5}
          >
            <Link
              underline='always'
              color='secondary'
              fontSize={21.19}
              fontFamily='Open Sans'
              lineHeight={"23.5px"}
              fontWeight={800}
              href='/generacion-confianza'
            >
              {"ACERCA DE"}
            </Link>
            <ArrowForwardRoundedIcon
              sx={{ width: 25, height: 25 }}
              color='secondary'
            />
          </Stack>
        </Grid>
        <Grid
          item
          container
          xs={10}
          pt={5}
          display='flex'
          justifyContent='space-between'
        >
          <Grid item xs={12} sm={6} display='flex' alignItems='end'>
            <Image
              alt='GC'
              src={"/imgs/gc.png"}
              width={770}
              height={450}
            ></Image>
          </Grid>
          <Grid item xs={12} sm={5.5} pt={{xs: 5, sm: 0}}>
            <Stack spacing={{ xs: 2, sm: 6 }}>
              <Typography
                color='primary'
                fontSize={{ xs: 30, sm: 98.77 }}
                lineHeight={{ xs: 1.5, sm: "93.62px" }}
                fontWeight={800}
                textAlign={isXs ? "center" : "left"}
              >
                Bienvenidos
              </Typography>
              <Typography
                color='secondary'
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily='Open Sans'
                textAlign='justify'
              >
                Bienvenidos a este espacio interactivo done podrás conocer el{" "}
                <b>
                  &quot;Proyecto Social para la Generación de Confianza y la
                  Promoción de la Cultura de la Legalidad&quot;
                </b>
                , emprendido por parte de CHEC grupo EPM, en el marco de las
                acciones del proceso de Control Pérdidas de Energía, el cal
                tiene vigencia desde el año 2012, fue creado con el objetivo de:
                Apalancar la recuperación y/o mitigación de los niveles de
                pérdidas de energía no técnicas, a partir de process de
                involucramiento social y comunitario, que promuevan el fomento
                de la cultura de la legalidad y la consolidación de procesos de
                fidelización y acercamiento de la empresa con el grupo de
                interés, Comunidad y Clientes, desde la perspectiva de generar
                confianza en el territorio donde se ejecute la propuesta.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={10}
          pt={{ xs: 5, sm: 14.5 }}
          display='flex'
          justifyContent={isXs ? "center" : "space-between"}
        >
          <Grid item xs={12} sm={6.5}>
            <Stack>
              <Typography
                color='secondary'
                fontSize={{ xs: 20, sm: 33 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                textAlign='justify'
                fontWeight={800}
              >
                CHEC grupo EPM le apuesta a la Generación de Confianza
              </Typography>
              <Typography
                color='secondary'
                fontSize={{ xs: 16, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily='Open Sans'
                textAlign='justify'
              >
                {`El Proyecto Social para la "Generación de Confianza y promoción
                de la cultura de la legalidad", conocido actualmente a nivel
                comunitario y empresarial como '"Generación de Confianza", se
                orienta a generar un cambio de postura en todos los actors
                implicados (empresa-comunidad y demás instituciones vinculadas
                al proyecto) frente a su papel activo y transformador en la
                viabilización de acciones sociales y técnicas, cuyo fundamento
                se soporta en la promoción de la Cultura de la Legalidad.`}
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4.5}
            display='flex'
            alignItems='end'
            justifyContent={isXs ? "center" : "left"}
            pt={{ xs: 5, sm: 0 }}
          >
            <Stack
              direction='row'
              display='flex'
              alignItems='center'
              // pt={2.5}
              pb={{ xs: 0, sm: 5 }}
            >
              <Link
                color='secondary'
                fontSize={{ xs: 36, sm: 70.73 }}
                fontFamily='VAGROUNDEDSTD'
                lineHeight={{ xs: 1.5, sm: "67.05px" }}
                fontWeight={800}
                pr={4}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                href='/generacion-confianza'
              >
                {"Comenzar"}
              </Link>
              <Image
                alt='GC'
                src={"/icons/Arrow_img-bg.png"}
                width={57}
                height={51}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
