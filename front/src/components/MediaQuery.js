import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/**
 * Handle content to display depending on the type of device
 * @param {*} param0
 */
const MediaQuery = ({ type, children }) => {
  const theme = useTheme();

  const types = {
    desktopScreen: useMediaQuery(theme.breakpoints.up('md')),
    desktopAndTablet: useMediaQuery(theme.breakpoints.up('sm')),
    tabletScreen: useMediaQuery(theme.breakpoints.only('sm')),
    mobileAndTablet: useMediaQuery(theme.breakpoints.down('sm')),
    mobileScreen: useMediaQuery(theme.breakpoints.down('xs')),
  };

  return ((Object.keys(types).includes(type) && types[type]) ? children : null);
};

export default MediaQuery;
