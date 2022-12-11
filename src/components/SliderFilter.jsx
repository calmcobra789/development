// TODO: create a component that displays a single bakery item

import {useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";


export default function SliderFilter(props){

    console.log("entered SliderFilter")
    console.log(props.value)

    return(
        <div className = "SliderFilter">
            

            <Slider
                
                // getAriaLabel={() => 'Temperature range'}
                onChange={() => props.handleChange()}
                // valueLabelDisplay="auto"
                // // getAriaValueText={valuetext}
                // sx={{ minWidth: 275 }}
                // value = {props.value}


                aria-label="Maximum Price"
                defaultValue={4500}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={0}
                max={4500}
            />

        </div>

    );
}