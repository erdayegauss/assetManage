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



const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
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
        <Grid container lg={7} spacing={4} >




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

          <iframe src="https://bitcoinwisdom.io/markets/binance/btcusdt" position="absolute" height="600vh" width="1100vh" title="Iframe Example"></iframe>


        </Grid>


        <Grid container lg={4.9} spacing={4}>



        <Tabs value={value2} onChange={handleChange2}  style={{"width": "100%", "height": "40px"}} >
            <Tab label="Limit" />
            <Tab label="Market" />
            <Tab label="Stop-limit" />
          </Tabs>




            <Grid container lg={5 } spacing={4} >





              <div className=''>
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

          <Button variant="contained" style={{ backgroundColor: "green", height: "40px", width: "80%", "padding": "10px" }} > BUY</Button>

            </Grid>
          
            <Grid container lg={5 } spacing={4} >


            <li className='ratio-li'>11%</li>
              <li className='ratio-li'>24%</li>
              <li className='ratio-li'>50%</li>
              <li className='ratio-li'>75%</li>
              <li className='ratio-li'>100%</li>


              <Button variant="contained" style={{ backgroundColor: "red", height: "40px", width: "80%", "padding": "10px" }} > sell</Button>


            </Grid>          
              <Stack >

            <li className='ratio-li'>10%</li>
              <li className='ratio-li'>25%</li>
              <li className='ratio-li'>50%</li>
              <li className='ratio-li'>75%</li>
              <li className='ratio-li'>100%</li>

              </Stack>
          <div >


          </div>

          <span class="ellipsis" style={{ "color": "gray", fontSize: "14" }}>Spot trading fee rate:&nbsp; 0.05%</span>

          <div class="flex" style={{ "width": "100%", "justify-content": "center", }} >
            <a>&emsp;&emsp;</a>

          </div>
        </Grid>
      </Grid>
    </div>
  );

};
export default Spot;
