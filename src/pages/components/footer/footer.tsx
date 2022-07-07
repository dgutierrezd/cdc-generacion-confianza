import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
      <Typography
        color="primary"
        fontSize={23}
        lineHeight={"25.6px"}
        fontFamily="VAGROUNDEDSTD"
        fontWeight={800}
        pt={10}
        paddingLeft={13.5}
      >
        Generación de Confianza
      </Typography>
      <Grid
        container
        // width='100%'
        pt={10}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        paddingLeft={13.5}
        paddingRight={25.5}
      >
        <Box>
          <Typography
            color="primary"
            fontSize={23}
            lineHeight={"25.6px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
          >
            Links
          </Typography>
          <Stack pt={2.75}>
            <Box display="flex" sx={{ flexDirection: "row", marginLeft: -1.5 }}>
              <ArrowForwardRoundedIcon
                sx={{ width: 40, height: 20 }}
                color="primary"
              />
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Generación de Confianza
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{ flexDirection: "row", marginLeft: -1.5 }}
              pt={2.75}
            >
              <ArrowForwardRoundedIcon
                sx={{ width: 40, height: 20 }}
                color="primary"
              />
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Metodología
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{ flexDirection: "row", marginLeft: -1.5 }}
              pt={2.75}
            >
              <ArrowForwardRoundedIcon
                sx={{ width: 40, height: 20 }}
                color="primary"
              />
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Evolución y Resultados
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{ flexDirection: "row", marginLeft: -1.5 }}
              pt={2.75}
            >
              <ArrowForwardRoundedIcon
                sx={{ width: 40, height: 20 }}
                color="primary"
              />
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Medios
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography
            color="primary"
            fontSize={23}
            lineHeight={"25.6px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
          >
            Consultas Generales
          </Typography>
          <Stack pt={2.75}>
            <Typography
              color="secondary"
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
            >
              info@generaciondeconfianza.com.co
            </Typography>
          </Stack>
          <Typography
            color="primary"
            fontSize={23}
            lineHeight={"25.6px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pt={8}
          >
            Teléfono
          </Typography>
          <Stack pt={2.75}>
            <Typography
              color="secondary"
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
            >
              +57 312 286 0613
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography
            color="primary"
            fontSize={23}
            lineHeight={"25.6px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
          >
            Dirección
          </Typography>
          <Stack pt={2.75}>
            <Typography
              color="secondary"
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
            >
              Estación Uribe
            </Typography>
            <Box display="flex" pt={2.75}>
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Km 1 Autopista del Café.
              </Typography>
            </Box>
            <Box display="flex" pt={2.75}>
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Manizales, Caldas
              </Typography>
            </Box>
            <Box display="flex" pt={2.75}>
              <Typography
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
              >
                Colombia.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography
            color="primary"
            fontSize={23}
            lineHeight={"25.6px"}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
          >
            Una estrategia de
          </Typography>
          <Stack pt={2.75}>
            <Typography
              color="secondary"
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
            >
              Chec - grupo EPM
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Box
        display="flex"
        sx={{ flexDirection: "row", marginLeft: -1.5 }}
        pt={15}
        paddingLeft={13.5}
      >
        <ArrowForwardRoundedIcon
          sx={{ width: 40, height: 20 }}
          color="primary"
        />
        <Typography
          color="secondary"
          fontSize={21.19}
          lineHeight={"23.5px"}
          fontFamily="Open Sans"
        >
          Política de Privacidad
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: "row" }}
        pt={28.25}
        paddingLeft={13.5}
        paddingBottom={6}
      >
        <Typography
          color="secondary"
          fontSize={21.19}
          lineHeight={"23.5px"}
          fontFamily="Open Sans"
        >
          Design by Atmos Agencia Digital
        </Typography>
      </Box>
    </Box>
  );
};