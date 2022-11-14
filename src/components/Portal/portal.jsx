import React, { useEffect, useState } from "react";
import moment from "moment";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField, Box, Button, Stack, Typography } from "@mui/material";

import { Pagination } from "../../firebase/operations";

import { EnhancedTableToolbar } from "./activeToolbar";
import CircularStatic from "../shared/Loader/loader";
import NoData from "../shared/NoData/noData";

import { tableStyles } from "../Styles/tableStyles";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: "true",
});

const getMuiTheme = () => createTheme(tableStyles);

export default function AdminPortal(props) {
  const [rows, setRows] = useState([]); // table rows
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [lastKey, setLastKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [registeredFrom, setRegisteredFrom] = useState(null);
  const [registeredTo, setRegisteredTo] = useState(null);

  const filterList = {};

  // handle filter
  const handleFilterSubmit = (applyFilters) => {
    const filters = applyFilters();
    console.log("Filters: ", filters);
    filters.map((item) => {
      const key = columns[`${filters.indexOf(item)}`].name;
      console.log("Key: ", key);
      let newFilter;
      if (key === "dateDisbursed") {
        newFilter = {
          registeredFrom: moment(item[0]).format("MM-DD-YYYY"),
          registeredTo: moment(item[1]).format("MM-DD-YYYY"),
        };
      } else {
        newFilter = { [key]: moment(item[0]).format("MM-DD-YYYY") };
      }
      console.log("FILTER: ", newFilter);
      Object.assign(filterList, newFilter);
    });
    console.log("FILTER LIST: ", filterList);

    setIsFiltered(true);
  };

  const columns = [
    {
      name: "displayName",
      label: "Name",
      options: {
        filter: false,
      },
    },
    {
      name: "phoneNumbuer",
      label: "Phone Number",
      options: {
        filter: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: false,
      },
    },
    {
      name: "weight",
      label: "Weight (kg)",
      options: {
        filter: false,
      },
    },
    {
      name: "height",
      label: "Height (cm)",
      options: {
        filter: false,
      },
    },
    {
      name: "plan",
      label: "Subscribed Plan",
      options: {
        filter: true,
      },
    },
    {
      name: "dateRegistered",
      label: "Registered Date",
      options: {
        filter: true,
        filterType: "custom",
        customFilterListOptions: {
          render: (v) => {
            if (v[0] && v[1]) {
              console.log(
                `From: ${moment(v[0]).format("MM-DD-YYYY")},  To: ${moment(
                  v[1]
                ).format("MM-DD-YYYY")}`
              );
              return [
                `Registered From: ${moment(v[0]).format("MM-DD-YYYY")}`,
                `Registered To: ${moment(v[1]).format("MM-DD-YYYY")}`,
              ];
            }
            if (v[0]) {
              return `Registered From: ${moment(v[0]).format("MM-DD-YYYY")}`;
            }
            if (v[1]) {
              return `Registered To: ${moment(v[1]).format("MM-DD-YYYY")}`;
            }
            return [];
          },
          update: (filterList, filterPos, index) => {
            console.log(
              "customFilterListOnDelete: ",
              filterList,
              filterPos,
              index
            );

            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, "");
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1);
            } else if (filterPos === -1) {
              filterList[index] = [];
            }

            return filterList;
          },
        },
        filterOptions: {
          names: [],
          logic(dateRegistered, filters) {
            const formattedDate =
              typeof dateRegistered === "string"
                ? moment(dateRegistered, "MM-DD-YYYY").format("MM-DD-YYYY")
                : moment(dateRegistered.toDate().toDateString()).format(
                    "MM-DD-YYYY"
                  );

            console.log("Formatted Date: ", formattedDate);

            if (filters[0] && filters[1]) {
              let formattedTo = moment(filters[1]).format("MM-DD-YYYY");
              let formattedFrom = moment(filters[0]).format("MM-DD-YYYY");

              return (
                moment(formattedDate, "MM-DD-YYYY").isBetween(
                  formattedFrom,
                  formattedTo
                ) === false
              );
            }
            if (filters[1]) {
              let formattedFrom = moment(filters[1]).format("MM-DD-YYYY");
              return moment(formattedDate).isSameOrAfter(formattedFrom);
            }
            if (filters[0]) {
              let formattedTo = moment(filters[0]).format("MM-DD-YYYY");
              return moment(formattedDate).isSameOrBefore(formattedTo);
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <Stack direction="row" spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Registered From:"
                  value={registeredFrom || filterList[index][0]}
                  onChange={(newValue) => {
                    setRegisteredFrom(newValue);
                    filterList[index][0] = newValue;
                    onChange(filterList[index], index, column);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Registered To:"
                  value={registeredTo || filterList[index][1]}
                  onChange={(newValue) => {
                    setRegisteredTo(newValue);
                    filterList[index][1] = newValue;
                    onChange(filterList[index], index, column);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          ),
        },
        customBodyRenderLite: (dataIndex) =>
          moment(rows[dataIndex].dateRegistered).format("MM-DD-YYYY"),
      },
    },
    {
      name: "active",
      label: "Status",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) =>
          rows[dataIndex].active === false ? (
            <Typography sx={{ color: "red" }}>Inactive</Typography>
          ) : (
            <Typography sx={{ color: "green" }}>Active</Typography>
          ),
      },
    },
  ];

  const handleChangePage = (tableState) => {
    const { page } = tableState;
    setPage(page);

    const fetchMoreData = (key) => {
      if (key) {
        Pagination.fetchNextBatch(key, "users", "dateRegistered")
          .then((res) => {
            setLastKey(res.lastKey);
            setRows(rows.concat(res.fetchedData));
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("Err: ", err);
          });
      }
    };

    fetchMoreData(lastKey);
    console.log("last key:", lastKey);
  };

  const handleChangeRowsPerPage = (newRowsPerPage) => {
    setRowsPerPage(parseInt(newRowsPerPage, 10));
    setPage(0);
  };

  const options = {
    responsive: "standard",
    rowsPerPage,
    rowsPerPageOptions: [10, 25, 50, 100],
    download: false,
    print: false,
    confirmFilters: true,
    onTableChange: (action, tableState) => {
      switch (action) {
        case "changePage":
          handleChangePage(tableState);
          break;
        case "changeRowsPerPage":
          handleChangeRowsPerPage(tableState.rowsPerPage);
          break;
        default:
          console.log("action not handled.");
      }
    },
    customFilterDialogFooter: (currentFilterList, applyNewFilters) => (
      <Box style={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: "500",
            fontSize: ".88rem",
            backgroundColor: "#009966",

            "&:hover": {
              backgroundColor: "rgba(0,153,102,.8)",
            },
          }}
          onClick={() => handleFilterSubmit(applyNewFilters)}
        >
          Apply Filters
        </Button>
      </Box>
    ),
  };
  // pull data from firebase and set table rows
  useEffect(() => {
    Pagination.fetchFirstBatch("users", "dateRegistered")
      .then((res) => {
        setRows(res.fetchedData);
        setLastKey(res.lastKey);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <EnhancedTableToolbar />
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={getMuiTheme()}>
          {isLoading ? (
            <CircularStatic />
          ) : rows.length < 1 ? (
            <NoData text="No Users Found!" />
          ) : (
            <MUIDataTable data={rows} columns={columns} options={options} />
          )}
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
