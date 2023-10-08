import React from 'react';
import Button from '~/components/button';

export default function Premium() {
  return (
    <section className='bg-[#16181c] mb-4 rounded-2xl border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]'>
      <h6 className='text-xl font-extrabold leading-6'>Premium'a Abone Ol</h6>
      <p className='text-[15px] font-bold'>
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className='self-start'>
        <Button>Abone Ol</Button>
      </div>
    </section>
  );
}
