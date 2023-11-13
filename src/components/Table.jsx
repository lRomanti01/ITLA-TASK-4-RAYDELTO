import React from "react";
import '../stylesheets/Table.css'

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody id="data-body">
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
