import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4">Add new item</Typography>
        <Form method="post">
          <Box mt={2}>
            <TextField
              id="itemName"
              name="name"
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
              name="description"
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
              onClick={() => navigate(-1)}
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
        </Form>
      </Box>
    </Container>
  );
};

export default AddItem;
