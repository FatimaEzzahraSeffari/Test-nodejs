import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const product= ({p}) => {  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.image} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Text>
         {p.description}
        </Card.Text>
        <Button variant="primary" href={"/product/"+product._id}>Add to card</Button>
      
      </Card.Body>

    </Card>
    </>
  );
 
}

export default product;
