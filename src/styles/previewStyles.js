import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    //backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  settingsContainer: {
    //backgroundColor: 'pink',
    width: '100%',
    flexDirection: 'row-reverse',
  },

  previewContainer: {
    //backgroundColor: 'purple',
  },

  clicksContainer: {
    //backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dwlContainer: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },

  shareContainer: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },

  settingsIcon: {
    //backgroundColor: 'pink',
    opacity: 0.65,
    height: 30,
    width: 30,
    margin: 20,
  },

  previewImg: {
    width: 360,
    height: 360,
  },

  dwlIcon: {
    //backgroundColor: 'grey',
    height: 50,
    width: 50,
    margin: 25,
  },

  shareIcon: {
    //backgroundColor: 'yellow',
    height: 50,
    width: 50,
    margin: 25,
  },

  temp: {
    //backgroundColor: 'yellow',
    height: 15,
    width: 15,
    margin: 2,
  },

  tempCont: {
    flexDirection: 'row',
  },
});
