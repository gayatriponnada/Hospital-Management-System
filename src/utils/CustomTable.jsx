import React from "react";

const CustomTable = ({ data, columns, showCheckbox = true }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            {showCheckbox && (
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className="text-secondary">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={item.id || rowIndex}>
              {showCheckbox && (
                <th>
                  <input type="checkbox" className="checkbox" />
                </th>
              )}

              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
