import React from 'react';
import { Slides, Header, Button } from '../components';
import Divider from '@mui/material/Divider';


const Swap = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };






  return (


<div className=" body center  rounded-3xl">

<div className='farming-container  m-12 lg:m-0'>

<h1 className='text-xl text-white font-bold'>Metaharvest Swap</h1>
<div className='flex justify-between pt-1'>
    
</div>

<div className='flex justify-between pt-6 lg:pt-12'>
    <div className='p-3 bg-[#72737D] w-2/5 rounded-md'>
        <p className='text-white'><strong className='font-bold'>BTC balance</strong> 10 </p>
    </div>
    <div className='p-3 bg-[#72737D] w-2/5 rounded-md'>
        <p className='text-white'><strong className='font-bold'>USDT balance </strong> 14560 </p>
    </div>
</div>

<div className="flex flex-row pt-6">
    <input type="number" placeholder="Type here" value='0' onChange={()=>{}} className="input rounded-l-md" />
    <span className="input-btn-label flex items-center justify-center" >
    <button>
      <div className="flex items-center justify-center">
        <img src='/img/btc.png' width={30} height={30} alt="tether image"/>
        <p className='font-white font-bold'>BTC</p>
      </div>
    </button>
    </span>
</div>

<div style={{padding: "10px", color: "white"}} >
          <Divider   flexItem>
    <div className='flex items-center justify-center'>
    <img src="/img/swap.png" width="40%" />
    </div>
  </Divider>
  </div>


<div className="flex flex-row pt-6">
    <input type="number" placeholder="Type here" value='0' onChange={()=>{}} className="input rounded-l-md" />
    <span className="input-btn-label flex items-center justify-center" >
      <button>
      <div className="flex items-center justify-center" >
        <img src='/img/tether.png' width={30} height={30} alt="tether image"/>
        <p className='font-white font-bold'>Tether</p>
        </div>
        </button>
    </span>
</div>

<div style={{"padding":"40px"}}>
<button className='stake'  onClick={()=>{}}>SWAP</button>
</div>


</div>
</div>




  );
};
export default Swap;
