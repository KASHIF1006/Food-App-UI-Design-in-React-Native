import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';


export default function Details( { navigation, route } ) {
  
    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientItemWrapper, {
                marginLeft: item.id === '1' ? 20 : 0
            }]}>
                <Image style={styles.ingredientImage} source={item.image}/>
            </View>
        )
    }

    return (
    <View style={styles.container}>
        {/* HEADER */}
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name='chevron-left' size={12} color={colors.textDark} />
                    </View>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name='star' size={12} color={colors.white} />
                </View>
            </View>
        </SafeAreaView>
        {/* TITLES */}
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        {/* PRICES */}
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>$ {item.price}</Text>
        </View>
        {/* PIZZA INFORMATION */}
        <View style={styles.infoWrapper}>
            <View style={styles.infoLeftWrapper}>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Size</Text>
                    <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Crust</Text>
                    <Text style={styles.infoItemText}>{item.crust}</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Delivery in</Text>
                    <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
                </View>
            </View>
            <View>
                <Image style={styles.itemImage} source={item.image}/>
            </View>
        </View>
        {/* INGREDIENTS */}
        <View style={styles.ingredientsWrapper}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            <View style={styles.ingredientsListWrapper}>
                <FlatList 
                    data={item.ingredients}
                    renderItem={renderIngredientsItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
        {/* PLACE AN ORDER BUTTON */}
        <TouchableOpacity onPress={() => alert("Your order has been Placed!")}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>Place an order</Text>
                <Feather name="chevron-right" size={18} color={colors.black} />
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    titleWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        width: '60%',
        fontSize: 32
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32
    },
    infoWrapper: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoLeftWrapper: {
        paddingLeft: 20
    },
    infoItemWrapper: {
        marginBottom: 20
    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight
    },
    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft:50
    },
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain'
    },
    orderWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        fontSize: 14,
        marginRight: 10
    }
})