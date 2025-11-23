import React from "react";

export const DemoTable = ({ columns }) => (
  <div className="overflow-x-auto border border-brand-border rounded-lg bg-white">
    <table className="min-w-full text-xs md:text-sm text-right">
      <thead className="bg-gray-50 border-b border-brand-border">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr
            key={row}
            className={row % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            {columns.map((col) => (
              <td
                key={col}
                className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs md:text-sm"
              >
                بيانات ديمو
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
