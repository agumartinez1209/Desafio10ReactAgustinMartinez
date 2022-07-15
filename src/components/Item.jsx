import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Item  ({productos}) {

  const {precio, texto, imagen, id, categoria} = productos
  return (
    <Card className='text-center  mx-auto  d-flex  ' style={{ width: '15rem', margin: 20 }}>
  <Card.Img variant="top"  src={imagen}  />
  <Card.Body>
    <Card.Title> {texto} </Card.Title>
    <Card.Title> {categoria} </Card.Title>
    <Card.Text>
      $ {precio}
      
    </Card.Text>
    <Link to={"/Productos/" + id} ><Button variant="btn btn-outline-success"   >Ver Detalle</Button> </Link>
    
  </Card.Body>
</Card>   
  )
}

export default Item
