import { Button, Container, Stack, TextField, Typography } from "@mui/material";
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

const dbInstance = collection(database, "generacion-confianza");

const generacionRef = doc(
  database,
  "generacion-confianza",
  "NUtRQIRLG34GrtsvsMqf"
);

const GeneracionConfianza = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getGeneracionConfianza();
  }, []);

  const getGeneracionConfianza = () => {
    getDocs(dbInstance).then((data) => {
      setContent(data.docs[0].data());
      console.log(data.docs[0].data());
    });
  };

  const onSave = () => {
    updateDoc(generacionRef, content).then(() =>
      Swal.fire("Guardado!", "Se ha guardado exitosamente", "success")
    );
  };

  return (
    <>
      <Navbar admin={true} />
      <Container>
        <Stack spacing={5} style={{ marginTop: 10, height: 500 }}>
          <Typography variant="h2">Generacion de Confianza</Typography>
          <div>
            <Typography variant="h4">Titulo 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.titulo1}
              onChange={(e) =>
                setContent({ ...content, titulo1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.texto1}
              onChange={(e) =>
                setContent({ ...content, texto1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Titulo fundamentos</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloFundamentos}
              onChange={(e) =>
                setContent({ ...content, tituloFundamentos: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto fundamentos</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoFundamentos}
              onChange={(e) =>
                setContent({ ...content, textoFundamentos: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Frase fundamentos</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.fundamentosHelper}
              onChange={(e) =>
                setContent({ ...content, fundamentosHelper: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo Fundamentos 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloOrg1}
              onChange={(e) =>
                setContent({ ...content, tituloOrg1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto Fundamentos 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoOrg1}
              onChange={(e) =>
                setContent({ ...content, textoOrg1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo Fundamentos 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloOrg2}
              onChange={(e) =>
                setContent({ ...content, tituloOrg2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto Fundamentos 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoOrg2}
              onChange={(e) =>
                setContent({ ...content, textoOrg2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Principio 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloPrincipio1}
              onChange={(e) =>
                setContent({ ...content, tituloPrincipio1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion Principio 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoPrincipio1}
              onChange={(e) =>
                setContent({ ...content, textoPrincipio1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Principio 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloPrincipio2}
              onChange={(e) =>
                setContent({ ...content, tituloPrincipio2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion Principio 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoPrincipio2}
              onChange={(e) =>
                setContent({ ...content, textoPrincipio2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Principio 3</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloPrincipio3}
              onChange={(e) =>
                setContent({ ...content, tituloPrincipio3: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion Principio 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoPrincipio3}
              onChange={(e) =>
                setContent({ ...content, textoPrincipio3: e.target.value })
              }
            />
          </div>
          <Button variant="contained" color="success" onClick={() => onSave()}>
            Guardar
          </Button>
          <div style={{ marginTop: 30, color: "white" }}>.</div>
        </Stack>
      </Container>
    </>
  );
};

export default GeneracionConfianza;
