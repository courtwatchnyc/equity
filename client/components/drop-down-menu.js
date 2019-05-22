import React from 'react';
import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const NativeSelects = props => {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
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
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
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
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default NativeSelects;