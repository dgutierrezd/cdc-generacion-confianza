import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Intervencion = () => {
  return (
    <Grid item container justifyContent='center' xs={12}>
      <Grid item xs={12}>
        <Typography
          fontSize={56.2}
          lineHeight={"52.01px"}
          fontWeight={800}
          color='secondary.light'
          textAlign='center'
        >
          Intervención
        </Typography>
      </Grid>
      <Grid item container xs={11} justifyContent='space-between'>
        <Grid item xs={6.5} justifyContent='center'>
          <Typography
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Con el fin de implementar el desarrollo de las diferentes
            iniciativas sociales, educativas, productivas y culturales, como
            estrategias para el acercamiento y la generación de confianza, a
            partir de esta fase, se busca establecer una estrategia agrupadora
            que de manera coordinada e incluyente, permita consolidar la
            generación de alianzas y la administración transparente y eficiente
            de los recursos puestos al servicio de las mismas. Las acciones
            necesarias para consolidar esta fase se describen a continuación:
          </Typography>
          <Box
            sx={{
              backgroundColor: "background.default",
              borderRadius: 5,
              mt: 10,
            }}
          >
            <Typography
              fontSize={25}
              lineHeight={"33.96px"}
              fontFamily='Open Sans'
              color='secondary.light'
              p={5}
              textAlign='justify'
            >
              Empresarialmente un proceso de intervención comunitario que parte
              de elementos como la identificación y el acercamiento, implica un
              reconocimiento real de las necesidades, expectativas y búsquedas
              culturales, políticas, filosóficas y estéticas de las poblaciones.
              <br /> <br />
              En este sentido el proyecto generación de confianza,, transforma
              el proceso de intervención, en tanto parte de la comunidad y desde
              allí, logra establecer rutas coherentes a las particularidades de
              los diversos contextos y en esta lógica, logra viabilizar acciones
              empresariales a partir de alianzas gana-gana.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={5} justifyContent='center'>
          <Typography
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Consolidar Alianzas:
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Analizar riesgos y oportunidades con actores claves para la
              generación de alianzas.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Diseñar y validar figuras para el desarrollo de alianzas.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Implementar figura para el desarrollo de las alianzas.
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Formalizar alianzas.
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Construir y articular iniciativas de Intervención comercial,
              técnica y social con aliados.
            </Typography>
          </Stack>

          <Typography
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Elaborar plan de comunicación para etapa de intervención:
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Analizar necesidades comunicativas y capacidades instaladas en
              actores claves.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Diseñar plan de comunicación para el desarrollo de la fase 3.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Validar y aprobar plan de comunicación para el desarrollo.
            </Typography>
          </Stack>
          <Typography
            fontSize={25}
            lineHeight={"33.96px"}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Lanzamiento:
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Socializar estrategias y alianzas con actores claves del
              territorio.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 40, pt: 0.5 }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={25}
              lineHeight={"50px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Realizar el despliegue de la estrategia. (CHEC y actores claves).
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={5.5} justifyContent='center'></Grid> */}
      </Grid>
    </Grid>
  );
};

export default Intervencion;
