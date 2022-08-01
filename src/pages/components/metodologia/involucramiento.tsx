import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Involucramiento = () => {
  return (
    <Grid item container justifyContent='center' xs={12}>
      <Grid item xs={12}>
        <Typography
          fontSize={{ xs: 30, sm: 56.2 }}
          lineHeight={{ xs: 1.2, sm: "52.01px" }}
          fontWeight={800}
          color='secondary.light'
          textAlign='center'
        >
          Involucramiento
        </Typography>
      </Grid>
      <Grid item container xs={11} justifyContent='space-between'>
        <Grid item xs={12} sm={6.5} justifyContent='center'>
          <Typography
            fontSize={{ xs: 16, sm: 25 }}
            lineHeight={{ xs: 1.5, sm: "32.17px" }}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            En esta fase se busca dar respuesta rápida a partir de capacidades
            ya instaladas, a la generación de expectativas creadas por el
            proceso de acercamiento realizado por la empresa (fase 1). Lo
            anterior, con el fin de validar las intenciones de la empresa frente
            al involucramiento y generar confianza.
            <br /> <br />
            En la fase de Involucramiento, se implementan desde el nivel
            empresarial una serie de ofertas y recursos iniciales para el apoyo
            a acciones o iniciativas comunitarias que se vengan desarrollando en
            el territorio y que logren conectar intereses empresariales,
            organizacionales y sociales en relación con la cultura de la
            legalidad. Las acciones necesarias para consolidar esta fase se
            presentan a continuación:
          </Typography>
          <Box
            sx={{
              backgroundColor: "background.default",
              borderRadius: 5,
              mt: 10,
            }}
          >
            <Typography
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "32.17px" }}
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

        <Grid item xs={12} sm={5} justifyContent='center'>
          <Typography
            fontSize={{ xs: 16, sm: 25 }}
            lineHeight={{ xs: 1.5, sm: "32.17px" }}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Validar propuesta para proceso de involucramiento
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Socializar propuesta con los encargados de validar el proyecto.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Realizar ajustes y mejoras.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Elaborar acta de acuerdo, como aceptación de la participación en
              el proyecto, por parte de las instituciones y/o actores presentes
              en el territorio y de la empresa CHEC.
            </Typography>
          </Stack>

          <Typography
            fontSize={{ xs: 16, sm: 25 }}
            lineHeight={{ xs: 1.5, sm: "32.17px" }}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Elaborar plan de comunicación para etapa de involucramiento
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Analizar necesidades comunicativas y capacidades instaladas en el
              territorio
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Diseñar plan de comunicaciones para el desarrollo de la fase de
              involucramiento.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Validar y aprobar plan de comunicación para el desarrollo del
              proyecto
            </Typography>
          </Stack>
          <Typography
            fontSize={{ xs: 16, sm: 25 }}
            lineHeight={{ xs: 1.5, sm: "32.17px" }}
            fontFamily='Open Sans'
            color='secondary.light'
            pt={5}
            textAlign='justify'
          >
            Implementar estrategia de involucramiento:
          </Typography>

          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Socializar con actores claves los alcances del apoyo.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: { xs: 30, sm: 40 }, pt: { xs: 0, sm: 0.5 } }}
              color='secondary'
            />
            <Typography
              color='primary.main'
              fontSize={{ xs: 16, sm: 25 }}
              lineHeight={{ xs: 1.5, sm: "50px" }}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              Implementar estrategias y acciones programadas.
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={5.5} justifyContent='center'></Grid> */}
      </Grid>
    </Grid>
  );
};

export default Involucramiento;
