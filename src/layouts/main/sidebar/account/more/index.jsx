import classNames from 'classnames';
import React from 'react';
import { setCurrentAccount } from '~/store/auth/actions';
import { useAccount, useAccounts } from '~/store/auth/hooks';

export default function More({ close }) {
  const currentAccount = useAccount();
  const accounts = useAccounts();
  return (
    <div>
      {accounts.map((account, index) => (
        <button
          onClick={() => setCurrentAccount(account) & close()}
          disabled={account.id === currentAccount.id}
          key={index}
          className={classNames(
            'py-3 px-4 flex text-left transition-colors w-full items-center',
            {
              'hover:bg-[#eff3f41a]': account.id !== currentAccount.id,
            }
          )}
        >
          <img
            src={account.avatar}
            alt={account.username}
            className='w-10 h-10 rounded-full'
          />
          <div className='mx-3 flex-1 text-[15px]'>
            <h6 className='font-bold leading-[20px]'>{account.fullName}</h6>
            <div className='text-[#71767b]'>@{account.username}</div>
          </div>
          {currentAccount.id === account.id && (
            <svg
              viewBox='0 0 24 24'
              width={18.75}
              height={18.75}
              className='mr-2 ml-3'
            >
              <path
                fill='#00ba7c'
                d='M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z'
              />
            </svg>
          )}
        </button>
      ))}
      <div className='h-px bg-[#2f3336]'></div>
      <button className='py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[15px] text-[#e7e9ea] font-bold'>
        Var olan bir hesap ekle
      </button>
      <button className='py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[15px] text-[#e7e9ea] font-bold'>
        Hesapları yönet
      </button>
      <button className='py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[15px] text-[#e7e9ea] font-bold'>
        <div className='max-w-[228px]'>
          @{currentAccount.username} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
}
