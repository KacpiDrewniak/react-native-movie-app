import {Layout} from '../components/Layout/layout.tsx';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList, Screens} from '../hooks/useNavigation.ts';
import React, {FC} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {QUERY_KEYS} from '../constants/constants.ts';
import {useQuery} from '@tanstack/react-query';
import {getMovieDetails} from '../actions/action.getMovieDetails.ts';
import {height, width} from '../helpers/dimentions.ts';
import {getImageHelper} from '../helpers/getImage.helper.ts';

type VideoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.VideoScreen
>;

export const VideoScreen: FC<VideoScreenProps> = ({
  route: {
    params: {id},
  },
}) => {
  const {data} = useQuery({
    queryKey: [QUERY_KEYS.get_movie_detail, id],
    queryFn: () => getMovieDetails(id),
  });

  return (
    <Layout>
      <Image
        source={{
          uri: getImageHelper(data?.poster_path),
        }}
        style={styles.image}
      />
      <Text style={styles.text}>title: {data?.title}</Text>
      <Text style={styles.text}>original title: {data?.original_title}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    color: 'white',
  },
  image: {
    width,
    height: height / 3,
  },
});
