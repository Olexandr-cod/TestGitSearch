import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contantSerching: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'silver',
    padding: 15,
  },
  errorText: {
    color: 'red',
  },
  containerUser: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  blocNameAndAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    paddingLeft: 20,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  containerListUser: {
    marginBottom: 20,
  },
});
