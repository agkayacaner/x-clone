import { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ variant, size, children }) {
  return createElement(
    'button',
    {
      className: classNames(
        'rounded-full flex items-center justify-center font-bold transition-colors',
        {
          'px-4 h-[52px] text-[17px] w-full': size === 'large',
          'px-4 h-8 text-sm': size === 'small',
          'px-4 h-9': size === 'medium',
          'bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white ': variant === 'primary',
          'bg-[#eff3f4] hover:bg-[#d7dbdc] text-black': variant === 'white',
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'white']),
};

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
};
