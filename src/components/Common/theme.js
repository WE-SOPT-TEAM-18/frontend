const deviceSizes = {
  mobile: '360px',
  tablet: '768px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  device,
};

export default theme;
