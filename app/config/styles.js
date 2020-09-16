import colors from './colors';

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    padding: 10,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //fontFamily: 'roboto-regular',
  },
  flashMessage: {
    position: 'bottom',
    floating: true,
  },
};
