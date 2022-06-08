import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { useSelector } from "react-redux";

export default function BasicTable(props) {
  const usersRd = useSelector((state) => state.userr);
  console.log(usersRd);
  const [animate, setAnimate] = useState(false);

  const handleRefresh = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <>
      <TableContainer
        sx={{
          marginTop: "16px",
          mx: "16px",
          width: "calc(97%)",
          border: "1px solid #e8cccc",
          borderRadius: "7px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e8cccc",
                backgroundColor: "#F5F5F5",
                fontWeight: "500",
              }}
            >
              <TableCell sx={{ border: "none" }}>{props.title}</TableCell>
              <Refresh
                sx={{ mr: 2, width: "18px" }}
                onClick={handleRefresh}
                className={animate ? "rotate" : null}
              />
            </TableRow>
          </TableHead>
          <TableContainer
            component={Paper}
            sx={{
              display: "flex",
              justifyContent: "center",
              m: 2,
              border: "1px solid #e8cccc",
              borderRadius: "7px",
              width: "auto",
            }}
          >
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                <TableRow>
                  {props.headerData.map((item, index) => {
                    return <TableCell key={index}>{item}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.bodyData.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        textAlign: "left",
                      }}
                    >
                      {item.map((childItem, index) => {
                        return <TableCell key={index}>{childItem}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Table>
      </TableContainer>
    </>
  );
}
