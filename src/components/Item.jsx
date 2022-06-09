import React from 'react'
import { Button, Card } from 'react-bootstrap'



const Item = ({productos}) => {

  const {name, image, species, status} = productos
  return (
    <Card className='text-center' style={{ width: '15rem', margin: 20 }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title> {name} </Card.Title>
    <Card.Text>
      especie: {species}
      <br></br>
      estado: {status}
    </Card.Text>
    <Button variant="primary">Ver Detalle</Button>
  </Card.Body>
</Card>   
  )
}

export default Item
