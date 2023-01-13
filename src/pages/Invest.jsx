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
import Button from '@mui/material/Button';



function createData(name, apr, strike, maturity, tenor) {
  return { name, apr, strike, maturity, tenor };
}

const rows = [
  createData('16% APR Fixed Earn', '6.0%', "16,670", "12/20/2022", "1d"),
  createData('16% APR Fixed Earn', '9.0%', "16,670", "12/20/2022", "10d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "15d"),
  createData('16% APR Fixed Earn', '3.7%', "16,670", "12/20/2022", "30d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "90d"),
  createData('16% APR Fixed Earn', '6.0%', "16,670", "12/20/2022", "1d"),
  createData('16% APR Fixed Earn', '9.0%', "16,670", "12/20/2022", "10d"),
];


const Invest = () => {


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className="grid-container">

      <Grid container spacing={2}>
        <Grid container lg={12} spacing={4} style={{ paddingLeft: "3%", }}>


          <TabContext value={value} >
            <Box sx={{ borderBottom: 'none', borderColor: 'black', }}>
              <div style={{ color: "white", "padding": "1px", "fontSize": 20, "fontWeight": 600, }}>
                Instruments:
              </div>
              <TabList onChange={handleChange} aria-label="lab API tabs example" >
                <Tab style={{ width: "3%", color: "white" }} label="BTC" value="1" icon={<img src="/img/btc.png" width="50%" />} iconPosition="start" ></Tab>
                <Tab style={{ width: "3%", color: "white" }} label="ETH" value="2" icon={<img src="/img/eth.png" width="50%" />} iconPosition="start" ></Tab>
                <Tab style={{ width: "3%", color: "white" }} label="Others" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">

              <div style={{ color: "white", "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ color: "white", "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "100%",
                background: "#02c8a80d",
                color: "white",
              }} >
                <div style={{"fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li >Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive BTC</li>
              </div>


              <TableContainer component={Paper}>
                <Table sx={{ color: "wheat", backgroundColor: "#0b2233", minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow >
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }}>Settle pair</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">APR</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Strike Price</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Maturity</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Tenor</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400, width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/btc.png" />
                            <a>BTC</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.apr}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.strike}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.maturity}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.tenor}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>


            </TabPanel>

            <TabPanel value="2">

      
            <div style={{ color: "white", "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ color: "white", "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "100%",
                background: "#02c8a80d",
                color: "white",
              }} >
                <div style={{"fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li >Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive ETH</li>
              </div>


              <TableContainer component={Paper}>
                <Table sx={{ color: "wheat", backgroundColor: "#0b2233", minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow >
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }}>Settle pair</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">APR</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Strike Price</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Maturity</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Tenor</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400, width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/eth.png" />
                            <a>ETH</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.apr}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.strike}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.maturity}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.tenor}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </TabPanel>

            <TabPanel value="3">

            <div style={{ color: "white", "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ color: "white", "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "100%",
                background: "#02c8a80d",
                color: "white",
              }} >
                <div style={{"fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li >Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive ETH</li>
              </div>


              <TableContainer component={Paper}>
                <Table sx={{ color: "wheat", backgroundColor: "#0b2233", minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow >
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }}>Settle pair</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">APR</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Strike Price</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Maturity</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">Tenor</TableCell>
                      <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400, width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/btc.png" />
                            <a>ETH</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.apr}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.strike}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.maturity}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left">{row.tenor}</TableCell>
                        <TableCell style={{ color: "white", fontSize: 16, fontWeight: 400 }} align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </TabPanel>

          </TabContext>

        </Grid>


      </Grid>
    </div>
  );

};
export default Invest;