import { Popover } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Hizmet Şartları',
    link: '',
  },
  {
    title: 'Gizlilik Politikası',
    link: '',
  },
  {
    title: 'Çerez Politikası',
    link: '',
  },
  {
    title: 'Imprint',
    link: '',
  },
  {
    title: 'Erişilebilirlik',
    link: '',
  },
  {
    title: 'Reklam Bilgisi',
    link: '',
  },
];

export default function Footer() {
  return (
    <footer className='mb-24 px-4 flex flex-wrap gap-x-4 gap-y-2'>
      {links.map((item, index) => (
        <Link
          to={item?.link}
          key={index}
          className='text-[#71767b] leading-4 text-[13px] hover:underline'
        >
          {item.title}
        </Link>
      ))}
      <Popover className='relative'>
        <Popover.Button className='text-[#71767b] leading-4 text-[13px] hover:underline flex items-center outline-none'>
          Daha fazla
          <svg viewBox='0 0 24 24' width={17} height={13}>
            <path
              fill='#71767b'
              d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
            />
          </svg>
        </Popover.Button>
        <Popover.Panel className='absolute grid w-[150px] max-w-[calc(384px)] max-h-[calc(100vh - 228.188px)] bottom-0 -translate-x-14 z-10 bg-black shadow-box rounded-lg overflow-hidden'>
          <Link
            to=''
            className='text-left py-3 px-4 text-[15px] leading-5 transition-colors font-bold hover:bg-[#eff3f41a]'
          >
            Hakkında
          </Link>
          <Link
            to=''
            className='text-left py-3 px-4 text-[15px] leading-5 transition-colors font-bold hover:bg-[#eff3f41a]'
          >
            Durum
          </Link>
          <Link
            to=''
            className='text-left py-3 px-4 text-[15px] leading-5 transition-colors font-bold hover:bg-[#eff3f41a]'
          >
            İşletmeler İçin X
          </Link>
          <Link
            to=''
            className='text-left py-3 px-4 text-[15px] leading-5 transition-colors font-bold hover:bg-[#eff3f41a]'
          >
            Geliştiriciler
          </Link>
        </Popover.Panel>
      </Popover>
      <div className='text-[#71767b] leading-4 text-[13px]'>© 2023 X Corp.</div>
    </footer>
  );
}
