import { useState } from "react";
import { Table } from "./Table";

export const Countries = () => {   
  const [country, setCountry] = useState("apple")

  return (
    <div className="countries">
      <h1>Countries</h1>
      <p>List of countries will be displayed here.</p>
      <button onClick={() => alert('This is a placeholder for country data.')}> Click</button>
      <Table props={country}/>
    </div>
  );
}