import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import SellIcon from '@mui/icons-material/Sell';
import PhoneIcon from '@mui/icons-material/Phone';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



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


const Spot = () => {


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState('1');
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };

  const [value2, setValue2] = React.useState('1');
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (

    <div className="grid-container">

      <Grid container spacing={2}>
        <Grid container lg={8} spacing={4} >


          <TabContext value={value}>
            <Box sx={{ borderBottom: 'none', padding: '2%' }}>

              <Tabs onChange={handleChange} aria-label="Tabs">
                <Tab label="Spot" value="1" />
                <Tab label="Margin" value="2" />
              </Tabs>
              <TabPanel value="1">

                <div className='spot-container' style={{ "padding": "1px", "backgroundColor": "white", "opacity": "40%", "height": "80px" }}>
                  <p>BTC/USDT@</p>
                  <p>&emsp;&emsp;&emsp;</p>
                  <p>16,678</p>
                  <p>&emsp;&emsp;&emsp;</p>
                  <p><ul class="no-bullets">24h Change</ul><ul class="no-bullets">5%</ul></p>
                  <p>&emsp;&emsp;&emsp;</p>
                  <p><ul class="no-bullets">24h High</ul><ul class="no-bullets">16,789</ul></p>
                  <p>&emsp;&emsp;&emsp;</p>

                  <p><ul class="no-bullets">24h Low</ul><ul class="no-bullets">16,660</ul></p>

                </div>

                <iframe src="https://bitcoinwisdom.io/markets/binance/btcusdt" position="absolute" height="600vh" width="180%" title="Iframe Example"></iframe>


              </TabPanel>
              <TabPanel value="2">for margin</TabPanel>

            </Box>

          </TabContext>

        </Grid>


        <Grid container lg={3.8} spacing={4}>
          <TabContext value={value1}>
            <div style={{ "padding": "50px" }}></div>

            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <div style={{ "fontSize": "100" }} className='flex'>Place an Order: </div>
              <AppBar position="static">
                <Tabs value={value1} onChange={handleChange1} indicatorColor="secondary"
                  textColor="inherit" centered >
                  <Tab icon={<PhoneIcon />} label="Buy"> </Tab>
                  <Tab icon={<SellIcon />} label="Sell" />

                </Tabs>
              </AppBar>
            </Box>
            <TabPanel value="3">


            </TabPanel>
            <TabPanel value="4"></TabPanel>
          </TabContext>

          <Tabs value={value2} onChange={handleChange2} centered >
            <Tab label="Limit" />
            <Tab label="Market" />
            <Tab label="Stop-limit" />
            <Tab label="GTC" />
          </Tabs>


          <div className='spot-container1'>
            <p> Order Price: &emsp;</p>




            <div class="flex " style={{ "align-items": "center", "height": "50px", "box-sizing": "border-box" }}>

              <TextField
                id="input-with-icon-textfield"
                label=""
                variant="filled"
                sx={{
                  alignItems: "center",
                  ".MuiOutlinedInput-root": {
                    flexDirection: "row"
                  },
                  img: {
                    paddingRight: "1rem"
                  }
                }}
                InputProps={{
                  startAdornment: <img src="/img/tether.png" width="40" />,
                }}
                placeholder="Price..."
              />

            </div>
          </div>





          <div className='spot-container1'>
            <p> Amount:&emsp;&emsp;&emsp;</p>

            <TextField
              id="input-with-icon-textfield"
              label=""
              variant="filled"
              sx={{
                alignItems: "center",
                ".MuiOutlinedInput-root": {
                  flexDirection: "row"
                },
                img: {
                  paddingRight: "1rem"
                }
              }}
              InputProps={{
                startAdornment: <img src="/img/btc.png" width="40" />
              }}
              placeholder="Amount"
            />

            <a>&emsp;&emsp;</a>


            <TextField
              id="input-with-icon-textfield"
              label=""
              variant="filled"
              sx={{
                alignItems: "center",
                ".MuiOutlinedInput-root": {
                  flexDirection: "row"
                },
                img: {
                  paddingRight: "1rem"
                }
              }}
              InputProps={{
                startAdornment: <img src="/img/tether.png" width="40" />
              }}
              placeholder="total"
            />

          </div>


          <div >
            <Stack direction="row" spacing={6}>
              <></>
              <li className='ratio-li'>10%</li>
              <li className='ratio-li'>25%</li>
              <li className='ratio-li'>50%</li>
              <li className='ratio-li'>75%</li>
              <li className='ratio-li'>100%</li>

            </Stack>

          </div>

          <span class="ellipsis" style={{ "color": "gray", fontSize: "14" }}>Spot trading fee rate:&nbsp; 0.05%</span>

          <div style={{ "width": "100%", "justify-content": "center", }} >
            <Button variant="contained" style={{ width: "100%" }} centered> BUY</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );

};
export default Spot;
