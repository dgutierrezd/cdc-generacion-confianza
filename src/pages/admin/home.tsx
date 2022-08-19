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

const dbInstance = collection(database, "home");

const homeRef = doc(database, "home", "pouHq7KkMZY82J7CkaST");

const Home = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getHome();
  }, []);

  const getHome = () => {
    getDocs(dbInstance).then((data) => {
      setContent(data.docs[0].data());
    });
  };

  const onSave = () => {
    updateDoc(homeRef, content).then(() =>
      Swal.fire("Guardado!", "Se ha guardado exitosamente", "success")
    );
  };

  return (
    <>
      <Navbar admin={true} />
      <Container>
        <Stack spacing={5} style={{ marginTop: 10, height: 500 }}>
          <Typography variant="h2">Home</Typography>
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
            <Typography variant="h4">Titulo 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.titulo2}
              onChange={(e) =>
                setContent({ ...content, titulo2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Titulo 3</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.titulo3}
              onChange={(e) =>
                setContent({ ...content, titulo3: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Titulo Bienvenida</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloBienvenida}
              onChange={(e) =>
                setContent({ ...content, tituloBienvenida: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto Bienvenida</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoBienvenida}
              onChange={(e) =>
                setContent({ ...content, textoBienvenida: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Titulo Introducción</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.tituloComenzar}
              onChange={(e) =>
                setContent({ ...content, tituloComenzar: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Texto Introducción</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoComenzar}
              onChange={(e) =>
                setContent({ ...content, textoComenzar: e.target.value })
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

export default Home;
