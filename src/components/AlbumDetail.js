import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { 
        headerContentStyle, 
        imageStyle, 
        imageContainer, 
        titleText,
        albumCover 
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={imageContainer}>
                    <Image 
                        style={imageStyle} 
                        source={{ uri: thumbnail_image }} 
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={titleText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                source={{ uri: image }}
                style={albumCover}
                />
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleText: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginRight: 10
    },
    albumCover: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
