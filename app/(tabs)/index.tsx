import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MovieButton from '../../components/MovieButton';
import MovieItem, { MovieType } from '../../components/MovieItem';

const movies: MovieType[] = [
  {
    title: 'Inception',
    image: require('../../assets/images/inception.png'),
    cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
    synopsis: 'A thief who steals secrets through dreams and must perform inception.',
  },
  {
    title: 'The Matrix',
    image: require('../../assets/images/matrix.png'),
    cast: 'Keanu Reeves, Laurence Fishburne',
    synopsis: 'A hacker discovers reality is a simulation and fights the system.',
  },
  {
    title: 'Interstellar',
    image: require('../../assets/images/interstellar.png'),
    cast: 'Matthew McConaughey, Anne Hathaway',
    synopsis: 'A space mission to find a new home for mankind through a wormhole.',
  },
];

export default function HomeScreen() {
  const [selected, setSelected] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Top 3 Movies</Text>
      <MovieItem movie={movies[selected]} />
      <View style={styles.buttonContainer}>
        {movies.map((_, index) => (
          <MovieButton
            key={index}
            index={index}
            selected={selected === index}
            onPress={() => setSelected(index)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
});
