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



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('16% APR Fixed Earn', '10d', "6.0%", 24, 4.0),
  createData('16% APR Fixed Earn', '10d', "9.0%", 37, 4.3),
  createData('16% APR Fixed Earn', '10d', "16.0%", 24, 6.0),
  createData('16% APR Fixed Earn', '10d', "3.7%", 67, 4.3),
  createData('16% APR Fixed Earn', '90d', "16.0%", 49, 3.9),
];


const Earn = () => {
 

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

<div className="grid-container">

<Grid container spacing={2}>
        <Grid container lg={8} spacing={4} >

        <TabContext value={value}>
    <Box sx={{ borderBottom: 'none',   borderColor: 'black' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Fixed Tenor" value="1" />
        <Tab label="Customize" value="2" />
        <Tab label="Customize" value="3" />
      </TabList>
    </Box>
    <TabPanel value="1">
      


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Tenor</TableCell>
            <TableCell align="left">APR</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
 
            >
              <TableCell style={{ width: '70%' }} component="th" scope="row" >

<div className="flex-container">
<img style={{ "width": "8%", "padding":"10px"}} src="/img/btc.png" />
  <a>{row.name}</a>
  <img style={{ "width": "30%", "padding":"10px"}} src="/img/banner1.png" />

</div>

              
                
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
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


        <Grid container lg={4} spacing={4}>


        <div style={{ "width": "100%","height": '80px', "padding":"10px",}}></div>

                                <div>
                                    <div style={{ "width": "100%", "padding":"10px",}}>
                                      <img style={{"float": "right", "width": "20%",}} src="/img/banner1.png" alt=""  />
                                        <div ><img alt="BTC" style={{"float": "left"}} src="/img/btc.png" width="24" /><a style={{"font-size": "10px",}}>16% APR Fixed</a></div>
                                        <div class="content___dedjR">
                                                <div className="parent" >
                                                    <div><span>16.00%</span></div>
                                                    <div>10d</div>
                                                </div>
                                                <div className="parent" style={{"font-size": "10px",}}>
                                                    <div>APR</div>
                                                    <div>Tenor</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div style={{"width": "100%", "padding":"10px",}}>
                                      <img style={{"float": "right", "width": "20%",}} src="/img/banner1.png" alt=""  />
                                        <div ><img alt="BTC" style={{"float": "left"}} src="/img/btc.png" width="24" /><a style={{"font-size": "10px",}}>16% APR Fixed</a></div>
                                        <div class="content___dedjR">
                                                <div className="parent" >
                                                    <div><span>16.00%</span></div>
                                                    <div>10d</div>
                                                </div>
                                                <div className="parent" style={{"font-size": "10px",}}>
                                                    <div>APR</div>
                                                    <div>Tenor</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{"width": "100%", "padding":"10px",}}>
                                      <img style={{"float": "right", "width": "20%",}} src="/img/banner1.png" alt=""  />
                                        <div ><img alt="BTC" style={{"float": "left"}} src="/img/btc.png" width="24" /><a style={{"font-size": "10px",}}>16% APR Fixed</a></div>
                                        <div class="content___dedjR">
                                                <div className="parent" >
                                                    <div><span>16.00%</span></div>
                                                    <div>10d</div>
                                                </div>
                                                <div className="parent" style={{"font-size": "10px",}}>
                                                    <div>APR</div>
                                                    <div>Tenor</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>


        </Grid>
</Grid>
</div>
  );

};
export default Earn;
