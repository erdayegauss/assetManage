import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button  from '@mui/material/Button';



function createData(name, apr, strike, maturity, tenor) {
  return { name, apr, strike, maturity, tenor };
}

const rows = [
  createData('16% APR Fixed Earn', '6.0%', "16,670", "12/20/2022", "1d"),
  createData('16% APR Fixed Earn', '9.0%', "16,670", "12/20/2022", "10d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "15d"),
  createData('16% APR Fixed Earn', '3.7%', "16,670", "12/20/2022", "30d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "90d"),
];


const Invest = () => {
 

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

<div className="grid-container">

<Grid container spacing={2}>
        <Grid container lg={12} spacing={4} >

        <TabContext value={value}>
    <Box sx={{ borderBottom: 'none',   borderColor: 'black' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="BTC" value="1" />
        <Tab label="ETH" value="2" />
        <Tab label="Others" value="3" />
      </TabList>
    </Box>
    <TabPanel value="1">
      


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Settle pair</TableCell>
            <TableCell align="left">APR</TableCell>
            <TableCell align="left">Strike Price</TableCell>
            <TableCell align="left">Maturity</TableCell>
            <TableCell align="left">Tenor</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
 
            >
              <TableCell style={{ width: '30%' }} component="th" scope="row" >

<div className="flex-container">
<img style={{ "width": "20%", "padding":"10px"}} src="/img/btc.png" />
  <a>BTC</a>
  <a> === </a>
  <img style={{ "width": "20%", "padding":"10px"}} src="/img/eth.png" />
  <a>ETH</a>
</div>

              
                
              </TableCell>
              <TableCell align="left">{row.apr}</TableCell>
              <TableCell align="left">{row.strike}</TableCell>
              <TableCell align="left">{row.maturity}</TableCell>
              <TableCell align="left">{row.tenor}</TableCell>
              <TableCell align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </TabPanel>
    <TabPanel value="2">Item Two</TabPanel>
    <TabPanel value="3">Item Three</TabPanel>
  </TabContext>
 
        </Grid>


</Grid>
</div>
  );

};
export default Invest;
