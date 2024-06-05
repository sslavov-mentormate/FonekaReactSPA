import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import firestore from "../../Firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

const getStoreItem = async (itemId) => {
  try {
    const itemDoc = doc(firestore, "storeItems", itemId);
    const itemSnapshot = await getDoc(itemDoc);
    if (itemSnapshot.exists()) {
      return {
        id: itemSnapshot.id,
        name: itemSnapshot.data().name,
        description: itemSnapshot.data().description,
      };
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    console.error("Error fetching item: ", error);
    throw error;
  }
};

const deleteStoreItem = async (itemId) => {
  try {
    const itemDoc = doc(firestore, "storeItems", itemId);
    await deleteDoc(itemDoc);
    return itemId;
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

const ItemDetailsIndex = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreItem = async () => {
      try {
        const item = await getStoreItem(itemId);
        setItemDetails(item);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStoreItem();
  }, [itemId]);

  const handleUpdateItem = () => {
    navigate(`/items/${itemId}/update-item`);
  };

  const handleDeleteItem = async () => {
    try {
      await deleteStoreItem(itemId);
      navigate("/items");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  if (loading) {
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

  if (error) {
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h3" gutterBottom>
        Details
      </Typography>
      <Typography variant="h5" gutterBottom>
        ID: {itemDetails.id}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Name: {itemDetails.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Description: {itemDetails.description}
      </Typography>
      <Box mt={3} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={handleUpdateItem}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteItem}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetailsIndex;
