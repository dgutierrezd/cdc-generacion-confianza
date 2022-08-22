import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Acercamiento from "../components/metodologia/acercamiento";
import Evaluacion from "../components/metodologia/evaluacion";
import Intervencion from "../components/metodologia/intervencion";
import Involucramiento from "../components/metodologia/involucramiento";
import { useEffect, useState } from "react";
import useIsXs from "../../utils/useIsXs";
import { app, database } from "../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "metodologia");

const Metodologia = () => {
  const isXs = useIsXs();
  const [slide, setSlide] = useState<number>(0);
  const [content, setContent] = useState<any>([]);

  const onNextSlide = () => {
    setSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const onPrevSlide = () => {
    setSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  useEffect(() => {
    getMetodologia();
  }, []);

  const getMetodologia = () => {
    getDocs(dbInstance).then((data) => {
      setContent(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Navbar admin={false} />
      <Grid container justifyContent="center">
        <Grid
          item
          container
          justifyContent="space-between"
          //   alignItems='center'
          py={10}
          xs={10.5}
        >
          <Grid item xs={12} sm={6.5}>
            <Typography
              color="secondary.main"
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "33.96px" }}
              fontFamily="Open Sans"
              textAlign="justify"
            >
              {content[0]?.texto1}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4.7} pt={{ xs: 2, sm: 0 }}>
            <Typography
              color="primary.main"
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "32.17px" }}
              fontWeight={800}
              textAlign="justify"
            >
              {content[0]?.texto2}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent="center">
            <Grid item xs={10} sm={8} pt={10}>
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="secondary.light"
                textAlign="center"
              >
                ENFOQUE <br /> SOCIOCULTURAL
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="black"
                pt={5}
                align="justify"
              >
                {content[0]?.enfoqueDescripcion}
              </Typography>
            </Grid>

            <Grid item container xs={10} justifyContent="space-between" py={10}>
              <Grid item container xs={12} sm={5.5}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    {content[0]?.enfoqueSubtitulo1}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    {content[0]?.enfoqueDescripcion1}
                  </Typography>
                </Grid>

                <Grid item xs={12} pt={5}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    {content[0]?.enfoqueSubtitulo2}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    {content[0]?.enfoqueDescripcion2}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                sm={5.5}
                alignContent="flex-start"
                pt={{ xs: 5, sm: 0 }}
              >
                <Grid item xs={12}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    {content[0]?.enfoqueSubtitulo3}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    {content[0]?.enfoqueDescripcion3}
                  </Typography>
                </Grid>

                <Grid item xs={12} pt={{ xs: 5, sm: 10 }}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    {content[0]?.enfoqueSubtitulo4}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    {content[0]?.enfoqueDescripcion4}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.secondary.light,
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent="center" py={10} xs={10}>
            <Grid item xs={12} sm={10} justifyContent="center">
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="primary.dark"
                textAlign="center"
              >
                ENFOQUE <br /> PEDAGÓGICO
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="black"
                pt={5}
                textAlign="justify"
              >
                {content[0]?.enfoquePedagogicoDescripcion}
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontWeight={800}
                color="primary.dark"
                textAlign="center"
                pt={10}
              >
                ¿Cómo se lleva a la práctica un proyecto como el de Generación
                de Confianza?
              </Typography>
            </Grid>
            <Grid item container xs={10} pt={5}>
              <Image
                alt="metodologia"
                src={"/imgs/metodologia2.png"}
                width={1324}
                height={495}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent="center">
            <Grid item xs={10} sm={8.5} py={10}>
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="primary.dark"
                textAlign="center"
              >
                SEGUIMIENTO Y <br /> EVALUACIÓN
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="black"
                pt={5}
                textAlign="justify"
              >
                El proyecto “Generación de Confianza” a nivel metodológico
                articula diferentes aspectos técnicos y operativos en lo que se
                refiere a la implementación de un modelo de relacionamiento con
                grupos de interés.
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="black"
                pt={5}
                textAlign="justify"
              >
                Está diseñado a partir de cuatro fases: Acercamiento e
                Identificación, Involucramiento, Intervención, Evaluación-
                cierre-sistematización y un procedimiento transversal de
                acompañamiento e implementación de estrategias de comunicación
                para el desarrollo.
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="black"
                pt={5}
                textAlign="justify"
              >
                Es importante señalar que si bien dichas fases, ofrecen
                claridades en cuanto al diseño metodológico a tener en cuenta
                para futuros procesos de réplica, no se constituyen en modo
                alguno en un modelo necesariamente secuencial; de igual forma,
                su desarrollo depende de diversos factores, en los que las
                dinámicas de contexto, fortalezas del equipo profesional y el
                interés y constancia comunitaria y empresarial, juegan un papel
                decisivo para su conformación y fortalecimiento.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "primary.A200",
            justifyContent: "center",
            pb: 10,
          }}
        >
          <Grid item container justifyContent="center">
            <Grid
              item
              container
              xs={10}
              pt={10}
              alignItems="center"
              justifyContent="space-around"
              textAlign="center"
            >
              <Typography
                // fontSize={82.04}
                // lineHeight={"75.92px"}
                fontSize={{ xs: 60, sm: 82.04 }}
                lineHeight={{ xs: 1, sm: "75.92px" }}
                fontWeight={800}
                color="primary.main"
              >
                Fases del <br /> proyecto
              </Typography>
              <Typography
                fontWeight={800}
                // color='secondary'
                fontSize={{ xs: 16, sm: 21.19 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily="VAGROUNDEDSTD"
                textAlign="center"
                sx={{
                  color: slide === 0 ? "primary.main" : "secondary.light",
                  cursor: "pointer",
                  textDecoration: slide === 0 ? "underline" : "none",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                  },
                }}
                onClick={() => {
                  setSlide(0);
                }}
                pt={{ xs: 5, sm: 0 }}
              >
                Acercamiento e <br /> identificación
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={{ xs: 16, sm: 21.19 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily="VAGROUNDEDSTD"
                textAlign="center"
                sx={{
                  color: slide === 1 ? "primary.main" : "secondary.light",
                  cursor: "pointer",
                  textDecoration: slide === 1 ? "underline" : "none",
                  pl: { xs: 3, sm: 0 },
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                  },
                }}
                onClick={() => {
                  setSlide(1);
                }}
                pt={{ xs: 5, sm: 0 }}
              >
                Involucramiento
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={{ xs: 16, sm: 21.19 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily="VAGROUNDEDSTD"
                textAlign="center"
                sx={{
                  color: slide === 2 ? "primary.main" : "secondary.light",
                  cursor: "pointer",
                  textDecoration: slide === 2 ? "underline" : "none",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                  },
                  pl: { xs: 2, sm: 0 },
                }}
                onClick={() => {
                  setSlide(2);
                }}
                pt={{ xs: 2, sm: 0 }}
              >
                Intervención
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={{ xs: 16, sm: 21.19 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily="VAGROUNDEDSTD"
                textAlign="center"
                sx={{
                  color: slide === 3 ? "primary.main" : "secondary.light",
                  cursor: "pointer",
                  textDecoration: slide === 3 ? "underline" : "none",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                  },
                }}
                onClick={() => {
                  setSlide(3);
                }}
                pt={{ xs: 2, sm: 0 }}
              >
                Evaluación, cierre <br /> y sistematización
              </Typography>
            </Grid>
            <Box
              width="90%"
              height={5}
              sx={{ backgroundColor: "secondary.light" }}
              my={5}
            />
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              width={isXs ? "90%" : "95%"}
            >
              {!isXs && (
                <IconButton
                  sx={{ p: 2, backgroundColor: "primary.main" }}
                  onClick={onPrevSlide}
                >
                  <Image
                    alt={"leftIcon"}
                    src={"/icons/LeftIcon.png"}
                    width={31}
                    height={27}
                  />
                </IconButton>
              )}

              {slide === 0 ? (
                <Acercamiento />
              ) : slide === 1 ? (
                <Involucramiento />
              ) : slide === 2 ? (
                <Intervencion />
              ) : slide === 3 ? (
                <Evaluacion />
              ) : null}

              {!isXs && (
                <IconButton
                  sx={{ p: 2, backgroundColor: "primary.main" }}
                  onClick={onNextSlide}
                >
                  <Image
                    alt={"rightIcon"}
                    src={"/icons/RightIcon.png"}
                    width={31}
                    height={27}
                  />
                </IconButton>
              )}
            </Stack>
          </Grid>
        </Box>
        <Grid item container xs={10} justifyContent="space-between" pt={10}>
          <Grid item container xs={12} sm={5}>
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: 25, sm: 33.33 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="primary.light"
                textAlign="left"
              >
                Temas Transversales al Proceso
              </Typography>
              <Stack direction="row" spacing={2} pt={{ xs: 4, sm: 0 }}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Formulación y gestión de proyectos
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Cultura Ciudadana y Cultura de la Legalidad
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  // textAlign='justify'
                >
                  Temas empresariales - CHEC (riesgos eléctricos, líneas de
                  atención, factura, trámites, servicios nuevos, conexiones
                  legales del servicio entre otros)
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Procesos de Réplica
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Relacionamiento basado en conocimiento mutuo
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Desarrollo Humano
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} pt={5}>
              <Image alt="gc" src="/imgs/GC-3.png" width={668} height={441} />
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={6} pt={{ xs: 4, sm: 0 }}>
            <Grid item xs={12} sx={{ height: "fit-content" }} pb={9}>
              <Typography
                fontSize={{ xs: 25, sm: 33.33 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="primary.light"
                textAlign="left"
              >
                Aspectos a considerar
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "32.17px" }}
                fontFamily="Open Sans"
                color="secondary.light"
                textAlign="justify"
              >
                En términos generales y teniendo en cuenta las posibles
                variaciones en cuanto a seguimiento, evaluación y
                sistematización que puedan derivarse del proyecto, en función de
                los diversos territorios en los cuales sea ejecutado y buscando
                por este medio generar procesos de aprendizaje empresarial
                basados en la experiencia, se espera contar con los siguientes
                insumos básicos que permitan generar futuros procesos de
                réplica:
              </Typography>

              <Stack direction="row" spacing={2} pt={{ xs: 5, sm: 10 }}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Diseños metodológicos de seguimiento, intervención y
                  evaluación.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Levantamiento de línea base
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Indicadores sociales y técnicos e instrumentos para utilizar
                  en el proyecto.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Sistematización del proyecto una vez se realice cierre en los
                  territorios en donde sea ejecutado.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Análisis de impacto que describa de manera cualitativa y
                  cuantitativa, los impactos en el mediano y largo plazo de las
                  acciones generadas por el proyecto, con base en los
                  indicadores estratégicos de CHEC grupo EPM y las metas e
                  indicadores establecidos para el mismo.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: { xs: 30, sm: 40 } }}
                  color="secondary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "32.17px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Proceso de sistematización, tanto a nivel empresarial como
                  comunitario.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          sm={2.1}
          justifyContent="center"
          alignItems="center"
          pt={5}
          pb={10}
        >
          <Image alt="gc" src="/imgs/gc.png" width={284} height={165} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Metodologia;
