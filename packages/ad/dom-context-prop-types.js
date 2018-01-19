import PropTypes from "prop-types";

export const propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  scriptUris: PropTypes.arrayOf(PropTypes.string),
  globalNames: PropTypes.arrayOf(PropTypes.string),
  init: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any
}

export const defaultProps = {
  scriptUris: [],
  globalNames: [],
  data: {}
}
