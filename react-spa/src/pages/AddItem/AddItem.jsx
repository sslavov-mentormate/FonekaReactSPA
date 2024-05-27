import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import firestore from "../../Firebase";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const navigate = useNavigate();

  const handleAddItem = async (event) => {
    event.preventDefault();
    try {
      const newItem = { name: itemName, description: itemDescription };
      const docRef = await addDoc(collection(firestore, "storeItems"), newItem);
      setItemName("");
      setItemDescription("");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4">Add new item</Typography>
        <form onSubmit={handleAddItem}>
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
              type="submit"
              disabled={!itemName}
            >
              Add item
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AddItem;
