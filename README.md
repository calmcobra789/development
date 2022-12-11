# Development

### Link to Deployed Website
The link to the website is `https://calmcobra789.github.io/development/`

### Goal and Value of the Application
This website is an online Jewelry shop that displays earrings, rings, necklaces and bracelents for customers to filter, sort through and add to their cart to buy. The value for the jewelry shop owner is in making their offline inventory available to customers arround the world, connecting them with more potential buyers than was previously possible without a website. The value for the customer is the to be able to browse through and potentially buy stunning one-of-a-kind jewelry pieces.

### Usability Principles Considered

Organization: the page is organized in (1) filters and sort options, (2) items that match the user's filter and sort, and (3) the shopping cart.
Buttons: through the @mui library, I have used buttons that press down when clicked to signal to the user that their action was registered. I also use CardComponents from @mui that neatly encapsulate the data for each jewelry item onto separate cards, visually distinguishing each item from the background and from other items.
I also added alt text for the images in case they do not load on the user's device or for a screenreader. 

### Organization of Components

App.js instanciates two types of components: CartComponent and DisplayCard. 
- One DisplayCard is instanciated for every jewelry item, displaying details such as price, name, description, type and the photo of the item. Each DisplayCard also houses buttoms to add or remove the item froom the user's cart.
- CartComponent is used to aggregate the user's choices to add or remove items from the cart, displaying the count (i.e. how many of each item is added to the cart). 

### How Data is Passed Down Through Components
All the jewelry data is contained in a JSON file called jewelry_data.json. This is read into App.js and is used as the initial state of the items to display. 

To display items with their data, every entry of the jewelry JSON is passed (through a mapping) into every DisplayCard component in App.js through props. CartComponent also relies on getting its data through parameters passed in through props -- the item that was added to cart as well as its corresponding count. 


States and hooks:
  const [cart, setCart] = useState(Array(jewelryData.length).fill(0));
  const [display, setDisplay] = useState(jewelryData);
  const [earringFilter, setEarringFilter] = useState(true)
  const [necklaceFilter, setNecklaceFilter] = useState(true)
  const [ringFilter, setRingFilter] = useState(true)
  const [braceletFilter, setBraceletFilter] = useState(true)


### How the User Triggers State Changes

The user can trigger state changes by:
(1) Adding items to the cart by clicking the "ADD TO CART" buttom on any DisplayCard. This ultimately calls a function that updates and sets the cart state using setCart.
(2) Removing items from the cart by clicking the "REMOVE ITEM" buttom on any DisplayCard. This ultimately calls a function that updates and sets the cart state using setCart.
(3) Checking any of the type filter checkboxes. This ultimately calls a function that updates and sets the corresponding type state (earringFilter, necklaceFilter, ringFilter, or braceletFilter) and also updates and sets the display state (using setDisplay).
(4) Un-checking any of the type filter checkboxes. This ultimately calls a function that updates and sets the corresponding type state (earringFilter, necklaceFilter, ringFilter, or braceletFilter) and also updates and sets the display state (using setDisplay).
(5) Clicking the "ASCENDING" button to sort items in ascending order or price. This ultimately calls a function that updates the display state with its elements sorted (using setDisplay).
(6) Clicking the "DESCENDING" button to sort items in descending order or price. This ultimately calls a function that updates the display state with its elements sorted (using setDisplay).

