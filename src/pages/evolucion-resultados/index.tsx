import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { app, database } from "../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "evolucion-resultados");

const EvolucionResultados = () => {
  const [content, setContent] = useState<any>([]);

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
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  return (
    <Box>
      <Navbar admin={false} />
      <Grid
        container
        // width='100%'
        pt={10}
        justifyContent="center"
        alignItems="center"
        paddingBottom={14.75}
        display="flex"
        sx={{
          backgroundImage: `url(${"/imgs/Fondo-EYR.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12} sm={8}>
          <Box display="flex" sx={{ flexDirection: "row" }}>
            {content[0]?.titulo ? (
              <Typography
                color="secondary"
                fontSize={{ xs: 30, sm: 56.47 }}
                lineHeight={{ xs: 1.2, sm: "57.3px" }}
                fontFamily="VAGROUNDEDSTD"
                fontWeight={800}
                paddingRight={2}
              >
                {`${content[0]?.titulo?.split(" ")[0]} ${
                  content[0]?.titulo?.split(" ")[1]
                }`}
              </Typography>
            ) : null}
            <Typography
              color="primary"
              fontSize={{ xs: 30, sm: 56.47 }}
              lineHeight={{ xs: 1.2, sm: "57.3px" }}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
            >
              {content[0]?.titulo?.split(" ")[2]}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Typography
            color="primary"
            fontSize={{ xs: 20, sm: 23 }}
            fontFamily="VAGROUNDEDSTD"
            fontWeight={800}
            pt={6}
          >
            {content[0]?.subtitulo}
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8}>
          {content[0]?.logros?.map((logro: string, index: number) => (
            <Typography
              color="secondary"
              fontSize={{ xs: 16, sm: 23 }}
              fontFamily="Open Sans"
              pt={5}
              align="justify"
              key={index}
            >
              {`- ${logro}`}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        pt={8}
        pb={7}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={10}>
            <Typography
              color="secondary"
              fontSize={{ xs: 30, sm: 56.47 }}
              lineHeight={{ xs: 1.2, sm: "57.3px" }}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
            >
              DATOS ANUALES DEL PROYECTO
            </Typography>
            <Typography
              color="secondary"
              fontSize={{ xs: 30, sm: 56.47 }}
              lineHeight={{ xs: 1.2, sm: "57.3px" }}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
            >
              GENERACIÓN DE CONFIANZA
            </Typography>
            <Image
              style={{ marginTop: -80 }}
              alt="tabla"
              src={"/imgs/Tablaeyr.png"}
              width={1072}
              height={880}
            ></Image>
            <Typography
              color="secondary"
              fontSize={{ xs: 16, sm: 23 }}
              fontFamily="VAGROUNDEDSTD"
              fontWeight={800}
              pt={7}
            >
              {content[0]?.observacionAnual}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={6.8}>
            <Typography
              color="#003c1c"
              fontSize={{ xs: 16, sm: 23 }}
              fontFamily="Open Sans"
              pt={4}
              // px={52.5}
              align="justify"
            >
              {content[0]?.textoObservacion}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default EvolucionResultados;
