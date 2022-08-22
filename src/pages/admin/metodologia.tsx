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

const dbInstance = collection(database, "metodologia");

const homeRef = doc(database, "metodologia", "TvPToOMTAjVp9YoSbacE");

const Metodologia = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getMetodologia();
  }, []);

  const getMetodologia = () => {
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
          <Typography variant="h2">Metodologia</Typography>
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
            <Typography variant="h4">Texto 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.texto2}
              onChange={(e) =>
                setContent({ ...content, texto2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Enfoque sociocultural</Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueDescripcion}
              onChange={(e) =>
                setContent({ ...content, enfoqueDescripcion: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo enfoque 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueSubtitulo1}
              onChange={(e) =>
                setContent({ ...content, enfoqueSubtitulo1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion enfoque 1</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueDescripcion1}
              onChange={(e) =>
                setContent({ ...content, enfoqueDescripcion1: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo enfoque 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueSubtitulo2}
              onChange={(e) =>
                setContent({ ...content, enfoqueSubtitulo2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion enfoque 2</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueDescripcion2}
              onChange={(e) =>
                setContent({ ...content, enfoqueDescripcion2: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo enfoque 3</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueSubtitulo3}
              onChange={(e) =>
                setContent({ ...content, enfoqueSubtitulo3: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion enfoque 3</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueDescripcion3}
              onChange={(e) =>
                setContent({ ...content, enfoqueDescripcion3: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Subtitulo enfoque 4</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueSubtitulo4}
              onChange={(e) =>
                setContent({ ...content, enfoqueSubtitulo4: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Descripcion enfoque 4</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoqueDescripcion4}
              onChange={(e) =>
                setContent({ ...content, enfoqueDescripcion4: e.target.value })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Enfoque pedagógico</Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.enfoquePedagogicoDescripcion}
              onChange={(e) =>
                setContent({
                  ...content,
                  enfoquePedagogicoDescripcion: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Seguimiento y evaluacion</Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.seguimientoEvaluacionDescripcion}
              onChange={(e) =>
                setContent({
                  ...content,
                  seguimientoEvaluacionDescripcion: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Fases del proyecto</Typography>
          </div>
          <div>
            <Typography variant="h4">
              - Acercamiento e Identificacion
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.acercamientoIdentificacionDesc}
              onChange={(e) =>
                setContent({
                  ...content,
                  acercamientoIdentificacionDesc: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Frase</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.acercamientoIdentificacionFrase}
              onChange={(e) =>
                setContent({
                  ...content,
                  acercamientoIdentificacionFrase: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">- Involucramiento</Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.involucramientoDesc}
              onChange={(e) =>
                setContent({
                  ...content,
                  involucramientoDesc: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Frase</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.involucramientoFrase}
              onChange={(e) =>
                setContent({
                  ...content,
                  involucramientoFrase: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">- Intervencion</Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.intervencionDesc}
              onChange={(e) =>
                setContent({
                  ...content,
                  intervencionDesc: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Frase</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.intervencionFrase}
              onChange={(e) =>
                setContent({
                  ...content,
                  intervencionFrase: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">
              - Evaluacion, cierre y sistematizacion
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Descripcion</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.evaluacionDesc}
              onChange={(e) =>
                setContent({
                  ...content,
                  evaluacionDesc: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Typography variant="h4">Frase</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              maxRows={4}
              value={content?.evaluacionFrase}
              onChange={(e) =>
                setContent({
                  ...content,
                  evaluacionFrase: e.target.value,
                })
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

export default Metodologia;
