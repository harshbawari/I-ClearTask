import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';


function HomeScreen(props) {

  const [urls, setUrls] = useState([
    {
      id: 0,
      link: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'
    },
    {
      id: 1,
      link: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    },
    {
      id: 2,
      link: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    }
  ]);

  const renderVideos = urls.map((url) => {
    console.log('url: ', url);
    return (
      <View key={url.id} style={styles.videoWrapper}>
        <Video
          controls={true}
          repeat={true}
          resizeMode='contain'
          source={{ uri: url.link }}
          paused={true}
          style={styles.videoPlayer}
        />
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      {renderVideos}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  videoWrapper: {
    flex: 1,
    margin: '2%',
    borderWidth: 1,
    borderRadius: 10
  },
  videoPlayer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});