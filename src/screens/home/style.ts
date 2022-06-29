import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  heading: {
    left: '10%',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: '7%',
  },
  txtinput: {
    padding: 10,
    height: '7%',
    width: '90%',
    borderRadius: 8,
    marginHorizontal: '5%',
    backgroundColor: '#e7e6ec',
  },
  Card: {
    marginTop: '5%',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  cardTitle: {
    width: '50%',
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  networkimg: {
    width: '100%',
    height: '100%',
  },
  emptyListimg: {
    width: 300,
    height: 300,
    marginTop: '20%',
    alignSelf: 'center',
  },
  backToTop: {
    height: 50,
    marginRight: 15,
    borderRadius: 30,
    marginLeft: '80%',
    position: 'absolute',
    alignItems: 'center',
    marginTop: height - 90,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cardImg: {
    height: 190,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default styles;
