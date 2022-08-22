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

const dbInstance = collection(database, "medios");

const homeRef = doc(database, "medios", "6HuA45jKQM2mqhnTk08F");

const Medios = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getMedios();
  }, []);

  const getMedios = () => {
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
          <Typography variant="h2">Medios</Typography>
          <div>
            <Typography variant="h4">Texto principal</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.textoPrincipal}
              onChange={(e) =>
                setContent({ ...content, textoPrincipal: e.target.value })
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

export default Medios;
