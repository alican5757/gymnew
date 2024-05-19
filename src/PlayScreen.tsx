import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const gray = '#91A1BD';
export default function PlayScreen() {
    

    const NeuMorph = ({ children, size, style }) => {
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View 
                        style={[
                            styles.inner,
                            { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
                            style
                        ]}
                    >
                        {children}
                    </View>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 32, paddingVertical: 32, width: '100%' }}>
                <View style={styles.topContainer}>
                    <NeuMorph>
                        <Icon name="arrowleft" size={20} color={gray} />
                    </NeuMorph>
                    <Text style={styles.playing}>PLAYING NOW</Text>
                    <NeuMorph>
                        <Entypo name="menu" size={24} color={gray} />
                    </NeuMorph>
                </View>
            </View>
        </SafeAreaView>
    );
}








const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE9FD',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    playing: {
        fontWeight: '800',
        color: gray,
    },
    inner: {
        backgroundColor: "#DEE9F7",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#E2ECFD",
        borderWidth: 1,
    },
    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF",
    },
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD",
    },
    neuMorphStyle: {
        // Add any additional styles here if needed
    },
});

