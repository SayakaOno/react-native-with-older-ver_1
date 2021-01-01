import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from '../components/AlbumDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        setAlbums(response.data);
      });
  }, []);

  const renderAlbums = () => {
    return albums.map(album => <AlbumDetail key={album.title} album={album} />);
  };

  return <View>{renderAlbums()}</View>;
};

export default AlbumList;
