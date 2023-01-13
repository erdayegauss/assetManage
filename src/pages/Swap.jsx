import React from 'react';
import { Slides, Header, Button } from '../components';
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import TabPanel from '@mui/lab/TabPanel';


const Swap = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };



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


    <div className=" center  dark1" >





      <TabContext value={value}>
        <Box sx={{ borderBottom: 'none', padding: '2%',  }}>

          <Tabs onChange={handleChange} aria-label="Tabs">
            <Tab style={{"color":"white",}} label="uniswap" value="1" />
            <Tab style={{"color":"white",}} label="quickswap" value="2" />
          </Tabs>
          <TabPanel value="1">




            <div style={{ padding: "10px" }}>
              <iframe frameBorder="0" style={{ padding: "10px", marginLeft: "auto", marginRight: "auto", border: 0, }} src="https://app.uniswap.org/#/swap" height="800" width="90%" title="The defi page"></iframe>
            </div>



          </TabPanel>
          <TabPanel value="2">



            <div style={{ padding: "10px" }}>
              <iframe frameBorder="0" style={{ padding: "10px", marginLeft: "auto", marginRight: "auto", border: 0, }} src="https://quickswap.exchange/#/swap?swapIndex=0&currency0=ETH" height="800" width="90%" title="The defi page"></iframe>
            </div>

          </TabPanel>

        </Box>
      </TabContext>


    </div>




  );
};
export default Swap;
