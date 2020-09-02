import React, { useState } from "react";
import styles from "./Database.module.css";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Paper,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";
import face1 from "../../assets/images/face1.jpg";
import face2 from "../../assets/images/face2.jpg";
import DeleteIcon from "@material-ui/icons/Delete";

const Database = () => {
  const [faces, setFaces] = useState([
    {
      name: "Adam",
      photo: face1,
      date: "January 1 2020",
      status: "NA",
    },
    {
      name: "John",
      photo: face2,
      date: "February 2 2020",
      status: "NA",
    },
    {
      name: "Person 1",
      photo: face1,
      date: "March 1 2020",
      status: "NA",
    },
    {
      name: "Person 2",
      photo: face2,
      date: "April 2 2020",
      status: "NA",
    },
    {
      name: "Happy Person",
      photo: face1,
      date: "May 1 2020",
      status: "NA",
    },
    {
      name: "Randon Person",
      photo: face2,
      date: "June 2 2020",
      status: "NA",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState("");

  const handleClose = () => {
    setOpen(false);
    setToBeDeleted("");
  };

  const onClickDelete = () => {
    setFaces(faces.filter((face) => face.name !== toBeDeleted));
    handleClose();
  };

  return (
    <div className={styles.container}>
      <TableContainer className={styles.tableContainer} component={Paper}>
        <Table className={styles.table} size="medium">
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell className={styles.headCell}>Image</TableCell>
              <TableCell className={styles.headCell} align="right">
                Name
              </TableCell>
              <TableCell className={styles.headCell} align="right">
                Date of Registration
              </TableCell>
              <TableCell className={styles.headCell} align="right">
                Status
              </TableCell>
              <TableCell align="right" className={styles.headCell}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faces.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  className={styles.faceImage}
                  component="th"
                  scope="row"
                >
                  <img src={row.photo} alt="face" />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <Tooltip placement="top" title="Delete">
                    <IconButton
                      onClick={() => {
                        setToBeDeleted(row.name);
                        setOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you wish to delete this entry ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={onClickDelete} color="primary" autoFocus>
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Database;
