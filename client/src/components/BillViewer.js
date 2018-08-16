import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const bills = [
  { id: 0, name: 'Groceries', cost: 200, dueDate: Date.now() },
  { id: 1, name: 'Internet', cost: 50, dueDate: Date.now() },
  { id: 2, name: 'Rent', cost: 1000, dueDate: Date.now() },
  { id: 3, name: 'Insurance', cost: 60, dueDate: Date.now() }
]

class BillViewer extends Component {
  render() {
    return (
      <ListGroup>
        {bills.map(({ id, name, cost, dueDate }) => (
          <ListGroupItem key={id}>
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

export default BillViewer