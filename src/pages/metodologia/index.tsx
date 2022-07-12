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
import { useState } from "react";

const Metodologia = () => {
  const [slide, setSlide] = useState<number>(0);

  const onNextSlide = () => {
    setSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const onPrevSlide = () => {
    setSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Navbar />
      <Grid container justifyContent='center'>
        <Grid
          item
          container
          justifyContent='space-between'
          //   alignItems='center'
          py={10}
          xs={10.5}
        >
          <Grid item xs={6.5}>
            <Typography
              color='secondary.main'
              fontSize={25}
              lineHeight={"33.96px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Para el desarrollo del proyecto se planteó una estrategia de
              intervención a partir de los factores que permiten promover el
              desarrollo humano y el capital social, enfocados al fomento de la
              cultura ciudadana, para ello, fue fundamental establecer líneas
              metodológicas que permitieran definir el enfoque de intervención
              con el cual se desarrollan acciones en los territorios, esto
              inicialmente implicaba evolucionar hacia nuevas formas de
              relacionamiento comunitario.
            </Typography>
          </Grid>
          <Grid item xs={4.7}>
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"32.17px"}
              fontWeight={800}
              textAlign='justify'
            >
              Lo anterior, condujo a la elaboración de una propuesta, a partir
              de la cual se logró conjugar diversas metodologías presentes en
              disciplinas del ámbito social y que articuladas, permitieron
              ofrecer elementos claves de intervención para la implementación
              del proyecto: “Generación de Confianza”.
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
          <Grid item container justifyContent='center'>
            <Grid item xs={8} pt={10}>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                ENFOQUE <br /> SOCIOCULTURAL
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                pt={5}
              >
                Este enfoque se apalanca metodológicamente en los aspectos
                propuestos por: la animación sociocultural, alianzas
                público-privadas (APP), investigación acción participativa (IAP)
                y acción sin daño.
              </Typography>
            </Grid>

            <Grid item container xs={10} justifyContent='space-between' py={10}>
              <Grid item container xs={5.5}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Animación Sociocultural
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Es una estrategia de trabajo comunitario, que busca animar,
                    motivar y empoderar a los integrantes de una comunidad para
                    generar 4 procesos de intervención que modifiquen
                    situaciones problemáticas locales a partir de identificar
                    los recursos y potencialidades que tienen desde lo cultural
                    y lo social. Desde esta estrategia, se desarrollan acciones
                    educativas, de reflexión y construcción participativa, que
                    buscan dejar capacidades instaladas para evitar la
                    generación de procesos de dependencia. La Animación
                    Sociocultural dinamiza y concertar acciones colectivas para
                    el involucramiento empresa comunidad. “Desde la animación
                    sociocultural, se construye a partir de los elementos que el
                    mismo territorio ofrece, que surgen desde el contexto y
                    logran potencializar por medio de esta estrategia
                    comunitaria”.
                  </Typography>
                </Grid>

                <Grid item xs={12} pt={5}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Acción sin daño
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Este enfoque parte de la premisa de que ninguna intervención
                    externa realizada por diferentes actores ya sean
                    internacionales o nacionales, privados o públicos, está
                    exenta de hacer daño a través de sus acciones. Partiendo de
                    esta premisa, CHEC grupo EPM por medio de procesos de
                    relacionamiento con sus grupos de interés, ha buscado no
                    solo reconocer y analizar los posibles daños que pueden
                    ocasionar acciones irresponsables de incursión a los
                    territorios, sino además prevenir y estar atentos para no
                    incrementar, con sus propias acciones, estos efectos y sí en
                    cambio, tratar de reducirlos. En este sentido, un proyecto
                    como Generación de Confianza, implica un análisis profundo
                    de contexto, un proceso de fortalecimiento que evite generar
                    vínculos de dependencia y un cierre responsable en las
                    comunidades, donde las acciones sin daño, los procesos de
                    recordación de la empresa, su gestión y compromiso, permitan
                    generar dinámicas sostenibles, que a futuro logren verse
                    reflejadas en las acciones técnicas.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container xs={5.5}>
                <Grid item xs={12} sx={{ height: "fit-content" }} pb={9}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Alianzas Público- Privadas
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Contar con alianzas público- privadas permite dejar
                    capacidades instaladas en las comunidades y por este medio
                    lograr hacer un cierre responsable de acciones por parte de
                    la empresa. “Este elemento es fundamental para ofrecer
                    sostenibilidad al proyecto y se constituye en uno de
                    factores diferenciadores en el perfil del Gestor Social que
                    se requiere para llevar a cabo esta iniciativa en los
                    territorios” Desde el proyecto, se requiere un equipo de
                    gestión social en capacidad de generar relaciones y
                    convenios con alcaldías, concejos municipales etc, que
                    cuente con grandes habilidades para procesos de interacción
                    con ONG y diversas instituciones, a partir de las cuales
                    logren concretarse alianzas público privadas. Este ejercicio
                    expone de forma concreta el proceso de relacionamiento a
                    partir de alianzas gana- gana.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Investigación acción participación (IAP)
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    “La investigación acción participativa es una metodología
                    que apunta a la producción de un conocimiento propositivo y
                    transformador, mediante un proceso de debate, reflexión y
                    construcción colectiva de saberes entre los diferentes
                    actores de un territorio con el fin de lograr la
                    transformación social ” “Esta metodología combina dos
                    procesos, el de conocer y el de actuar, implicando en ambos
                    a la población cuya realidad se aborda, es un proceso que
                    combina la teoría y la praxis, y que posibilita el
                    aprendizaje, la toma de conciencia crítica de la población
                    sobre su realidad, su empoderamiento, el refuerzo y
                    ampliación de sus redes sociales, su movilización colectiva
                    y su acción transformadora ”.
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
          <Grid item container justifyContent='center' py={10} xs={10}>
            <Grid item xs={10} justifyContent='center'>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='primary.dark'
                textAlign='center'
              >
                ENFOQUE <br /> PEDAGÓGICO
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                pt={5}
                textAlign='justify'
              >
                Con el fin de movilizar cambios de comportamientos en relación
                con la cultura ciudadana y de la legalidad, se tomó como base el
                enfoque de desarrollo de competencias para las acciones que
                involucran a los diferentes actores del proyecto (Empresa,
                comunidad, clientes y contratistas), y que parten desde la
                sensibilización interpersonal, la información y educación;
                involucrando el quehacer en el desarrollo de acciones e
                iniciativas empresa – comunidad, promoviendo la implementación
                de estrategias comunicativas.
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontWeight={800}
                color='primary.dark'
                textAlign='center'
                pt={10}
              >
                ¿Cómo se lleva a la práctica un proyecto como el de Generación
                de Confianza?
              </Typography>
            </Grid>
            <Grid item container xs={10} pt={5}>
              <Image src={"/imgs/metodologia2.png"} width={1324} height={495} />
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
          <Grid item container justifyContent='center'>
            <Grid item xs={8.5} py={10}>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='primary.dark'
                textAlign='center'
              >
                SEGUIMIENTO Y <br /> EVALUACIÓN
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                pt={5}
                textAlign='justify'
              >
                El proyecto “Generación de Confianza” a nivel metodológico
                articula diferentes aspectos técnicos y operativos en lo que se
                refiere a la implementación de un modelo de relacionamiento con
                grupos de interés.
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                pt={5}
                textAlign='justify'
              >
                Está diseñado a partir de cuatro fases: Acercamiento e
                Identificación, Involucramiento, Intervención, Evaluación-
                cierre-sistematización y un procedimiento transversal de
                acompañamiento e implementación de estrategias de comunicación
                para el desarrollo.
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                pt={5}
                textAlign='justify'
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
          <Grid item container justifyContent='center'>
            <Grid
              item
              container
              xs={10}
              pt={10}
              alignItems='center'
              justifyContent='space-around'
            >
              <Typography
                fontSize={82.04}
                lineHeight={"75.92px"}
                fontWeight={800}
                color='primary.main'
              >
                Fases del <br /> proyecto
              </Typography>
              <Typography
                fontWeight={800}
                // color='secondary'
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily='VAGROUNDEDSTD'
                textAlign='center'
                sx={{
                  color: slide === 0 ? "primary.main" : "secondary.light",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => {
                  setSlide(0);
                }}
              >
                Acercamiento e <br /> identificación
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily='VAGROUNDEDSTD'
                textAlign='center'
                sx={{
                  color: slide === 1 ? "primary.main" : "secondary.light",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => {
                  setSlide(1);
                }}
              >
                Involucramiento
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily='VAGROUNDEDSTD'
                textAlign='center'
                sx={{
                  color: slide === 2 ? "primary.main" : "secondary.light",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => {
                  setSlide(2);
                }}
              >
                Intervención
              </Typography>

              <Typography
                fontWeight={800}
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily='VAGROUNDEDSTD'
                textAlign='center'
                sx={{
                  color: slide === 3 ? "primary.main" : "secondary.light",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => {
                  setSlide(3);
                }}
              >
                Evaluación, cierre <br /> y sistematización
              </Typography>
            </Grid>
            <Box
              width='90%'
              height={5}
              sx={{ backgroundColor: "secondary.light" }}
              my={5}
            />
            <Stack
              direction='row'
              justifyContent='space-around'
              alignItems='center'
              width={"95%"}
            >
              <IconButton
                sx={{ p: 2, backgroundColor: "primary.main" }}
                onClick={onPrevSlide}
              >
                <Image src={"/icons/LeftIcon.png"} width={31} height={27} />
              </IconButton>

              {slide === 0 ? (
                <Acercamiento />
              ) : slide === 1 ? (
                <Involucramiento />
              ) : slide === 2 ? (
                <Intervencion />
              ) : slide === 3 ? (
                <Evaluacion />
              ) : null}

              <IconButton
                sx={{ p: 2, backgroundColor: "primary.main" }}
                onClick={onNextSlide}
              >
                <Image src={"/icons/RightIcon.png"} width={31} height={27} />
              </IconButton>
            </Stack>
          </Grid>
        </Box>
        <Grid item container xs={10} justifyContent='space-between' pt={10}>
          <Grid item container xs={5}>
            <Grid item xs={12}>
              <Typography
                fontSize={33.33}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='primary.light'
                textAlign='left'
              >
                Temas Transversales al Proceso
              </Typography>
              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Formulación y gestión de proyectos
                </Typography>
              </Stack>
              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Cultura Ciudadana y Cultura de la Legalidad
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  // textAlign='justify'
                >
                  Temas empresariales - CHEC (riesgos eléctricos, líneas de
                  atención, factura, trámites, servicios nuevos, conexiones
                  legales del servicio entre otros)
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Procesos de Réplica
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Relacionamiento basado en conocimiento mutuo
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Desarrollo Humano
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} pt={5}>
              <Image src='/imgs/GC-3.png' width={668} height={441} />
            </Grid>
          </Grid>

          <Grid item container xs={6}>
            <Grid item xs={12} sx={{ height: "fit-content" }} pb={9}>
              <Typography
                fontSize={33.33}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='primary.light'
                textAlign='left'
              >
                Aspectos a considerar
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='secondary.light'
                textAlign='justify'
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

              <Stack direction='row' spacing={2} pt={10}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Diseños metodológicos de seguimiento, intervención y
                  evaluación.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Levantamiento de línea base
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Indicadores sociales y técnicos e instrumentos para utilizar
                  en el proyecto.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Sistematización del proyecto una vez se realice cierre en los
                  territorios en donde sea ejecutado.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Análisis de impacto que describa de manera cualitativa y
                  cuantitativa, los impactos en el mediano y largo plazo de las
                  acciones generadas por el proyecto, con base en los
                  indicadores estratégicos de CHEC grupo EPM y las metas e
                  indicadores establecidos para el mismo.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='secondary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Proceso de sistematización, tanto a nivel empresarial como
                  comunitario.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.1} justifyContent='center' alignItems='center' pt={5} pb={10}>
          <Image src='/imgs/gc.png' width={284} height={165} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Metodologia;
