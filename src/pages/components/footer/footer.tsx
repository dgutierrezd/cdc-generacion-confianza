import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
      <Grid
        container
        pt={{xs: 10, sm: 20}}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={10.5} justifyContent='left'>
          <Typography
            color='primary'
            fontSize={{ xs: 23, sm: 23 }}
            lineHeight={{ xs: 1.5, sm: "25.6px" }}
            fontFamily='VAGROUNDEDSTD'
            fontWeight={800}
            // pt={10}
            // paddingLeft={13.5}
          >
            Generación de Confianza
          </Typography>
        </Grid>
        <Grid item container xs={10.5} justifyContent='space-between' pt={{xs: 5, sm: 10}}>
          <Grid item xs={12} sm={2.9}>
            <Box>
              <Typography
                color='primary'
                fontSize={{ xs: 18, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "25.6px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                Links
              </Typography>
              <Stack pt={2.75}>
                <Box
                  display='flex'
                  sx={{ flexDirection: "row", marginLeft: -1.5 }}
                >
                  <ArrowForwardRoundedIcon
                    sx={{ width: 40, height: 20 }}
                    color='primary'
                  />
                  <Link
                    href={"/generacion-confianza"}
                    fontWeight={800}
                    color='secondary'
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
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
                  display='flex'
                  sx={{ flexDirection: "row", marginLeft: -1.5 }}
                  pt={2.75}
                >
                  <ArrowForwardRoundedIcon
                    sx={{ width: 40, height: 20 }}
                    color='primary'
                  />
                  <Link
                    href={"/metodologia"}
                    fontWeight={800}
                    color='secondary'
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
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
                  display='flex'
                  sx={{ flexDirection: "row", marginLeft: -1.5 }}
                  pt={2.75}
                >
                  <ArrowForwardRoundedIcon
                    sx={{ width: 40, height: 20 }}
                    color='primary'
                  />
                  <Link
                    href={"/evolucion-resultados"}
                    fontWeight={800}
                    color='secondary'
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
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
                  display='flex'
                  sx={{ flexDirection: "row", marginLeft: -1.5 }}
                  pt={2.75}
                >
                  <ArrowForwardRoundedIcon
                    sx={{ width: 40, height: 20 }}
                    color='primary'
                  />
                  <Link
                    href={"/medios"}
                    fontWeight={800}
                    color='secondary'
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
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
          </Grid>

          <Grid item xs={12} sm={3} pt={{ xs: 5, sm: 0 }}>
            <Box>
              <Typography
                color='primary'
                fontSize={{ xs: 18, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                Consultas Generales
              </Typography>
              <Stack pt={2.75}>
                <Link
                  href={"mailto:info@generaciondeconfianza.com.co"}
                  fontWeight={800}
                  color='secondary'
                  fontSize={{ xs: 16, sm: 21.19 }}
                  lineHeight={{ xs: 1.5, sm: "23.5px" }}
                  fontFamily='Open Sans'
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  info@generaciondeconfianza.com.co
                </Link>
              </Stack>
              <Typography
                color='primary'
                fontSize={{ xs: 18, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
                pt={{ xs: 5, sm: 8 }}
              >
                Teléfono
              </Typography>
              <Stack pt={2.75}>
                <Typography
                  color='secondary'
                  fontSize={{ xs: 16, sm: 21.19 }}
                  lineHeight={{ xs: 1.5, sm: "23.5px" }}
                  fontFamily='Open Sans'
                  fontWeight={800}
                >
                  +57 312 286 0613
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2.5} pt={{ xs: 5, sm: 0 }}>
            <Box>
              <Typography
                color='primary'
                fontSize={{ xs: 18, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                Dirección
              </Typography>
              <Stack pt={2.75}>
                <Typography
                  color='secondary'
                  fontWeight={800}
                  fontSize={{ xs: 16, sm: 21.19 }}
                  lineHeight={{ xs: 1.5, sm: "23.5px" }}
                  fontFamily='Open Sans'
                >
                  Estación Uribe
                </Typography>
                <Box display='flex' pt={2.75}>
                  <Typography
                    color='secondary'
                    fontWeight={800}
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
                  >
                    Km 1 Autopista del Café.
                  </Typography>
                </Box>
                <Box display='flex' pt={2.75}>
                  <Typography
                    color='secondary'
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontWeight={800}
                    fontFamily='Open Sans'
                  >
                    Manizales, Caldas
                  </Typography>
                </Box>
                <Box display='flex' pt={2.75}>
                  <Typography
                    color='secondary'
                    fontWeight={800}
                    fontSize={{ xs: 16, sm: 21.19 }}
                    lineHeight={{ xs: 1.5, sm: "23.5px" }}
                    fontFamily='Open Sans'
                  >
                    Colombia.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2} pt={{ xs: 5, sm: 0 }}>
            <Box>
              <Typography
                color='primary'
                fontSize={{ xs: 18, sm: 23 }}
                lineHeight={{ xs: 1.5, sm: "23.5px" }}
                fontFamily='VAGROUNDEDSTD'
                fontWeight={800}
              >
                Una estrategia de
              </Typography>
              <Stack pt={2.75}>
                <Typography
                  color='secondary'
                  fontSize={{ xs: 16, sm: 21.19 }}
                  lineHeight={{ xs: 1.5, sm: "23.5px" }}
                  fontWeight={800}
                  fontFamily='Open Sans'
                >
                  Chec - grupo EPM
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={10.5} pt={{ xs: 5, sm: 15 }}>
          <Box
            display='flex'
            sx={{ flexDirection: "row", marginLeft: -1.5 }}
            // pt={15}
            // paddingLeft={13.5}
          >
            <ArrowForwardRoundedIcon
              sx={{ width: 40, height: 20 }}
              color='primary'
            />
            <Typography
              color='secondary'
              fontSize={{ xs: 16, sm: 21.19 }}
              lineHeight={{ xs: 1.5, sm: "23.5px" }}
              fontFamily='Open Sans'
              fontWeight={800}
            >
              Política de Privacidad
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          justifyContent='space-between'
          pt={{ xs: 10, sm: 28.25 }}
          pb={6}
        >
          <Grid item xs={6} sm={10}>
            <Link
              href='https://www.instagram.com/atmosagenciadigital/'
              target='_blank'
              color='secondary'
              fontSize={21.19}
              lineHeight={"23.5px"}
              fontWeight={800}
              fontFamily='Open Sans'
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Design by Atmos Agencia Digital
            </Link>
          </Grid>

          <Grid item xs={4} sm={1}>
            <Link href='https://www.chec.com.co/' target='_blank'>
              <Image
                alt='Chec logo'
                src={"/imgs/chec-logo.png"}
                width={88}
                height={83}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
