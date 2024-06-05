"use client";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import firestore from "../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

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

const UpdateItem = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const item = await getStoreItem(itemId);
        setItemName(item.name);
        setItemDescription(item.description);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  const handleUpdateItem = async () => {
    const updatedItem = {
      name: itemName,
      description: itemDescription,
    };
    try {
      const itemDoc = doc(firestore, "storeItems", itemId);
      await updateDoc(itemDoc, updatedItem);
      setItemName("");
      setItemDescription("");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4">Update item</Typography>
        <form>
          <Box mt={2}>
            <TextField
              id="itemName"
              label="Name"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              id="itemDescription"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateItem}
            >
              Save changes
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateItem;
