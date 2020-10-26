import React from "react";

// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const TodoItemsList = ({ TodoItems, removeItem }) => {
  return (
    <ListGroup className="text-primary w-75 mt-4">
      {TodoItems.map((item) => (
        <ListGroup.Item className="d-flex justify-content-between" key={item.id}>
          {item.name}<Button variant="danger" data-itemid={item.id} onClick={removeItem}>Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoItemsList;