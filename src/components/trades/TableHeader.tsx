import React from "react";

const TableHeader = () => {
  return (
    <thead className="h-10">
      <tr className="font-medium border-b capitalize">
        <th>symbol</th>
        <th>size</th>
        <th>position</th>
        <th>margin</th>
        <th>status</th>
        <th>date</th>
        <th>exchange</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
