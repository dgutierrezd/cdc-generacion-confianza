import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

const Footer = () => {
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
              <Link
                href={"/generacion-confianza"}
                fontWeight={800}
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Generación de Confianza
              </Link>
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
              <Link
                href={"/metodologia"}
                fontWeight={800}
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Metodología
              </Link>
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
              <Link
                href={"/evolucion-resultados"}
                fontWeight={800}
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Evolución y Resultados
              </Link>
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
              <Link
                href={"/medios"}
                fontWeight={800}
                color="secondary"
                fontSize={21.19}
                lineHeight={"23.5px"}
                fontFamily="Open Sans"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Medios
              </Link>
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
            <Link
              href={"mailto:info@generaciondeconfianza.com.co"}
              fontWeight={800}
              color="secondary"
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {/* info@generaciondeconfianza.com.co */}
            </Link>
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
              fontWeight={800}
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
              fontWeight={800}
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontFamily="Open Sans"
            >
              Estación Uribe
            </Typography>
            <Box display="flex" pt={2.75}>
              <Typography
                color="secondary"
                fontWeight={800}
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
                fontWeight={800}
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
                fontWeight={800}
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
              fontWeight={800}
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
          fontWeight={800}
        >
          Política de Privacidad
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: "row", justifyContent: "space-between" }}
        pt={28.25}
        paddingLeft={13.5}
        pr={5}
        paddingBottom={6}
        paddingRight={25.5}
      >
        <Link
          href="https://www.instagram.com/atmosagenciadigital/"
          target="_blank"
          color="secondary"
          fontSize={21.19}
          lineHeight={"23.5px"}
          fontWeight={800}
          fontFamily="Open Sans"
          sx={{
            textDecoration: "none",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Design by Atmos Agencia Digital
        </Link>
        <Link href="https://www.chec.com.co/" target="_blank">
          <Image
            alt="Chec logo"
            src={"/imgs/chec-logo.png"}
            width={88}
            height={83}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
