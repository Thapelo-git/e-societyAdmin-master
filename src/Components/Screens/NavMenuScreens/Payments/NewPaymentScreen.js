import React from 'react';
import '../Payments/style.css';

const NewPaymentScreen = () => {
  return (
    <div className="container-fluid m-0 pt-3 payments-container-main"> 
    <div className="container-fluid">
      <h4 className="fw-bold text-secondary text-center header-text">MEMBER  PAYMENTS</h4>
      <div className="mb-4 mt-2 w-50 input-in">
          <div className="acc-icon-input"><i class="bi bi-search"></i></div>
          <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Search members payments'></input>
      </div>  

      <div className="row">
        <div className="col col-md-2 bg-light pay-table">Member ID</div>
        <div className="col col-md-2 bg-light pay-table">Name</div>
        <div className="col col-md-2 bg-light pay-table">Email</div>
        <div className="col col-md-2 bg-light pay-table">Phone Number</div>
        <div className="col col-md-2 bg-light pay-table">Amount Paid</div>
        <div className="col col-md-2 bg-light pay-table">Payment Date</div>
      </div>

      </div>
    </div>
  )
}

export default NewPaymentScreen