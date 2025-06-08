import { Table } from "react-bootstrap";

export const CustomersTable = ({ list }) => {
  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Email Id</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {list?.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.customerName}</td>
            <td>{customer.emailId}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.address}</td>
            <td>Active</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
