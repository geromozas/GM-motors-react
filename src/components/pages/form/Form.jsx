import { Button, TextField } from "@mui/material";

const Form = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ margin: "20px", display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Nombre"
          variant="standard"
          name="nombre"
          onChange={handleChange}
          helperText={errors.nombre}
          error={errors.nombre ? true : false}
        />
        <TextField
          label="Apellido"
          variant="standard"
          name="apellido"
          onChange={handleChange}
          helperText={errors.apellido}
          error={errors.apellido ? true : false}
        />
        <TextField
          label="Email"
          variant="standard"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          label="Repetir email"
          variant="standard"
          name="repeatEmail"
          onChange={handleChange}
          helperText={errors.repeatEmail}
          error={errors.repeatEmail ? true : false}
        />
        <TextField
          label="Celular"
          variant="standard"
          name="celular"
          onChange={handleChange}
          helperText={errors.celular}
          error={errors.celular ? true : false}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
