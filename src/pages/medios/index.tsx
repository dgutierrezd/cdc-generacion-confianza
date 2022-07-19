import {
  Box,
  Dialog,
  Grid,
  IconButton,
  Link,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Medios = () => {
  const [imageShow, setImageShow] = useState(1);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPrevSlide = () => {
    if (imageShow === 1) {
      setImageShow(16);
    } else {
      setImageShow(imageShow - 1);
    }
  };

  const onNextSlide = () => {
    if (imageShow === 16) {
      setImageShow(1);
    } else {
      setImageShow(imageShow + 1);
    }
  };

  return (
    <Box>
      <Navbar />
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          flexDirection: "column",
        }}
      >
        <Typography
          color="primary"
          fontSize={82.04}
          lineHeight={"94.67px"}
          fontFamily="VAGROUNDEDSTD"
          fontWeight={800}
        >
          Medios
        </Typography>
        <Grid width={"45%"}>
          <Typography
            color="secondary"
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily="Open Sans"
            pt={7}
            align="center"
          >
            {
              'El Proyecto Social para la "Generación de Confianza y promoción de la cultura de la legalidad", conocido actualmente a nivel comunitario y empresarial como "Generación de Confianza", se orienta a generar un cambio de postura en todos los actores implicados (empresa-comunidad y demás instituciones vinculadas al proyecto) frente a su papel activo y transformador en la viabilización de acciones sociales y técnicas.'
            }
          </Typography>
          <Typography
            color="primary"
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily="Open Sans"
            align="center"
          >
            En este espacio encontrar medios que cuenten las experiencias
            vividas con nuestros grupos de interés.
          </Typography>
          <Typography
            color="secondary"
            fontSize={62.5}
            lineHeight={"94.67px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            textAlign={"center"}
            pt={12}
            pb={5}
          >
            Galería Fotográfica
          </Typography>
        </Grid>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          width={"80%"}
        >
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
          <Image
            alt={"image"}
            src={`/imgs/galeria/DSCN${imageShow}.JPG`}
            width={987}
            height={554}
            style={{ borderRadius: 20 }}
          />
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
        </Stack>
      </Grid>
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"80%"}
        >
          <Image
            alt={"rightIcon"}
            src={"/icons/videoVerde.png"}
            width={88}
            height={58}
          />
          <Typography
            color="secondary"
            fontSize={62.5}
            lineHeight={"94.67px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pl={1}
            onClick={() => handleClickOpen()}
          >
            Videos
          </Typography>
        </Stack>
        <Grid item container xs={10} justifyContent="space-between" pt={5}>
          <Grid item container xs={3}>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: "secondary.light",
                width: "100%",
                height: 250,
              }}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/videoVerde.png"}
                width={56}
                height={36}
              />
              <Typography
                color="secondary"
                fontSize={25}
                lineHeight={"25px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
              >
                Campaña contra el racismo
              </Typography>
            </Stack>
          </Grid>
          <Grid item container xs={3}>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: "secondary.light",
                width: "100%",
                height: 250,
              }}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/videoVerde.png"}
                width={56}
                height={36}
              />
              <Typography
                color="secondary"
                fontSize={25}
                lineHeight={"25px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
              >
                Cápsula Afro
              </Typography>
            </Stack>
          </Grid>
          <Grid item container xs={3}>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: "secondary.light",
                width: "100%",
                height: 250,
              }}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/videoVerde.png"}
                width={56}
                height={36}
              />
              <Typography
                color="secondary"
                fontSize={25}
                lineHeight={"25px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
              >
                Nota Chec
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid item container xs={10} justifyContent="space-between" pt={6}>
          <Grid item container xs={3}>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: "secondary.light",
                width: "100%",
                height: 250,
              }}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/videoVerde.png"}
                width={56}
                height={36}
              />
              <Typography
                color="secondary"
                fontSize={25}
                lineHeight={"25px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
              >
                Ciclo ruta Chec
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundImage: `url(${"/imgs/Fondo2Medios.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"80%"}
          pb={10}
        >
          <Image
            alt={"rightIcon"}
            src={"/icons/pdfVerde.png"}
            width={71}
            height={83}
          />
          <Typography
            color="secondary"
            fontSize={62.5}
            lineHeight={"94.67px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pl={3.5}
          >
            Documentos
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={10}
          width={"80%"}
        >
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              href={"/documentos/Socielogia de la accion.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Sociología de la acción
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={
                "/documentos/SM_N68_Formulacion_prog_metodologia_ML - 2011.pdf"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              SM_N68_Formulación programa metodología ML - 2011
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={"/documentos/modulo-soy-un-ciudadano-legal-final.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Modulo soy un ciudadano legal final
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={23}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={200}
              align="left"
              href={"/documentos/Modulo Soy un Ciudadano Legal.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Modulo Soy un Ciudadano Legal
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center" pr={31}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              align="left"
              href={"/documentos/Marmato La Tierra codiciada.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Marmato La Tierra codiciada
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/documentos/Guia para la formulacion participativa de proyectos en organizaciones de base comunitaria.PPD.pdf"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Guía para la furmulación participativa de proyectos en
              organizaciones de base comunitaria.PPD
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={11}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={"/documentos/GUIA PARA FORMULACION DE PROYECTOS DE ONG.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Guía para la formulación de proyectos de ONG
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center" pr={27}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={350}
              align="left"
              href={
                "/documentos/Grupos Focales de Investigación Generacion de Confianza.pdf"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Grupos Focales de Investigación Generación de Confianza
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={"/documentos/cartografia-social.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Cartografía social
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={11}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/documentos/Del cuerpo a la ciudad_ repensando nuestros territorios desde la investigación colectiva  con cartografía social.pdf"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Del cuerpo a la ciudad: repensando nuestros territorios desde la
              investigación colectivo con cartografía social
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"80%"}
          pb={10}
        >
          <Image
            alt={"rightIcon"}
            src={"/icons/pdfVerde.png"}
            width={71}
            height={83}
          />
          <Typography
            color="primary"
            fontSize={62.5}
            lineHeight={"94.67px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pl={3.5}
          >
            Instrumentos
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={10}
          width={"80%"}
        >
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              href={"/instrumentos/Formulario Caracterizacion Afro.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Formulario Caracterización Afro
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={
                "/instrumentos/INSTRUMENTO CARACTERIZACION DE ACTORES ESTRATEGICO GENERACION DE CONFIZAN-  COMUNITARIO.docx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Instrumento caracterización de actores estratégicos generación de
              confianza
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={
                "/instrumentos/instrumento de caracterizacion organizacion generacion de confianza.doc"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Instrumento de caracterización organización generación de
              confianza
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={8}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={355}
              align="left"
              href={"/instrumentos/Instrumento evaluación de entrada PDF.pdf"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Instrumento evaluación de entrada PDF
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/instrumentos/INSTRUMENTO TALLER DE DESARROLLO HUMANO GENERACION DE CONFIANZA.docx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Instrumento taller de desarollo humano
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"80%"}
          pb={10}
          pt={3}
        >
          <Image
            alt={"rightIcon"}
            src={"/icons/pdfVerde.png"}
            width={71}
            height={83}
          />
          <Typography
            color="primary"
            fontSize={62.5}
            lineHeight={"94.67px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pl={3.5}
          >
            Presentaciones
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={10}
          width={"80%"}
        >
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              href={
                "/presentaciones/GENERACIÓN DE CONFIANZA 2017 linea del tiempo.pptx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Generación de confianza 2017
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={"/presentaciones/Generacion de confianza 2018.pptx"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Generación de confianza 2018
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={430}
              align="left"
              href={"/presentaciones/Modulo de Formacion Perdidas.pptx"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Módulo de Formación Pérdidas
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={38}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={355}
              align="left"
              href={"/presentaciones/Presentacion CDC.ppt"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Presentación CDC
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center" pr={25}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={"/presentaciones/Presentacion lo hacemos con ustedes.pptx"}
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Presentación lo hacemos con usted
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/presentaciones/PRESENTACION MARMATO PARA ORGANZACIONES.pptx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Presentación Marmato para organizaciones
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" pb={10} width={"80%"}>
          <Stack direction={"row"} alignItems="center" pr={18.5}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={355}
              align="left"
              href={
                "/presentaciones/PROPUESTA GENERACION DE CONFIANZA  MARMATO PRESENTACION  FINAL.pptx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Propuesta Generación de Confianza Marmato
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center" pr={25}>
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/presentaciones/Proyecto generación de Confianza  Completo  Dorada.pptx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Propuesta Generación de confianza La Dorada
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <Image
              alt={"rightIcon"}
              src={"/icons/pdfBlanco.png"}
              width={54}
              height={63}
            />
            <Link
              color="secondary"
              fontSize={25}
              lineHeight={"23.5px"}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pl={1}
              maxWidth={300}
              align="left"
              href={
                "/presentaciones/Proyecto Social en Cultura de la Legalidad CHEC.pptx"
              }
              target="_blank"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Proyecto Social en Cultura de la Legalidad CHEC
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundImage: `url(${"/imgs/Fondo1Medios.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          width={"70%"}
          pb={10}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pb={11}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/pdfVerde.png"}
                width={71}
                height={83}
              />
              <Typography
                color="primary"
                fontSize={43.7}
                lineHeight={"42.76px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={3.5}
                width={500}
              >
                Informe evaluación de entrada Generación de Confianza:
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pb={9.5}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/pdfBlanco.png"}
                width={54}
                height={63}
              />
              <Link
                color="secondary"
                fontSize={25}
                lineHeight={"23.5px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
                href={
                  "/informes-evaluativos/INFORME EVALUACION DE ENTRADA GENERACION DE CONFIANZA MARMATO.pdf"
                }
                target="_blank"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                width={300}
              >
                INFORME EVALUACIÓN DE ENTRADA GENERACIÓN DE CONFIANZA MARMATO
              </Link>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Image
                alt={"rightIcon"}
                src={"/icons/pdfBlanco.png"}
                width={54}
                height={63}
              />
              <Link
                color="secondary"
                fontSize={25}
                lineHeight={"23.5px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
                href={
                  "/informes-evaluativos/INFORME FINAL DORADA Y MANIZALES.pdf"
                }
                target="_blank"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                width={300}
              >
                INFORME FINAL DORADA Y MANIZALES
              </Link>
            </Stack>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              pb={11}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/pdfVerde.png"}
                width={71}
                height={83}
              />
              <Typography
                color="primary"
                fontSize={43.7}
                lineHeight={"42.76px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={3.5}
                width={300}
              >
                Informe Sistematización
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pb={9.5}
            >
              <Image
                alt={"rightIcon"}
                src={"/icons/pdfBlanco.png"}
                width={54}
                height={63}
              />
              <Link
                color="secondary"
                fontSize={25}
                lineHeight={"23.5px"}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                pl={1}
                href={
                  "/informe-sistematizacion/SISTEMATIZACIÓN PROYECTO  SOCIAL PARA LAGENERACION DE CONFIANZA Y PROMOCIÓN DE LA CULTURA DE LA LEGALIDAD.pdf"
                }
                target="_blank"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                width={500}
              >
                SISTEMATIZACIÓN PROYECTO SOCIAL PARA LA GENERACIÓN DE CONFIANZA
                Y PROMOCIÓN DE LA CULTURA DE LA LEGALIDAD
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Footer />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="xl"
        PaperProps={{ sx: { width: "70%", height: "70%" } }}
        // classes={{ paper: { minHeight: "80vh", maxHeight: "80vh" } }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          width="100%"
          height="100%"
          // playing={true}
        />
      </Dialog>
    </Box>
  );
};

export default Medios;
