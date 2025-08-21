import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function DataTable({ columns, data, globalFilter, onGlobalFilterChange }) {
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 8 } },
  });

  return (
    <div className='bg-white border rounded-2xl shadow-sm'>
      <div className='overflow-x-auto'>
        <table className='min-w-full text-sm'>
          <thead className='bg-gray-50 text-gray-600'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='text-left px-4 py-3 font-semibold select-none'>
                    {header.isPlaceholder ? null : (
                      <div
                        className={header.column.getCanSort() ? "cursor-pointer flex items-center gap-1" : ""}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{"asc":"▲","desc":"▼"}[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='divide-y'>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className='hover:bg-gray-50'>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='px-4 py-3'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className='flex items-center justify-between p-3 text-sm'>
        <div>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className='space-x-2'>
          <button className='px-3 py-1 border rounded disabled:opacity-50' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Prev
          </button>
          <button className='px-3 py-1 border rounded disabled:opacity-50' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
