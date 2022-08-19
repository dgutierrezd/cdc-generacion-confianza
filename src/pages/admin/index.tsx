import { Alert, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorFields, setErrorFields] = useState(false);

  const onSubmit = () => {
    if (username !== "admin_chec" || password !== "chec2022*") {
      setErrorFields(true);
    } else {
      setErrorFields(false);
      router.push("admin/home");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Iniciar sesión como Admin</Typography>
      <div style={{ height: 300, marginTop: 10 }}>
        {errorFields ? (
          <Alert severity="error">
            El nombre de usuario o la contraseña no son correctos
          </Alert>
        ) : null}
        <TextField
          id="outlined-basic"
          label="Usuario"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 5 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 5 }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={onSubmit}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Admin;
