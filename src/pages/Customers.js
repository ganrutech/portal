import React, { useEffect, useState, useCallback, useRef } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import axios from "axios";
// Import React Table
import { useTable, usePagination } from "react-table";
import * as MdIcons from "react-icons/md";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Created On",
    accessor: "createdAt",
  },
];

const Table = ({
  columns,
  data,
  fetchData,
  pageCount: controlledPageCount,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    // setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <div className="row">
      <div className="col-md-10 col-6">
        <ul className="pagination justify-content-start">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdIcons.MdRefresh
                size={16}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="col-md-1 col-3">
        <select className="form-control">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="col-md-1 col-3">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </button>
          </li>
        </ul>
      </div>
      <div className="col-md-12 col-12">
        <div className="table-responsive">
          <table
            className="table table-bordered table-hover"
            {...getTableProps()}
          >
            <thead className="thead-light">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-12">
        {`Page ${pageIndex + 1} of ${controlledPageCount} entries`}
      </div>
    </div>
  );
};

function Customers() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;

    if (fetchId === fetchIdRef.current) {
      //   const startRow = pageSize * pageIndex;
      //   const endRow = startRow + pageSize;
      setTimeout(() => {
        axios
          .get(
            `https://5f252b05c85de20016292e83.mockapi.io/api/v1/users?page=${
              pageIndex + 1
            }&limit=${pageSize}`
          )
          .then((res) => {
            setData(res.data);
            setPageCount(Math.ceil(res.data.length));
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    }
  }, []);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem active>Customers</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}

export default Customers;
