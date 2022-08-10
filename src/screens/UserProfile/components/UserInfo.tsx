import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {format} from 'date-fns';

interface UserInfoProps {
  avatar: string;
  name: string;
  email: string;
  date: string;
  location: string;
  followers: number;
  following: number;
  biography: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  avatar,
  name,
  email,
  date,
  location,
  followers,
  following,
  biography,
}) => {
  return (
    <View>
      <View style={styles.contantInfo}>
        <Image style={styles.avatar} source={{uri: avatar}} />
        <View style={styles.contantInfoText}>
          {!!name && <Text>{name}</Text>}
          {!!email && <Text>{email}</Text>}
          {!!location && <Text>{location}</Text>}
          <Text>{format(new Date(date), 'MMM dd, yyyy')}</Text>
          {!!followers && <Text>{followers} Followers</Text>}
          {!!following && <Text>Following {following}</Text>}
        </View>
      </View>
      {biography ? (
        <Text style={styles.biografy}>{biography}</Text>
      ) : (
        <Text style={styles.biografy}>Наразі bio немає</Text>
      )}
    </View>
  );
};

export default UserInfo;
