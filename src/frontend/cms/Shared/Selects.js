import React from "react";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";

const styles = theme => ({
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap"
  // },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

const CategorySelect = ({classes, handleChange,Category }) => {
  return (
    // <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">カテゴリ</InputLabel>
        <Select
          value={Category}
          onChange={handleChange}
          input={<Input name="age" id="age-helper" />}
        >
          <MenuItem value="Original">Original</MenuItem>
          <MenuItem value="Blend">Blend</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Premium">Premium</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <FormHelperText>カテゴリーを選択</FormHelperText>
      </FormControl>
    // </form>
  );
};

export default withStyles(styles)(CategorySelect);
