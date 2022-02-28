import '../MenuCard/Card.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Card, Row } from 'react-bootstrap';
import Menu from '../MenuDaily/MenuDaily';


function CardFood() {
  const url="https://menuapp-alkemy.herokuapp.com/recipes";

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const dataServer = await axios.get(url);
            console.log(dataServer.data)
          setDishes(dataServer.data)
      }
      fetchData()
  }, [])
  
  const [menu, setMenu] = useState([]);

  // console.log(dishes);

  function handleAddDishToMenu(dish) {
      if (menu.length > 3){
          return
        } 
        setMenu((existingDishes) => {
        const veganDishes = existingDishes.filter(menuItem => menuItem.vegan).length
        if (veganDishes >= 2 && dish.vegan) {
            return existingDishes
        }
        const mealDishes = existingDishes.filter(menuItem => !menuItem.vegan).length
        if (mealDishes >= 2 && !dish.vegan) {
            return existingDishes
        }
        const finalDishes = [...existingDishes, dish]
        return finalDishes

        });
  }

  function handleRemoveDishFromMenu(dish) {
    setMenu((existingDishes) => {
      const filteredMenuItems = existingDishes.filter( (menuItem) => menuItem.id !== dish.id);

      return filteredMenuItems;
    });

    // console.log(`remove ${JSON.stringify(dish.id)}`);
  }

  return (
    // console.log(dishes),
    <div className="App">
      <h1 className='title-section'>Dishes</h1>
      <Dishes dishes={dishes} onClick={handleAddDishToMenu} />
      <h1 id="menudaily" className='title-section'>Menu</h1>
      <Menu dishes={menu} onClick={handleRemoveDishFromMenu} />
    </div>
  );
}

function Dishes({ dishes, onClick }) {
  return (
    <div>
      {dishes.map((dish, i) => (
        <div key={`dish-${i}`} onClick={() => onClick(dish)}>
          <Row className="wrapper" xs={1} md={2}>
                <Card className="container-card">
                    <Card.Img variant="top" src={dish.image} className="imagen-menu-card" />
                    <Card.Body className="body-menu-card">
                        <Card.Title className="title-menu">{dish.title}</Card.Title>
                        <Card.Text>
                            Preparation Time: {dish.readyInMinutes}' 
                            <br/>
                            Dish type: {dish.dishTypes.join(', ')}
                            <br/>
                            Diet type: {dish.diets.join(', ')}
                            <br/>
                        </Card.Text>
                        <Button className="add-button" >Add to Daily Menu</Button>                       
                    </Card.Body>
                </Card>      
            </Row>
        </div>
      ))}
    </div>
  );
}


export default CardFood;
