import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {saveCar} from '../carapi;'


export default function EditCar(props) {
    const [car, setCar] = useState ({
        brand: "",
        model: "",
        color: "",
        modelYear: "",
        fuel: "",
        price: ""
    })
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
 
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Car
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
        
          <TextField
            margin="dense"
            name="brand"
            value={car.brand}
            onChange={event => setCar ({...car, brand: event.target.value})}
            label="brand"
            fullWidth
            variant="standard"
          />

<TextField
            margin="dense"
            name="model"
            value={car.model}
            onChange={event => setCar ({...car, model: event.target.value})}
            label="model"
            fullWidth
            variant="standard"
          />

<TextField
            margin="dense"
            name="color"
            value={car.color}
            onChange={event => setCar ({...car, color: event.target.value})}
            label="color"
            fullWidth
            variant="standard"
          />

<TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={event => setCar ({...car, fuel: event.target.value})}
            label="fuel"
            fullWidth
            variant="standard"
          />

<TextField
            margin="dense"
            name="modelYear"
            value={car.modelYear}
            onChange={event => setCar ({...car, modelYear: event.target.value})}
            label="modelYear"
            fullWidth
            variant="standard"
          />

<TextField
            margin="dense"
            name="price"
            value={car.price}
            onChange={event => setCar ({...car, price: event.target.value})}
            label="price (€)"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}