import React from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputer: {
    background: "white"
  }
}));

export default function ToDoForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={props.handleSubmit}>
      <div className={classes.input}>
        <Input
          placeholder="Add ToDo"
          inputProps={{
            "aria-label": "description"
          }}
          value={props.newItem}
          onChange={props.handleChange}
        />
        <Button type="submit" variant="contained">
          Add Task
        </Button>
        <Button
          className="clear"
          variant="contained"
          color="primary"
          onClick={props.clearCompleted}
        >
          Clear Completed
        </Button>
      </div>
    </form>
  );
}
