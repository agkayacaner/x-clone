import { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ size, children }) {
  return createElement(
    'button',
    {
      className: classNames(
        'bg-[#1d9bf0] rounded-full flex items-center text-white justify-center font-bold hover:bg-[#1a8cd8] transition-colors',
        {
          'px-4 h-[52px] text-[17px] w-full': size === 'large',
          'px-4 h-9': size === 'medium',
          'px-3 h-8': size === 'small',
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  size: 'medium',
};
