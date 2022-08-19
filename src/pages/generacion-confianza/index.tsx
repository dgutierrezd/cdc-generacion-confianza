import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useEffect, useState } from "react";
import useIsXs from "../../utils/useIsXs";
import { app, database } from "../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "generacion-confianza");

const GeneracionResultados = () => {
  const [slide, setSlide] = useState<number>(0);
  const [content, setContent] = useState<any>([]);

  const isXs = useIsXs();

  useEffect(() => {
    getGeneracionConfianza();
  }, []);

  const getGeneracionConfianza = () => {
    getDocs(dbInstance).then((data) => {
      setContent(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const onNextSlide = () => {
    setSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const onPrevSlide = () => {
    setSlide((prev) => (prev === 0 ? 1 : 0));
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
          justifyContent={isXs ? "center" : "space-between"}
          alignItems="center"
          py={{ xs: 5, sm: 10 }}
          xs={12}
          sm={10.5}
        >
          <Grid item xs={10} sm={5.5}>
            <Typography
              sx={{ color: (theme) => theme.palette.primary.light }}
              fontSize={{ xs: 40, sm: 62.5 }}
              lineHeight={{ xs: 1.2, sm: "63.42px" }}
              fontWeight={800}
              textAlign={isXs ? "center" : "right"}
            >
              {content[0]?.titulo1}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Typography
              pt={{ xs: 5, sm: 0 }}
              color="secondary"
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "33.96px" }}
              fontFamily="Open Sans"
              textAlign="justify"
            >
              {content[0]?.texto1}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "primary.main",
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent="space-between" py={10} xs={10}>
            <Grid item xs={12} sm={4.3}>
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="secondary.light"
              >
                Elementos que guían y soportan el proyecto:
              </Typography>
              <Typography
                color="black"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
                pt={isXs ? 2 : 5}
              >
                Dado el alcance del objetivo propuesto, el proyecto en sí mismo
                ha presentado grandes retos para la empresa, que requirieron en
                su momento formular desde premisas distintas una lectura al
                indicador de pérdidas. A continuación, se presentan los
                fundamentos corporativos y teóricos que permitieron establecer
                desde una perspectiva rigurosa un proyecto que como “Generación
                de Confianza”, comprende que las transformaciones son solo
                posibles si las realizamos juntos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} pt={isXs ? 5 : 0}>
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="primary.dark"
                textAlign="center"
                pb={5}
              >
                Fundamentos corporativos
              </Typography>
              <Image
                alt="mapa"
                src={"/imgs/GC_Mapa.png"}
                width={971}
                height={509}
              />
            </Grid>

            <Grid item container xs={12} justifyContent="center" pt={5}>
              <Grid item xs={12} sm={8}>
                <Typography
                  fontSize={{ xs: 20, sm: 29.17 }}
                  lineHeight={{ xs: 1.2, sm: "33.96px" }}
                  fontWeight={800}
                  color="secondary.light"
                  textAlign="center"
                  pb={5}
                >
                  {content[0]?.fundamentosHelper}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              xs={12}
              sm={5.5}
              justifyContent="center"
              pt={isXs ? 0 : 5}
            >
              <Grid item>
                <Typography
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.2, sm: "33.96px" }}
                  fontWeight={800}
                  color="primary.dark"
                >
                  {content[0]?.tituloOrg1}
                </Typography>
                <Typography
                  color="black"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  {content[0]?.textoOrg1}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={5.5}
              justifyContent="center"
              pt={5}
            >
              <Grid item>
                <Typography
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.2, sm: "33.96px" }}
                  fontWeight={800}
                  color="primary.dark"
                >
                  {content[0]?.tituloOrg2}
                </Typography>
                <Typography
                  color="black"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  {content[0]?.textoOrg2}
                </Typography>
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
          <Grid item container justifyContent="space-between" py={10} xs={10}>
            <Grid item xs={12} sm={6} justifyContent="center">
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                fontFamily="Open Sans"
                color="primary.main"
                textAlign="center"
              >
                Principios éticos que guían
              </Typography>
              <Typography
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontWeight={800}
                color="background.default"
                textAlign="center"
                pb={5}
              >
                nuestro actuar
              </Typography>
              <Image
                alt="principios"
                src={"/imgs/principios-1.png"}
                width={650}
                height={577}
              />
            </Grid>
            <Grid item container xs={12} sm={6} pt={isXs ? 5 : 0}>
              <Grid
                item
                container
                xs={12}
                justifyContent={isXs ? "center" : "space-between"}
                alignItems={isXs ? "center" : "initial"}
              >
                <Grid item xs={3.5} sm={2}>
                  <Image
                    alt="transparencia"
                    src={"/imgs/p2-transparencia.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={12} sm={9.5} pt={isXs ? 3 : 0}>
                  <Typography
                    color="black"
                    fontSize={{ xs: 16, sm: 20 }}
                    lineHeight={{ xs: 1.5, sm: "29.17px" }}
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    <Typography
                      component="span"
                      color="primary"
                      fontSize={{ xs: 20, sm: 25 }}
                      lineHeight={{ xs: 1.5, sm: "33.96px" }}
                      fontWeight={800}
                    >
                      {content[0]?.tituloPrincipio1}
                    </Typography>{" "}
                    {content[0]?.textoPrincipio1}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justifyContent={isXs ? "center" : "space-between"}
                alignItems={isXs ? "center" : "initial"}
                pt={5}
              >
                <Grid item xs={3.5} sm={2}>
                  <Image
                    alt="transparencia"
                    src={"/imgs/p2-transparencia.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={12} sm={9.5} pt={isXs ? 3 : 0}>
                  <Typography
                    color="black"
                    fontSize={{ xs: 16, sm: 20 }}
                    lineHeight={{ xs: 1.5, sm: "29.17px" }}
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    <Typography
                      component="span"
                      color="primary"
                      fontSize={{ xs: 20, sm: 25 }}
                      lineHeight={{ xs: 1.5, sm: "33.96px" }}
                      fontWeight={800}
                    >
                      {content[0]?.tituloPrincipio2}
                    </Typography>{" "}
                    {content[0]?.textoPrincipio2}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justifyContent={isXs ? "center" : "space-between"}
                alignItems={isXs ? "center" : "initial"}
                pt={5}
              >
                <Grid item xs={3.5} sm={2}>
                  <Image
                    alt="transparencia"
                    src={"/imgs/p2-calidez.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={12} sm={9.5} pt={isXs ? 3 : 0}>
                  <Typography
                    color="black"
                    fontSize={{ xs: 16, sm: 20 }}
                    lineHeight={{ xs: 1.5, sm: "29.17px" }}
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    <Typography
                      component="span"
                      color="primary"
                      fontSize={{ xs: 20, sm: 25 }}
                      lineHeight={{ xs: 1.5, sm: "33.96px" }}
                      fontWeight={800}
                    >
                      {content[0]?.tituloPrincipio3}
                    </Typography>{" "}
                    {content[0]?.textoPrincipio3}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent="center" pt={5}>
              <Grid item xs={12} sm={8.3}>
                <Typography
                  fontSize={{ xs: 30, sm: 56.47 }}
                  lineHeight={{ xs: 1.2, sm: "57.3px" }}
                  fontWeight={800}
                  color="primary.A100"
                  textAlign="justify"
                  pt={5}
                >
                  Propósito
                </Typography>
                <Typography
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontWeight={800}
                  color="primary.dark"
                  textAlign="justify"
                >
                  {content[0]?.propositoPrincipios}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item container xs={12} justifyContent="center" pt={10}>
          <Grid item xs={12} sm={10}>
            <Typography
              fontSize={{ xs: 30, sm: 56.47 }}
              lineHeight={{ xs: 1.2, sm: "57.3px" }}
              fontWeight={800}
              fontFamily="Open Sans"
              color="secondary.light"
              textAlign="center"
            >
              Direccionamiento Estratégico de
            </Typography>
            <Typography
              fontSize={{ xs: 30, sm: 56.47 }}
              lineHeight={{ xs: 1.2, sm: "57.3px" }}
              fontWeight={800}
              color="primary.main"
              textAlign="center"
              pb={5}
            >
              CHEC y grupo EPM
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container xs={10} justifyContent="space-between">
            <Grid item xs={12} sm={5.8}>
              {slide === 0 ? (
                <Image
                  alt="slider"
                  src={"/imgs/Slider1.png"}
                  width={835}
                  height={478}
                />
              ) : (
                <Image
                  alt="slider"
                  src={"/imgs/Slider3.png"}
                  width={835}
                  height={478}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={5.8} pt={isXs ? 5 : 0}>
              {slide === 0 ? (
                <Image
                  alt="slider"
                  src={"/imgs/Slider2.png"}
                  width={835}
                  height={478}
                />
              ) : (
                <Image
                  alt="slider"
                  src={"/imgs/Slider4.png"}
                  width={835}
                  height={478}
                />
              )}
            </Grid>
          </Grid>

          <Grid item xs={3} py={5}>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <IconButton
                sx={{ p: 2, backgroundColor: "primary.main" }}
                onClick={onPrevSlide}
              >
                <Image
                  alt="icon"
                  src={"/icons/LeftIcon.png"}
                  width={31}
                  height={27}
                />
              </IconButton>
              <IconButton
                sx={{ p: 2, backgroundColor: "primary.main" }}
                onClick={onNextSlide}
              >
                <Image
                  alt="icon"
                  src={"/icons/RightIcon.png"}
                  width={31}
                  height={27}
                />
              </IconButton>
            </Stack>
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
            <Grid item xs={10} pt={10}>
              <Typography
                fontSize={{ xs: 40, sm: 64.58 }}
                lineHeight={{ xs: 1.5, sm: "94.67px" }}
                fontWeight={800}
                color="secondary.light"
                textAlign="center"
              >
                Temas Discutidos
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                color="black"
                textAlign="center"
                pt={5}
              >
                En CHEC propiciamos el desarrollo con equidad de territorios
                sostenibles, con una mirada integral a partir de las siguientes
                dimensiones:
              </Typography>
            </Grid>

            <Grid item container xs={10} justifyContent="space-between" pt={5}>
              <Grid item container xs={12} sm={5.5}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    Competitividad del territorio:
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    Propiciar el desarrollo de la competitividad económica,
                    ambiental, social y global de los territorios donde
                    actuamos.
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
                    Servicios públicos integrados y eficientes:
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    {
                      "Visión integral de los clientes y mercados en la provisión de soluciones eficientes y competitivas en electricidad, gas, agua, aseo y tecnología de la información y las comunicaciones – TIC."
                    }
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container xs={12} sm={5.5} pt={isXs ? 5 : 0}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontWeight={800}
                    color="primary.dark"
                    textAlign="left"
                  >
                    Comprabilidad por tarifas y cobertura:
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    Propiciar la universalización del servicio y el desarrollo
                    de tarifas competitivas que faciliten la comprabilidad.
                    Fortalecer la cultura del uso eficiente y racional de los
                    servicios públicos.
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
                    Mejoramiento de calidad de vida de las personas:
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 25 }}
                    lineHeight={{ xs: 1.5, sm: "33.96px" }}
                    fontFamily="Open Sans"
                    color="black"
                    textAlign="justify"
                  >
                    Propiciar el mejoramiento de la calidad de vida de las
                    personas y el índice de desarrollo humano.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={10} pt={10}>
              <Typography
                fontSize={{ xs: 40, sm: 64.58 }}
                lineHeight={{ xs: 1.5, sm: "94.67px" }}
                fontWeight={800}
                color="secondary.light"
                textAlign="center"
              >
                Fundamentos Teóricos
              </Typography>
              <Grid item xs={12} pt={5}>
                <Typography
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontWeight={800}
                  color="primary.dark"
                  textAlign="left"
                >
                  Teoría del Cambio Social:
                </Typography>
                <Typography
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  color="black"
                  textAlign="justify"
                >
                  Desde los planteamientos de Kurt Lewin un elemento social es
                  mantenido en equilibrio por la interacción de dos grupos que
                  generan fuerzas opuestas; unas que intentan promover el cambio
                  (Fuerzas impulsoras) y otras que intentan mantener el “status
                  quo” (Fuerzas que refrenan). Las organizaciones son sistemas
                  en los cuales la situación actual no es un patrón estático
                  sino un equilibrio dinámico de fuerzas que trabajan en
                  direcciones opuestas, en este sentido, para que ocurra un
                  cambio las fuerzas impulsoras deben exceder las fuerzas que
                  refrenan, cambiando así el equilibrio.
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={10} justifyContent="space-between" pt={5}>
              <Grid item container xs={12} sm={5.5}>
                {/* <Box
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "secondary.light",
                    width: "100%",
                    height: 400,
                  }}
                > */}
                <Image
                  alt="gc"
                  src={"/imgs/Politicas1.png"}
                  width={800}
                  height={400}
                />
                {/* </Box> */}
              </Grid>
              <Grid item container xs={12} sm={5.5} pt={{ xs: 5, sm: 0 }}>
                {/* <Box
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "secondary.light",
                    width: "100%",
                    height: 400,
                  }}
                > */}
                <Image
                  alt="gc"
                  src={"/imgs/Politicas2.png"}
                  width={800}
                  height={400}
                />
                {/* </Box> */}
              </Grid>
            </Grid>

            <Grid item xs={10} pt={5} pb={10}>
              <Typography
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                color="black"
                textAlign="justify"
              >
                En esta lógica, CHEC grupo EPM emprende una apuesta empresarial
                desde la cual se hace prioritario, desarrollar cambios que
                permitan superar los factores que movilizan las fuerzas que
                refrenan; es a partir del reconocimiento que realiza CHEC grupo
                EPM de estas dinámicas de orden social, que se da inicio a la
                elaboración del proyecto en mención, así, se parte de la
                premisa, que intervenir una serie de variables asociadas a los
                hábitos, controles, normas y dinámicas sociales, permitirán
                paulatinamente, obtener los objetivos empresariales propuestos.
                Este ejercicio de reconocimiento se ha constituido para la
                empresa en un gran paso hacia el futuro, reconociendo que los
                procedimientos técnicos requieren para su sostenibilidad ser
                abordados desde el componente social.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid item container justifyContent="center" xs={10}>
          <Grid item xs={12} sm={6} pt={10}>
            <Typography
              fontSize={{ xs: 40, sm: 64.58 }}
              lineHeight={{ xs: 1.2, sm: "63.42px" }}
              fontWeight={800}
              color="primary.main"
              textAlign="center"
            >
              Cómo surge el proyecto generación de confianza
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            pt={5}
            justifyContent="space-between"
            pb={10}
          >
            <Grid item xs={12} sm={5.7}>
              <Typography
                color="secondary.main"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
              >
                Desde el año 2003, CHEC grupo EPM ha desarrollado acciones en el
                marco de diferentes proyectos, con el objetivo de disminuir los
                niveles de pérdidas de energía eléctrica, viabilizando acciones
                técnicas, educando y sensibilizando a los clientes frente al
                acceso y uso adecuado del servicio de energía, desarrollando
                además, estrategias formativas para dar sostenibilidad a los
                procesos empresariales.
              </Typography>
              <Typography
                color="secondary.main"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
                pt={6}
              >
                Pese a lo anterior, una vez finalizadas dichas acciones, se
                logró identificar que el nivel de pérdidas reducido no lograba
                mantenerse, hecho que condujo a buscar nuevas alternativas, en
                este sentido CHEC grupo EPM como empresa prestadora del servicio
                público de energía eléctrica y dando respuesta a sus compromisos
                legales frente a la prestación del servicio, en beneficio de sus
                clientes y usuarios, adopta estrategias técnicas de seguimiento
                y control entre las que se encuentran: Reubicación de medida en
                apoyo, habilitación de vivienda, remodelación de redtes,
                instalación de macromedidores, cambio de contadores, acciones de
                control y normalización e iniciativas sociales de carácter
                educativo e informativo, estas últimas, adoptadas con el fin de
                socializar y poner en consideración con clientes y usuarios, las
                acciones técnicas a emprenderse en los diferentes sectores que
                presentaban altas pérdidas de energía.
              </Typography>

              <Typography
                color="secondary.main"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
                pt={6}
              >
                Como respuesta a estas estrategias, clientes y comunidad bajo la
                influencia de factores de tipo cultural, político, económico y
                social, presentaron quejas y manifestaciones de inconformidad
                ante las alternativas técnicas emprendidas por la empresa, para
                mitigar los niveles de pérdidas de energía.
              </Typography>

              <Typography
                color="secondary.main"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
                pt={6}
              >
                Ante esta necesidad de empresa, se vislumbra la posibilidad, de
                realizar un ejercicio netamente social, donde el énfasis fuese
                “Cultura de Legalidad en el marco de la participación
                ciudadana”, entendiendo que estos elementos,
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5.7}>
              <Typography
                color="secondary.main"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
                pb={5}
              >
                podrían hacer la diferencia, con respecto a la cantidad de
                estrategias y soluciones de tipo técnico desarrolladas por la
                empresa, pero en las que lamentablemente, si bien se encontraban
                algunos resultados, se continuaba con la necesidad de
                complementar dichas acciones, es así, como se busca una
                alternativa en el proyecto Generación de Confianza, que lo que
                se pretendía, era realizar cambios importantes frente al
                comportamiento social de los territorios, orientados a
                fortalecer una cultura de legalidad, dado que ante cada solución
                técnica al problema, aparecía una condición de irregularidad
                frente al acceso y uso del servicio de energía de los usuarios,
                desde allí, se concluyó, que las acciones técnicas debían ir
                alineadas con el componente social, donde las personas, pudiesen
                adoptar comportamientos legales frente a cualquier circunstancia
                de la vida, es de esta manera, como nace el Proyecto Generación
                de Confianza, buscando entregar elementos que permitieran a las
                comunidades, encontrar ese sentido social y legal responsable en
                los entornos donde se identifica en mayor medida esta
                problemática social.
              </Typography>

              <Image alt="gc" src={"/imgs/GC-1.png"} width={769} height={576} />
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
            backgroundImage: `url(${"/imgs/GC-bg.png"})`,
          }}
        >
          <Grid item container xs={10} py={10} justifyContent="space-between">
            <Grid item xs={12} sm={7}>
              <Typography
                fontSize={{ xs: 40, sm: 64.58 }}
                lineHeight={{ xs: 1.2, sm: "63.42px" }}
                fontWeight={800}
                color="primary.main"
              >
                Objetivos
              </Typography>
              <Typography
                fontSize={{ xs: 30, sm: 39.15 }}
                lineHeight={{ xs: 1.2, sm: "38.44px" }}
                fontWeight={800}
                color="secondary.light"
                py={5}
              >
                General
              </Typography>
              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Apalancar la recuperación y/o mitigación de los niveles de
                  pérdidas de energía no técnicas, a partir de procesos de
                  involucramiento social y comunitario, que promuevan el fomento
                  de la cultura de la legalidad y la consolidación de procesos
                  de fidelización y acercamiento de la empresa, con el grupo de
                  interés Comunidad y Clientes, desde la perspectiva de generar
                  confianza en el territorio donde se ejecute la propuesta.
                </Typography>
              </Stack>

              <Typography
                fontSize={{ xs: 30, sm: 39.15 }}
                lineHeight={{ xs: 1.2, sm: "38.44px" }}
                fontWeight={800}
                color="secondary.light"
                py={5}
              >
                Específicos
              </Typography>
              <Stack direction="row" spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Identificar y seleccionar comunidades objetivo a partir del
                  diagnóstico de pérdidas de energía.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Establecer acercamientos con actores sociales representativos
                  que pueden servir de vehículo para el desarrollo del proyecto.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Identificar las necesidades de la comunidad a través de los
                  actores sociales.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Concertar intereses y acciones que serán abordadas dentro del
                  proyecto de acuerdo con criterios de integralidad y los
                  análisis de elegibilidad, viabilidad y prioridad.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Implementar alianzas, estrategias y acciones integrales,
                  enfocadas a mitigar los problemas seleccionados que afectan
                  las comunidades y que fomentan el uso indebido del servicio de
                  energía.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                />
                <Typography
                  color="secondary.light"
                  fontSize={{ xs: 16, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontFamily="Open Sans"
                  textAlign="justify"
                >
                  Analizar el impacto de las acciones realizadas sobre las
                  pérdidas no técnicas, generando ajustes en el proyecto y
                  lecciones aprendidas para ejercicios futuros.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} alignSelf="flex-end">
              <Typography
                fontSize={{ xs: 30, sm: 39.15 }}
                lineHeight={{ xs: 1.2, sm: "38.44px" }}
                fontWeight={800}
                color="primary.main"
                py={5}
              >
                Población Impactada
              </Typography>
              <Typography
                color="secondary.light"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                pt={{ xs: 0, sm: 5 }}
                textAlign={{ xs: "justify", sm: "initial" }}
              >
                <Typography
                  component="span"
                  color="primary.main"
                  fontSize={{ xs: 20, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontWeight={800}
                >
                  {"Clientes: "}
                </Typography>
                Se impactan aquellos clientes que en el desarrollo del proyecto
                son identificados como reincidentes.
              </Typography>

              <Typography
                color="secondary.light"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                pt={5}
                textAlign={{ xs: "justify", sm: "initial" }}
              >
                <Typography
                  component="span"
                  color="primary.main"
                  fontSize={{ xs: 20, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontWeight={800}
                >
                  {"Comunidad: "}
                </Typography>
                Se impactan líderes, representantes y organizaciones de tipo
                social y comunitario presentes en el territorio.
              </Typography>

              <Typography
                color="secondary.light"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                pt={5}
                textAlign={{ xs: "justify", sm: "initial" }}
              >
                <Typography
                  component="span"
                  color="primary.main"
                  fontSize={{ xs: 20, sm: 25 }}
                  lineHeight={{ xs: 1.5, sm: "33.96px" }}
                  fontWeight={800}
                >
                  {"Trabajadores y contratistas: "}
                </Typography>
                Involucra a trabajadores y contratistas de la empresa en
                acciones del proyecto.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "primary.main",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            container
            justifyContent="center"
            py={{ xs: 5, sm: 10 }}
            xs={10}
          >
            <Grid item xs={10}>
              <Typography
                fontSize={{ xs: 40, sm: 64.58 }}
                lineHeight={{ xs: 1.2, sm: "63.42px" }}
                fontWeight={800}
                color="secondary.light"
                textAlign="center"
                pb={{ xs: 3, sm: 2 }}
              >
                Población Impactada
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                color="black"
                fontSize={{ xs: 16, sm: 25 }}
                lineHeight={{ xs: 1.5, sm: "33.96px" }}
                fontFamily="Open Sans"
                textAlign="justify"
              >
                Las estrategias emprendidas dentro de este proyecto se llevaron
                a cabo en los barrios o sectores de 3 municipios del
                departamento de Caldas: La Dorada, Manizales y Marmato; donde se
                han identificado nodos considerados como reincidentes y de altas
                pérdidas. <br /> <br /> Desde el proyecto, se buscó fortalecer y
                apoyar las diversas iniciativas, que algunas instituciones y
                organizaciones comunitarias venían adelantando en los
                territorios y que lograban articularse de manera efectiva al
                enfoque empresarial de CHEC, fue así, como desde el año 2012, se
                dio inicio al proceso de relacionamiento basado en la Confianza
                con las siguientes organizaciones:
              </Typography>
            </Grid>

            <Grid
              item
              container
              xs={12}
              justifyContent="space-between"
              alignItems="center"
              pt={8}
            >
              <Grid
                item
                container
                xs={12}
                sm={4}
                justifyContent={{ xs: "center", sm: "space-between" }}
                alignItems="center"
              >
                {/* <Stack direction='row' spacing={3}>
                  <Box pt={5}>
                    <Image src={"/imgs/dorada.png"} width={85} height={218} />
                  </Box>
                  <Typography
                    fontSize={39.15}
                    lineHeight={"38.44px"}
                    fontWeight={800}
                    color='background.default'
                  >
                    La Dorada
                  </Typography>
                </Stack> */}

                <Grid item xs={3} sm={1.5}>
                  <Image
                    alt="dorada"
                    src={"/imgs/dorada.png"}
                    width={85}
                    height={218}
                  />
                </Grid>
                <Grid item xs={12} sm={10} pt={{ xs: 2, sm: 0 }}>
                  <Typography
                    fontSize={{ xs: 30, sm: 39.15 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    fontWeight={800}
                    color="background.default"
                  >
                    La Dorada
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 22.96 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    color="black"
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    Asociación de Jóvenes Emprendedores, Asociación Cimarrona
                    Afrodoradense, Molinos de Vida, Juntas de Acción Comunal,
                    Unidad de Juventud, I.E Renán Barco, Convite por mi Barrio y
                    Fundación Apoyar.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={7}
                justifyContent={{ xs: "center", sm: "space-between" }}
                alignItems="center"
                pt={{ xs: 10, sm: 0 }}
              >
                <Grid item xs={6} sm={2.3}>
                  <Image
                    alt="manizales"
                    src={"/imgs/manizales.png"}
                    width={197}
                    height={106}
                  />
                </Grid>
                <Grid item xs={12} sm={9.3} pt={{ xs: 2, sm: 0 }}>
                  <Typography
                    fontSize={{ xs: 30, sm: 39.15 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    fontWeight={800}
                    color="background.default"
                  >
                    Manizales
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 22.96 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    color="black"
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    Fundación Huellas de Vida, Comité Interbarrial de
                    Ciudadanía, Alianza público privada contra la defraudación
                    de fluidos- contra el fraude, Casa de la Cultura
                    Villahermosa y Nevado, Manizales Hip Hop, Barra Holocausto
                    Norte (Parche La Descendencia 5), Grupo Vértigo, I.E Andres
                    Bello, Juntas de Acción Comunal, Círculo de Mujeres,
                    Biblioteca El Nevado y el proyecto comunitario Ayuda a un
                    Amigo Callejero.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container xs={12} sm={10} py={5}>
              <Grid
                item
                container
                xs={12}
                justifyContent={{ xs: "center", sm: "space-between" }}
                alignItems="center"
                pt={{ xs: 10, sm: 0 }}
              >
                <Grid item xs={3} sm={0.6}>
                  <Image
                    alt="marmato"
                    src={"/imgs/marmato.png"}
                    width={76}
                    height={116}
                  />
                </Grid>
                <Grid item xs={12} sm={11.2}>
                  <Typography
                    fontSize={{ xs: 30, sm: 39.15 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    fontWeight={800}
                    color="background.default"
                  >
                    Marmáto
                  </Typography>
                  <Typography
                    fontSize={{ xs: 16, sm: 22.96 }}
                    lineHeight={{ xs: 1.2, sm: "38.44px" }}
                    color="black"
                    fontFamily="Open Sans"
                    textAlign="justify"
                  >
                    Inicia en el año 2018 con las siguientes
                    organizaciones:Comité para el Desarrollo Turístico de
                    Marmato, Club de la salud, comunidades Afrodescendientes,
                    Amigos del Llano, Fundación artística y cultural “Son de
                    Oro”, Asociación de joyeros tradicionales “Asojomar”,
                    Asociación de Mineros Tradicionales, Asociación Marmateña de
                    Mujeres Emprendedoras &quot;Asociamme&quot;, Corporación
                    para el Desarrollo Social Sostenible de Marmato, Parcialidad
                    Indígena Cartama, Grupo social Titanes de Oro, Institución
                    Educativa el Llano, Institución educativa General Ramón
                    Marín (Corregimiento San Juan), Institución educativa
                    Marmato, Biblioteca municipal, Casa de la Cultura, Bomberos
                    voluntarios de Marmato, Biblioteca La Plaza, Hospital San
                    Antonio de Marmato, Asomitrama, Grupo de fútbol femenino
                    mujeres siglo XXI.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item pt={{ xs: 5, sm: 10 }}>
              <Image
                alt="line time"
                src={"/imgs/GC-line-time.png"}
                width={1343}
                height={789}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
};

export default GeneracionResultados;
