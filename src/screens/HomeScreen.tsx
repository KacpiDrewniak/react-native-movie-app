import {FlatList} from 'react-native';
import React, {FC, useState} from 'react';
import {
  getTrendMovies,
  MovieResponse,
} from '../actions/action.getTrendMovies.ts';
import {useInfiniteQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/constants.ts';
import {Layout} from '../components/Layout/layout.tsx';
import {MovieItem} from '../components/Movie/Movie.tsx';
import {SearchBar} from 'react-native-elements';
import {Loading} from '../components/Loading/Loading.tsx';
import {getExtractorKey} from '../helpers/getExtractorKey.helper.ts';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {
  RootStackParamList,
  Screens,
  useNavigation,
} from '../hooks/useNavigation.ts';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.HomeScreen
>;

export const HomeScreen: FC<HomeScreenProps> = () => {
  const {navigate} = useNavigation();

  const [search, setSearch] = useState('');

  const {data, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery<MovieResponse>({
      queryKey: [QUERY_KEYS.get_movies],
      queryFn: ({pageParam = 1}) => getTrendMovies(pageParam),
      getNextPageParam: lastPage => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return lastPage.page;
      },
    });

  const loadMore = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  const movies = data?.pages.map(page => page.results).flat();

  return (
    <Layout>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        searchIcon={() => <></>}
        placeholder="Find your favourite movie"
      />
      <FlatList
        data={movies?.filter(e => e.original_title.includes(search))}
        renderItem={({item}) => (
          <MovieItem
            item={item}
            onPress={() => {
              navigate(Screens.VideoScreen, {id: item.id});
            }}
          />
        )}
        onEndReached={loadMore}
        keyExtractor={getExtractorKey}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          isFetchingNextPage && !search.length ? <Loading /> : null
        }
      />
    </Layout>
  );
};
