import { Card, Col, ListGroup } from "react-bootstrap";

function Menu({ dishes, onClick }) {
  let totalPrice = 0;
  let totalHealth = 0;
  let totalTime = 0;

  dishes.forEach((dish) => {
      totalPrice = totalPrice + dish.pricePerServing;
      totalHealth = totalHealth + dish.healthScore;
      totalTime = totalTime + dish.readyInMinutes;
  });

  return (
    <div className="menu-final-container" >
    <Card className='resume-menu-card' style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Total Price: $ {totalPrice}</ListGroup.Item>
        <ListGroup.Item>Total Health Score: {totalHealth} Health points  </ListGroup.Item>
        <ListGroup.Item>Total Preparation Time: {totalTime} ' </ListGroup.Item>
      </ListGroup>
    </Card>

    <Col className='container-menu-card'>
      {dishes.map((dish, i) => (
      <div key={`menu-${i}`} >              
          <Card className='card-menu-small'>
            <Card.Img variant="top" src={dish.image} className="card-menu-img" style={{ width: '10rem' }} />
            <Card.Body>
              <Card.Title><strong>{dish.title}</strong></Card.Title>
              <Card.Text>
                Diet type: {dish.diets.join(', ')}
                <br/>
                Price: $ {dish.pricePerServing} per serving - {dish.servings} servings. 
                <br/>
                Description: {dish.healthScore} Health points 
                <br/>
                <Card.Link className="link-menu" href={dish.sourceUrl}>Recipe Link</Card.Link>
              </Card.Text>
            </Card.Body>
            <button className='remove-button' onClick={() => onClick(dish)}>remove from menu</button>
          </Card>
      </div>
        )
        )}
      </Col>
    </div>
  );
}

export default Menu;