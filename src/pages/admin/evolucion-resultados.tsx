import {
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { app, database } from "../../../firebaseConfig";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";

const dbInstance = collection(database, "evolucion-resultados");

const docRef = doc(database, "evolucion-resultados", "UazI6UMuJcNwtfaDP4IB");

const EvolucionResultados = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getEvolucionResultados();
  }, []);

  const getEvolucionResultados = () => {
    getDocs(dbInstance).then((data) => {
      setContent(data.docs[0].data());
      console.log(data.docs[0].data());
    });
  };

  const onSave = () => {
    updateDoc(docRef, content).then(() =>
      Swal.fire("Guardado!", "Se ha guardado exitosamente", "success")
    );
  };

  return (
    <>
      <Navbar admin={true} />
      <Container>
        <Stack spacing={5} style={{ marginTop: 10, height: 500 }}>
          <Typography variant="h2">Evolucion y Resultados</Typography>
          <div>
            <Typography variant="h4">Titulo</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.titulo}
              onChange={(e) =>
                setContent({ ...content, titulo: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.subtitulo}
              onChange={(e) =>
                setContent({ ...content, subtitulo: e.target.value })
              }
            />
          </div>
          <Stack spacing={2}>
            <Typography variant="h4">Logros</Typography>
            {content?.logros?.map((logro: string, index: number) => (
              <Grid container spacing={1} key={index}>
                <Grid item md={11}>
                  <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    fullWidth
                    maxRows={4}
                    value={content?.logros[index]}
                    onChange={(e) => {
                      let logrosTemp = content?.logros;
                      logrosTemp[index] = e.target.value;

                      setContent({ ...content, logros: logrosTemp });
                    }}
                  />
                </Grid>
                <Grid
                  item
                  md={1}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      let logrosTemp = content?.logros.filter(
                        (item: string) => item !== logro
                      );

                      setContent({ ...content, logros: logrosTemp });
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="info"
              onClick={() => {
                let logrosTemp = content?.logros;
                logrosTemp.push("");

                setContent({ ...content, logros: logrosTemp });
              }}
            >
              +
            </Button>
            <div>
              <Typography variant="h4">Observacion Anual</Typography>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                fullWidth
                maxRows={4}
                value={content?.observacionAnual}
                onChange={(e) =>
                  setContent({ ...content, observacionAnual: e.target.value })
                }
              />
            </div>
            <div>
              <Typography variant="h4">Texto observacion anual</Typography>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                fullWidth
                maxRows={4}
                value={content?.textoObservacion}
                onChange={(e) =>
                  setContent({ ...content, textoObservacion: e.target.value })
                }
              />
            </div>
          </Stack>
          <Button variant="contained" color="success" onClick={() => onSave()}>
            Guardar
          </Button>
          <div style={{ marginTop: 30, color: "white" }}>.</div>
        </Stack>
      </Container>
    </>
  );
};

export default EvolucionResultados;
