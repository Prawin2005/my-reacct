import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const AddCustomer = ({ onHide, onSave }) => {
  const [customer, setCustomer] = useState({
    id: null,
    customerName: "",
    emailId: "",
    phoneNumber: "",
    address: "",
  });

  const handleClose = () => {
    onHide();
  };

  const handleSave = () => {
    onSave(customer);
    handleClose();
  };

  const updateCustomer = (key, value) => {
    setCustomer({
      ...customer,
      [key]: value,
    });
  };

  return (
    <Modal show={true} size="lg" backdrop="static">
      <Modal.Header>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column gap-3">
        <Form.Group>
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => updateCustomer("customerName", e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => updateCustomer("emailId", e.target.value)}
          />
        </Form.Group>

        <div className="d-flex gap-2 w-100">
          <Form.Group className="w-100">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              onChange={(e) => updateCustomer("phoneNumber", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => updateCustomer("address", e.target.value)}
            />
          </Form.Group>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
