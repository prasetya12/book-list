import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Row, Col,
    useColorScheme,
    View,
    FlatList
} from 'react-native';

const Dashboard = () => {
    const styles = {
        app: {
            flex: 4, // the number of columns you want to devide the screen into
            marginHorizontal: "auto",
            width: 400
        },
        item: {
            flex: 1,
            maxWidth: "50%", // 100% devided by the number of rows you want
            alignItems: "center",

            // my visual styles; not important for the grid
            padding: 10,
            borderWidth: 1.5,
            borderColor: "#fff",
            display: 'flex',
            flexDirection: 'row',
            gap: 2
        }
    };
    const itemData = [
        {
            icon: (
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri:
                            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
                    }}
                />
            )
        },
        {
            icon: (
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri:
                            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
                    }}
                />
            )
        }]

    const Item = ({ item }) => {
        return (
            <View style={styles.item}>
                <View>
                    <Image source={require('../src/assets/harry-potter.png')} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Harry Potter</Text>
                    <Text style={{ fontSize: 12, fontWeight: 400 }}>J.K Rowling</Text>

                </View>
            </View>
        );
    };
    return (
        <View style={{ padding: 20, backgroundColor: 'white', height: '100%' }}>
            <View >
                <Text style={{ fontSize: 30 }}>My Book </Text>
                <Text style={{ fontSize: 30, fontWeight: '500' }}>Collection</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#E8F3F6', paddingLeft: 20, marginTop: 20, borderRadius: 10 }}>
                <View>
                    <Text style={{ fontSize: 30 }}>32</Text>
                    <Text>Books has read</Text>

                </View>
                <Image source={require('../src/assets/man.png')} style={{ width: 100, height: 100 }} />
            </View>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>All Books</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#F7CA31' }}>View All</Text>

            </View>
            <View>
                <FlatList
                    data={itemData}
                    numColumns={2}
                    renderItem={Item}
                    keyExtractor={(item) => item.alt}
                />
            </View>
        </View>
    )
}

export default Dashboard 