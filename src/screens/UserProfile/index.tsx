import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SearchRepositories from './components/SearchRepositories';
import UserInfo from './components/UserInfo';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import styles from '../UserList/styles';

const UserProfile: React.FC = () => {
  const route = useRoute<any>();
  const params = route.params.dataUser;
  const paramsUser = route.params;

  const [reposData, setReposData] = useState<any[]>([]);
  const [dataReposFilter, setDataReposFilter] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getUserRepos();
  }, []);

  const getUserRepos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${paramsUser.searchInput}/repos`,
      );
      console.log('response_repos==>', response.data);
      setReposData(response.data);
      setDataReposFilter(response.data);
    } catch (error) {
      console.error('err', error);
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (text: string) => {
    if (text) {
      const newData = reposData.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log('-=-=- newData', newData);
      setDataReposFilter(newData);
    } else {
      setDataReposFilter(reposData);
    }
  };

  return (
    <View style={styles.container}>
      <UserInfo
        avatar={params.avatar_url}
        name={params.name}
        email={params.email}
        date={params.created_at}
        location={params.location}
        followers={params.followers}
        following={params.following}
        biography={params.bio}
      />

      <View style={styles.container}>
        <SearchRepositories
          dataRepos={dataReposFilter}
          loading={loading}
          onSearch={onSearch}
        />
      </View>
    </View>
  );
};

export default UserProfile;
