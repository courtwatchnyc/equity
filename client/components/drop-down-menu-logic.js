import React from 'react';
import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const NativeSelectsWithLogic = props => {
    const {dropDownOptions, label} = props
    const valuesForDropDown = Array.isArray(dropDownOptions) ? dropDownOptions : [10, 20, 30]
  const [state, setState] = React.useState({
    age: '',
    labelWidth: 0,
  });
  const inputLabelRef = React.useRef(null);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          {
              valuesForDropDown.map((val, idx) => {
                return <option key={val} value={valuesForDropDown[idx]}>{val}</option>
              })
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default NativeSelectsWithLogic;