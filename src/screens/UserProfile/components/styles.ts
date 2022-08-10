import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  avatar: {
    height: 130,
    width: 150,
  },
  contantInfoText: {
    marginLeft: 20,
  },
  biografy: {
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'silver',
    padding: 15,
    margin: 10,
  },
  containerUser: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  blocNameAndAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noFoundText: {
    alignItems: 'center',
    paddingTop: 20,
  },
  nameText: {
    paddingLeft: 20,
  },
  listRepos: {
    marginBottom: 20,
    flex: 1,
  },
});
