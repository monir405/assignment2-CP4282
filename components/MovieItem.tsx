import React from 'react';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';

export type MovieType = {
  title: string;
  image: any;
  cast: string;
  synopsis: string;
};

export default function MovieItem({ movie }: { movie: MovieType }) {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>{movie.title}</Text>
      <Image source={movie.image} style={styles.image} />
      <Text style={[styles.label, { color: textColor }]}>Cast:</Text>
      <Text style={{ color: textColor }}>{movie.cast}</Text>
      <Text style={[styles.label, { color: textColor }]}>Synopsis:</Text>
      <Text style={{ color: textColor }}>{movie.synopsis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 20, marginVertical: 10 },
  image: { width: 300, height: 400, resizeMode: 'cover', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 10 },
});
