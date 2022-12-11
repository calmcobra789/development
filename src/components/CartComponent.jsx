// TODO: create a component that displays a single bakery item

import {useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';

export default function CartComponent(props){

    console.log("entered cart component")

    return(
        <div className = "DisplayCard">
        <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardMedia
            component="img"
            height="194"
            image={props.cartComponent.image}
            alt={props.cartComponent.name}
        /> 
          <CardContent>
          {/* <h1>{item.price}</h1> */}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Number of items: {props.count}
              
              
    
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
              <p>{props.cartComponent.name} </p>
    
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.cartComponent.type}: ${props.cartComponent.price}
            </Typography>
            <Typography variant="body2">
  
              <br />

            </Typography>
          </CardContent>
          
        </Card>
        </div>

    );
}