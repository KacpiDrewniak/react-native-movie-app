import {
  GestureResponderEvent,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Movie} from '../../actions/action.getTrendMovies.ts';
import {getImageHelper} from '../../helpers/getImage.helper.ts';
import React, {FC} from 'react';
import {styles} from './Movie.styled.ts';
import {Screens, useNavigation} from '../../hooks/useNavigation.ts';

interface MovieProps {
  item: Movie;
  onPress: (event: GestureResponderEvent) => void;
}

export const MovieItem: FC<MovieProps> = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: getImageHelper(item.poster_path)}}
    />
    <View style={styles.content}>
      <Text style={styles.text}>{item.original_title}</Text>
      <Text style={styles.text}>Release date: {item.release_date}</Text>
    </View>
  </TouchableOpacity>
);
