import React from "react";

const TableHeader = () => {
  return (
    <thead className="h-10">
      <tr className="font-normal border-b capitalize">
        <th>symbol</th>
        <th>size</th>
        <th>position</th>
        <th>margin</th>
        <th>status</th>
        <th>date</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
