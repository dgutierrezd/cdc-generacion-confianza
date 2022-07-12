import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Evaluacion = () => {
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
          Evaluacion, Cierre y Finalización
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
            En esta etapa se hace cierre responsable de las iniciativas y
            proyectos establecidos de manera conjunta entre empresa y comunidad,
            se realiza la última medición de impacto , para identificar cambios
            de comportamiento en el marco de la cultura de la legalidad,
            reducción de los niveles de reincidencia en clientes residenciales,
            impactos del proyecto en las organizaciones y el territorio, y se
            establecen las acciones de información y comunicación con los
            actores involucrados sobre los resultados del proyecto.
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
            Seguimiento y Monitoreo:
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
              Establecer estándares, criterios e indicadores de seguimiento y
              monitoreo.
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
              Observación y medición del desempeño y ejecución del proyecto.
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
              Definir e implementar acciones correctivas.
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
              Elaboración de informes.
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
            Evaluación:
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
              Establecer estándares, criterios e indicadores de evaluación.
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
              Revisión y análisis de información de indicadores.
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
              Consolidación de información
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
              Elaboración de informe final del proyecto.
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
            Cierre:
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
              Validación de resultados
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
              Socialización de resultados
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
              Retroalimentación
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={5.5} justifyContent='center'></Grid> */}
      </Grid>
    </Grid>
  );
};

export default Evaluacion;
