import React from 'react'

class BillList extends React.Component {
  renderBillList() {
    const bills = ["Rent", "Insurance", "Groceries"];


    return bills.map(bill => {
      return <li key={bill} className="list-group-item">{bill}</li>;
    });
  }

  render() {
    return (
      <React.Fragment>
        <ul className="list-group mt-5">{this.renderBillList()}</ul>
      </React.Fragment>
    );
  }
}

export default BillList