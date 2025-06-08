import { Button } from "react-bootstrap";

import { useState } from "react";
import { CustomersTable } from "../../CustomersTable/CustomersTable";
import { AddCustomer } from "../../AddCustomer/AddCustomer";


export const Customers = () => {
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [list, setList] = useState([]);

  const addCustomer = () => {
    setShowAddCustomerModal(true);
  };

  return (
    <div className="container my-2">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-end gap-2">
          <Button variant="primary" onClick={addCustomer}>
            Add Customer
          </Button>
        </div>

        <div>
          <CustomersTable list={list} />
        </div>

        {showAddCustomerModal && (
          <AddCustomer
            onHide={() => setShowAddCustomerModal(false)}
            onSave={(value) => setList([...list, value])}
          />
        )}
      </div>
    </div>
  );
};
