import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transaction, setTransaction] = useState();
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Details of Transaction"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
