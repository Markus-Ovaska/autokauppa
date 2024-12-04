import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { getCars, deleteCar } from '../carapi';
import AddCar from './AddCar';
import EditCar from '.EditCar';

function CarList() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);

  const [colDefs, setColDefs] = useState([
    { field: "brand", filter: true },
    { field: "model", filter: true },
    { field: "color", filter: true, width: 150 },
    { field: "fuel", filter: true },
    { headerName:"Year", field: "modelYear", filter: true, width: 120 },
    { field: "price", filter: true, width: 150 },
    {
      cellRenderer: params => <Button size="small" color="error" onClick={() => handleDelete(params.data)}>Delete</Button>
    },
  ])

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    getCars()
    .then(data => setCars(data._embedded.cars))
    .catch(error => console.error(error))
  }

  const handleDelete = (params) => {
    if (window.confirm("Are you sure?")) {
      setOpen(true);
      deleteCar(params._links.self.href)
      .then(() => handleFetch())
      .catch(error => console.error(error))
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  return(
    <>
      <AddCar />
      <div className='ag-theme-material' style={{ height: 500 }}>
        <AgGridReact 
          rowData={cars}
          columnDefs={colDefs}
          pagination={true}
          paginationAutoPageSize={true}
          suppressCellFocus={true}
        />
        <Snackbar 
          open={open}
          message="Car deleted"
          autoHideDuration={3000}
          onClose={handleClose}
        />
      </div>
    </>
  );
}

export default CarList;