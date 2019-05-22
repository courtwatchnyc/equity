import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";


const RadioButton = props => {
    const { options } = props
    const [selectValue, setSelectValue] = useState("")
    const handleChange = () => (event) => {
        console.log("handleChange");
        setSelectValue(event.target.value);
    };

    return (
    <React.Fragment>
        <Grid item>
            <FormControl>
                <FormLabel>Duration of the Case</FormLabel>
                <RadioGroup
                    style={{ flexDirection: "row" }}
                    value={selectValue}
                    onChange={handleChange("selectValue")}
                >
                {
                    options.map((val, idx) => {
                        return (
                            <FormControlLabel
                                key={val}
                                control={<Radio />}
                                label={val}
                                value={(++idx).toString()}
                            />
                        )
                    })
                }
                </RadioGroup>
            </FormControl>
        </Grid>
    </React.Fragment>

    )
}

export default RadioButton
