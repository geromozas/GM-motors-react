import { Button, TextField } from "@mui/material";
import "./Form.css";

const Form = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          marginTop: "100px",
          marginBottom: "200px",
          alignItems: "center",
        }}
      >
        <h2 className="datos">COMPLETE LOS SIGUIENTES DATOS</h2>
        <TextField
          className="inputForm"
          style={{ marginBottom: "10px" }}
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          helperText={errors.nombre}
          error={errors.nombre ? true : false}
        />
        <TextField
          className="inputForm"
          style={{ marginBottom: "10px" }}
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          helperText={errors.apellido}
          error={errors.apellido ? true : false}
        />
        <TextField
          className="inputForm"
          style={{ marginBottom: "10px" }}
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          className="inputForm"
          style={{ marginBottom: "10px" }}
          label="Repetir email"
          variant="outlined"
          name="repeatEmail"
          onChange={handleChange}
          helperText={errors.repeatEmail}
          error={errors.repeatEmail ? true : false}
        />
        <TextField
          className="inputForm"
          style={{ marginBottom: "10px" }}
          label="Celular"
          variant="outlined"
          name="celular"
          onChange={handleChange}
          helperText={errors.celular}
          error={errors.celular ? true : false}
        />
        <Button type="submit" variant="contained" className="buttonEnviar">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
