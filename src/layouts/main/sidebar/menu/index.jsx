import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MainMenu } from '~/utils/consts';
import NewPost from './newPost';
import More from './more';

export default function Menu() {
  return (
    <nav className='mt-0.5 mb-1'>
      {MainMenu.map((link, index) => (
        <NavLink key={index} to={link.path} className='py-[3px] block group'>
          {({ isActive }) => (
            <div
              className={classNames(
                'p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]',
                {
                  'font-bold': isActive,
                }
              )}
            >
              <div className='w-[26.25px] h-[26.25px] relative'>
                {link.notification && (
                  <span className='w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]'>
                    {link?.notification}
                  </span>
                )}
                {!isActive ? (
                  <svg
                    viewBox='0 0 24 24'
                    width={26.25}
                    height={26.25}
                    className='block'
                  >
                    <path fill='#e7e9ea' d={link.passive_icon} />
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 24 24'
                    width={26.25}
                    height={26.25}
                    className='block'
                  >
                    <path fill='#e7e9ea' d={link.acitve_icon}></path>
                  </svg>
                )}
              </div>
              <div className='text-xl pr-4'>{link.name}</div>
            </div>
          )}
        </NavLink>
      ))}

      <More />

      <NewPost />
    </nav>
  );
}
