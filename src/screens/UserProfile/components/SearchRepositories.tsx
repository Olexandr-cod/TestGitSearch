import React, {useCallback} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Linking,
} from 'react-native';
import Loader from '../../../components/UI/Loader';
import styles from './styles';

interface SearchRepositoriesProps {
  dataRepos: any;
  loading: boolean;
  onSearch: (text: string) => void;
}
const SearchRepositories: React.FC<SearchRepositoriesProps> = ({
  dataRepos,
  loading,
  onSearch,
}) => {
  const RenderReposGitHub = useCallback(({data}: any) => {
    return (
      <TouchableOpacity
        style={styles.containerUser}
        onPress={() => Linking.openURL(data.html_url)}>
        <Text style={styles.nameText}>{data.name}</Text>
        <View>
          <Text>{data.forks} Forks</Text>
          <Text>{data.stargazers_count} Start</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for User's Repositories"
        style={styles.input}
        onChangeText={text => {
          onSearch(text);
        }}
      />

      {!loading && dataRepos.length === 0 && (
        <View style={styles.noFoundText}>
          <Text>No found</Text>
        </View>
      )}
      {loading && <Loader />}

      <FlatList
        data={dataRepos}
        showsVerticalScrollIndicator={false}
        style={styles.listRepos}
        keyExtractor={key => key.id}
        renderItem={({item}) => <RenderReposGitHub data={item} />}
      />
    </View>
  );
};

export default SearchRepositories;
