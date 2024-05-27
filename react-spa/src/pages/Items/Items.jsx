import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import firestore from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const getStoreItems = async () => {
  try {
    const storeItemsCollection = collection(firestore, "storeItems");
    const storeItemsSnapshot = await getDocs(storeItemsCollection);
    const storeItems = storeItemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
    }));
    return storeItems;
  } catch (error) {
    console.error("Error fetching store items: ", error);
    throw error;
  }
};

const Items = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      setStatus("loading");
      getStoreItems()
        .then((items) => {
          setItems(items);
          setStatus("succeeded");
        })
        .catch((error) => {
          setError(error.message);
          setStatus("failed");
        });
    }
  }, [status]);

  if (status === "loading") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (status === "failed") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h5" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              component={Link}
              to={`/item/${item.id}`}
              sx={{ textDecoration: "none", cursor: "pointer" }}
              hover
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Items;
