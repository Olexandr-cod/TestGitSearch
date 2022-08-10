import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import axios from 'axios';
import ButtonDefault from '../../components/UI/ButtonDefault';
import Loader from '../../components/UI/Loader';

const UserList: React.FC = () => {
  const navigation = useNavigation<any>();
  const [dataUser, setDataUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    getUserSearch();
  }, []);

  const getUserSearch = async () => {
    if (searchInput) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${searchInput}`,
        );
        setDataUser(response.data);
      } catch (error) {
        console.error('err', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contantSerching}>
        <TextInput
          placeholder="Search for User"
          style={styles.input}
          onChangeText={text => {
            setSearchInput(text);
          }}
        />
        <ButtonDefault title="Search GitHub user" onPress={getUserSearch} />
      </View>

      {loading && <Loader />}

      {!loading && dataUser && (
        <TouchableOpacity
          style={styles.containerUser}
          onPress={() =>
            navigation.navigate('UserProfile', {
              searchInput,
              dataUser,
            })
          }>
          <View style={styles.blocNameAndAvatar}>
            <Image style={styles.avatar} source={{uri: dataUser.avatar_url}} />
            <Text style={styles.nameText}>{dataUser.login}</Text>
          </View>
          <Text>Repo: {dataUser.public_repos}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserList;
