import React from 'react';

const StrategicGoals = () => (
  <section className='py-28 bg-white '>
    <h2 className='text-2xl text-[#385013] font-bold text-center'>STRATEGIC GOALS</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-6 mt-8 '>
      <div className='col-span-1'></div>
      <div className='bg-gray-100 p-6 rounded-lg col-span-3 shadow-md'>
        <h3 className='text-xl text-[#385013] font-semibold mb-4'>Digitisation</h3>
        <p>Implementing advances in the digitisation of systems and processes, particularly in the agricultural sector. Use new technologies and machinery to gain more information and control over agricultural processes.</p>
      </div>
      <div className='bg-gray-100 p-6 rounded-lg col-span-3 shadow-md'>
        <h3 className='text-xl text-[#385013] font-semibold mb-4'>Quality and Transparency</h3>
        <p>Focuses on the quality and control of products. Nafosa's laboratories are recognized worldwide in the animal feed industry. Offering services to producers and farmers to control their forages.</p>
      </div>
      <div className='bg-gray-100 p-6 rounded-lg col-span-3 shadow-md'>
        <h3 className='text-xl text-[#385013] font-semibold mb-4'>Sustainability and Revitalisation</h3>
        <p>Committed to revitalizing rural environments and decentralizing from urban to rural areas. Emphasizes sustainable development, the use of clean energies, and the renewal of agricultural equipment.</p>
      </div>
    </div>
  </section>
);

export default StrategicGoals;
