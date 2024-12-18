import React, { useState } from "react";
import { Box, TextField, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import useHabitStore from "../store/store";


export default function AddHabitForm() {
  const [name, setName] = useState("");
    const [frequency, setFrequency] = useState("");
    const { habits, addHabit } = useHabitStore();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim())
        {
            addHabit(name, frequency);
            setName("");
        }
    }


  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField
          label="Enter Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="frequency-select-label">Frequency</InputLabel>
          <Select
            labelId="frequency-select-label"
            value={frequency}
            label="Frequency"
            onChange={(e) => setFrequency(e.target.value)}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
              </FormControl>
              <Button style={{'marginTop':"20px"}}  type="submit" variant="contained" color="primary">Submit</Button>
      </Box>
    </form>
  );
}
