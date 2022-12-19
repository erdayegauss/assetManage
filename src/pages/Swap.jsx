import React from 'react';
import { Slides, Header } from '../components';


const Swap = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };






  return (


<div className=" body center  rounded-3xl">

<div className='farming-container  m-12 lg:m-0'>

<h1 className='text-xl text-white font-bold'>Brownie Yield Farm</h1>
<div className='flex justify-between pt-1'>
    <p className='text-sm text-white'><strong className='font-bold'>Wallet balance :</strong> 1300 <small className='font-bold'>TETHER</small></p>
    {
            <p className='text-sm text-white font-bold w-20 lg:w-40 truncate'>0x12345</p>

    }
    
</div>

<div className='flex justify-between pt-6 lg:pt-12'>
    <div className='p-3 bg-[#72737D] w-2/5 rounded-md'>
        <p className='text-white'><strong className='font-bold'>Staking balance</strong> 1458 </p>
    </div>
    <div className='p-3 bg-[#72737D] w-2/5 rounded-md'>
        <p className='text-white'><strong className='font-bold'>Reword balance </strong> 1456 </p>
    </div>
</div>

<div className="flex flex-row pt-6">
    <input type="number" placeholder="Type here" value='14' onChange={()=>{}} className="input rounded-l-md" />
    <span className="input-btn-label flex items-center justify-center" >
        <img src='src/logo.svg' width={30} height={30} alt="tether image"/>
        <p className='font-white font-bold'>Tether</p>
    </span>
</div>

<button className='stake' onClick={()=>{}}>STAKE</button>
<button className='un-stake' onClick={()=>{}}>UN-STAKE</button>
<button className='add-tether' onClick={()=>{}}>Add 2TETHER in your account for testing</button>
{
  <button className='p-2 bg-white font-bold w-full rounded-sm ' onClick={()=>{}}>Issue reword</button>

}

</div>
</div>




  );
};
export default Swap;
