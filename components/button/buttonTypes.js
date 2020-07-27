import PropTypes from '../_util/vue-types';
export default () => ({
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']).def('button'),
  icon: PropTypes.any,
  shape: PropTypes.oneOf(['circle', 'circle-outline', 'round']),
  size: PropTypes.oneOf(['small', 'large', 'default']).def('default'),
  loading: PropTypes.func,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  block: PropTypes.bool,
});
