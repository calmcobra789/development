import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




export default function TypeFilter(props) {
  const item = props.item;
  console.log(item);

  return (
    
    <div className = "TypeFilter">
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.type}
                label="Type"
                // onChange={props.handleChange(props.type)}
            >
                <MenuItem value={"Ring"}>Ring</MenuItem>
                <MenuItem value={"Earrings"}>Earrings</MenuItem>
                <MenuItem value={"Necklace"}>Necklace</MenuItem>
                <MenuItem value={"Any"}>Any</MenuItem>
            </Select>
            </FormControl>

    </div>
  );
}

// export default DisplayCard;