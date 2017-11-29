import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        console.log('Hi this component is working fine');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(error => console.log('error data: ', error));
    }

    renderingAlbumList() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        return (
            <ScrollView>
            {this.renderingAlbumList()}
            </ScrollView>
        );
    }
}
