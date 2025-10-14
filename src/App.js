import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

const data = [
    { id: '1', title: 'Do Hard Things if You Want an Easy Life', author: 'Saurav Mandal', clapCount: 191000, commentCount: 752, imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', title: 'The AI Bubble Is About To Burst', author: 'Will Lockett', clapCount: 13400, commentCount: 449, imageUrl: 'https://via.placeholder.com/150' },
    // Add additional data items here
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.articleContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>By {item.author}</Text>
              <View style={styles.statsContainer}>
                <Text style={styles.stats}>{item.clapCount} claps</Text>
                <Text style={styles.stats}>{item.commentCount} comments</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  articleContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  textContainer: {
    flex: 2,
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  stats: {
    marginRight: 10,
    fontSize: 12,
    color: '#999',
  },
});

export default App;