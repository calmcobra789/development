import * as React from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';
import CartComponent from './components/CartComponent';
import SliderFilter from './components/SliderFilter';
import TypeFilter from './components/TypeFilter';
import { useState } from "react";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button"

import jewelryData from "./assets/jewelry_data.json";




// jewelryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
//   console.log(item.image);
// });

function App() {
  const [cart, setCart] = useState(Array(jewelryData.length).fill(0));
  const [display, setDisplay] = useState(jewelryData);
  const [maxPrice, setMaxPrice] = useState(4500);
  const [earringFilter, setEarringFilter] = useState(true)
  const [necklaceFilter, setNecklaceFilter] = useState(true)
  const [ringFilter, setRingFilter] = useState(true)
  const [braceletFilter, setBraceletFilter] = useState(true)

  console.log(earringFilter)
  console.log(necklaceFilter)
  console.log(ringFilter)
  console.log(braceletFilter)

  const addItem = (thisItem) => {
    console.log("addItem")
    console.log(thisItem)
    const index = jewelryData.findIndex(function(item, i){
      return item.name === thisItem.name
    });
    
    console.log(index);
    const arrayCart = [...cart];
    arrayCart[index] +=1
    setCart(arrayCart);
  }



  const removeItem = (thisItem) => {
    console.log("removeItem")
    console.log(thisItem)
    const index = jewelryData.findIndex(function(item, i){
      return item.name === thisItem.name
    });
    const arrayCart = [...cart];
    arrayCart[index] = Math.max(arrayCart[index]-1,0);
    setCart(arrayCart);
  }

  // const filterSlider = (maxPrice) => {
  //   console.log("filter slider func")
  //   console.log(maxPrice)
  //   const filteredArray = display.filter((item) => {
  //     return item.price > 4000;
  //   })
  //   setDisplay(filteredArray)
      

  // }

  const ringHandler = () => {
    console.log("ring handler func")
    setRingFilter(!ringFilter)
    console.log("ringFilter", ringFilter)
    const filteredData = jewelryData.filter(item => item.type === "Ring" && ringFilter ? false : true);
    console.log("ring filteredData.length", filteredData.length)
    const dblFilteredData = filteredData.filter(matchesFilterTypeR)
    setDisplay(dblFilteredData)
      
  }

  const braceletHandler = () => {
    console.log("braceletHandler handler func")
    setBraceletFilter(!braceletFilter)
    console.log("braceletFilter", braceletFilter)
    // const filteredData = display.filter(item => item.type === "Bracelet" && braceletFilter ? false : true);
    const filteredData = jewelryData.filter(item => item.type === "Bracelet" && braceletFilter ? false : true);
    const dblFilteredData = filteredData.filter(matchesFilterTypeB)
    setDisplay(dblFilteredData)
    // setDisplay(filteredData)
      
  }

  const necklaceHandler = () => {
    console.log("necklace handler func")
    setNecklaceFilter(!necklaceFilter)
    console.log("necklaceFilter", necklaceFilter)
    const filteredData = jewelryData.filter(item => item.type === "Necklace" && necklaceFilter ? false : true);
    console.log("necklace filteredData.length", filteredData.length)
    const dblFilteredData = filteredData.filter(matchesFilterTypeN)
    setDisplay(dblFilteredData)
      
  }

  const earringHandler = () => {
    console.log("earring handler func")
    setEarringFilter(!earringFilter)
    console.log("earringFilter", earringFilter)
    const filteredData = jewelryData.filter(item => item.type === "Earrings" && earringFilter ? false : true);
    console.log("earring filteredData.length", filteredData.length)
    const dblFilteredData = filteredData.filter(matchesFilterTypeE)
    setDisplay(dblFilteredData)
      
  }





  const matchesFilterTypeR = item => {
    console.log("matchesFilterTypeR")
    console.log(item.type)
    const rVal = item.type === "Ring" && !ringFilter;
    console.log("rVal", rVal);
    const nVal = item.type === "Necklace" && necklaceFilter;
    console.log("nVal", nVal);
    const eVal = item.type === "Earrings" && earringFilter;
    console.log("eVal", eVal);
    const bVal = item.type === "Bracelet" && braceletFilter;
    console.log("bVal", bVal);
    const boolVal = (rVal || nVal || eVal || bVal);
    console.log('boolVal: ', boolVal);
    return boolVal

  }

  const matchesFilterTypeB = item => {
    console.log("matchesFilterTypeB")
    console.log(item.type)
    const rVal = item.type === "Ring" && ringFilter;
    console.log("rVal", rVal);
    const nVal = item.type === "Necklace" && necklaceFilter;
    console.log("nVal", nVal);
    const eVal = item.type === "Earrings" && earringFilter;
    console.log("eVal", eVal);
    const bVal = item.type === "Bracelet" && !braceletFilter;
    console.log("bVal", bVal);
    const boolVal = (rVal || nVal || eVal || bVal);
    console.log('boolVal: ', boolVal);
    return boolVal

  }

  const matchesFilterTypeE = item => {
    console.log("matchesFilterTypeB")
    console.log(item.type)
    const rVal = item.type === "Ring" && ringFilter;
    console.log("rVal", rVal);
    const nVal = item.type === "Necklace" && necklaceFilter;
    console.log("nVal", nVal);
    const eVal = item.type === "Earrings" && !earringFilter;
    console.log("eVal", eVal);
    const bVal = item.type === "Bracelet" && braceletFilter;
    console.log("bVal", bVal);
    const boolVal = (rVal || nVal || eVal || bVal);
    console.log('boolVal: ', boolVal);
    return boolVal

  }

  const matchesFilterTypeN = item => {
    console.log("matchesFilterTypeB")
    console.log(item.type)
    const rVal = item.type === "Ring" && ringFilter;
    console.log("rVal", rVal);
    const nVal = item.type === "Necklace" && !necklaceFilter;
    console.log("nVal", nVal);
    const eVal = item.type === "Earrings" && earringFilter;
    console.log("eVal", eVal);
    const bVal = item.type === "Bracelet" && braceletFilter;
    console.log("bVal", bVal);
    const boolVal = (rVal || nVal || eVal || bVal);
    console.log('boolVal: ', boolVal);
    return boolVal

  }

  const ascendingHandler = () => {

    //sort the display by ascending.
    console.log("in ascending handler");
    let toSort = [...display]
    const sortedArray = toSort.sort((a, b) => {
      return a.price - b.price;
    })

    console.log(sortedArray);

    setDisplay(sortedArray);
      

  }

  const descendingHandler = () => {

    //sort the display by descending.
    console.log("in descenging handler");
    let toSort = [...display]
    const sortedArray = toSort.sort((a, b) => {
      return b.price - a.price;
    })

    console.log(sortedArray);

    setDisplay(sortedArray);

  }
  

  return (
    
    <div className="App">

      
      
      <header className="App-header">
        <h1>Jewelry Shop</h1>
        <div style={{border:"1px solid"} }>

          <h4>Filter by Maximum Price</h4>
          {/* <SliderFilter value  = {[0,4500]} handleChange = {filterSlider}/>  */}
          <div style = {{backgroundColor:"#C4911C"}}>
            <h4>Filter by Type</h4>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked onChange={earringHandler}/>} label="Earrings" />
              <FormControlLabel control={<Checkbox defaultChecked onChange={necklaceHandler}/>} label="Necklace" />
              <FormControlLabel control={<Checkbox defaultChecked onChange={ringHandler}/>} label="Ring" />
              <FormControlLabel control={<Checkbox defaultChecked onChange={braceletHandler}/>} label="Bracelet" />

            </FormGroup>
          </div>
          <div>
            <h4>Sort by price</h4>
            <Button variant="contained" color="success"  onClick={ascendingHandler}>
              Ascending
            </Button>
            <Button variant="outlined" color="error" onClick={descendingHandler}>
              Descending
            </Button>
            
          </div>
          
   
        </div>

        <Stack>
          {display.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <DisplayCard item  = {item} index = {index} addItem = {addItem} removeItem = {removeItem}/> // replace with BakeryItem component
          ))}
        </Stack>
        <div>
        <h2>Cart (Aggregator)</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((count, index) => count? <CartComponent cartComponent = {jewelryData[index]} count  = {count}/> :<></>)}
        Total cost = $ {(cart.reduce((a,b,index) => {return a + b*jewelryData[index].price},0)).toFixed(2)}
        
      </div>
      </header>
    </div>
  );
}

export default App;
