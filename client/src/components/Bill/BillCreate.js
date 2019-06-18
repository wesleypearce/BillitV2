import React from 'react'

class BillCreate extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="mt-5">
        <form>
          <div class="form-group">
            <label for="name">Bill Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name of bill"
            />
          </div>
          <div class="form-group">
            <label for="cost">Bill Cost</label>
            <input
              type="number"
              class="form-control"
              id="cost"
              placeholder="$40"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BillCreate