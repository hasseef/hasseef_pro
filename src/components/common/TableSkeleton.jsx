import React from "react";

export const TableSkeleton = ({ columns }) => (
  <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-white">
    <table className="min-w-full text-sm text-right">
      <thead className="border-b bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr key={row} className="border-b last:border-b-0">
            {columns.map((col) => (
              <td key={col} className="px-4 py-3 text-gray-400 whitespace-nowrap">
                — بيانات تجريبية —
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
