import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft, Receipt21 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { BlogList } from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';

const BlogDetail = ({ route }) => {
    const { blogId } = route.params;
    const selectedBlog = BlogList.find(blog => blog.id === blogId);
    const navigation = useNavigation();

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft
                            color={colors.grey(0.6)}
                            variant="Linear"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 24,
                        paddingTop: 62,
                        paddingBottom: 54,
                    }}>

                    <View style={styles.Box}>
                        <Text style={styles.title}>{selectedBlog.title}</Text>
                    </View>
                    <View style={styles.aboutUsContainer}>
                        <View style={styles.aboutUsBox}>
                            <Text style={styles.content}>{selectedBlog.content}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomBar}>
                </View>
            </View>
        </View>
    );
};
export default BlogDetail;
const styles = StyleSheet.create({
    Box: {
        borderWidth: 1,
        borderColor: colors.blue(0.5),
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.blue(0.5),
        margin: 2,
        fontSize: 14,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
        textAlign: 'center',
        lineHeight: 20,
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        flex: 1,
    },
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header: {
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        paddingTop: 8,
        paddingBottom: 4,
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: colors.white(),
    },
    bottomBar: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: colors.white(),
        paddingVertical: 14,
        paddingHorizontal: 60,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    aboutUsContainer: {
        paddingHorizontal: 24,
        marginTop: 20,
    },
    aboutUsBox: {
        borderWidth: 1,
        borderColor: colors.black(),
        borderRadius: 10,
        padding: 5,
    },
    image: {
        height: 20,
        width: 300,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 16,
    },

    title: {
        fontSize: 16,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
        textAlign: 'center',
        marginTop: 1,
    },
    content: {
        color: colors.grey(),
        fontFamily: fontType['Pjs-Medium'],
        fontSize: 10,
        lineHeight: 20,
        marginTop: 15,
    },
});