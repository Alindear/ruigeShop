import React, { useState } from "react";
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		des:"用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程",
		img:"https://reactnative.dev/docs/assets/p_cat2.png"
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		des:"用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程",
		img:"https://reactnative.dev/docs/assets/p_cat2.png"
	},
	{
		id: "121158694a0f-3da1-471f-bd96-145571e29d72",
		des:"用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程",
		img:"https://reactnative.dev/docs/assets/p_cat2.png"
	},
	{
		id: "1113ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		des:"用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程",
		img:"https://reactnative.dev/docs/assets/p_cat2.png"
	},
	{
		id: "11158694a0f-3da1-471f-bd96-145571e29d72",
		des:"用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程",
		img:"https://reactnative.dev/docs/assets/p_cat2.png"
	},

];

const Item = ({ item, onPress, style, index }) => (
	<TouchableOpacity onPress={onPress} style={styles.container}>
		<View style={[styles.item,styles.container_left,style]}>
			<View style={styles.video_image}>
				<Image source={{
					uri: item.img,
				}}
				style={styles.image_icon_left}/>
			</View>
			<Text numberOfLines={2}
				ellipsizeMode = 'tail' style={styles.video_title}>
				{/* 用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程 */}
				{index}{item.des}
			</Text>
			<Text style={styles.video_des}>
            匿名
			</Text>
		</View>
		<View style={[styles.item,styles.container_right,style]}>
			<View style={styles.video_image}>
				<Image source={require("./shan.jpg")}
					style={styles.image_icon_left}/>
			</View>
			<Text numberOfLines={2}
				ellipsizeMode = 'tail' style={styles.video_title}>
				{/* 用于显示多种不同类型图片的！演示了如何显示从本地缓存、网络甚至是以，好多人要求看过程 */}
				{index}
			</Text>
			<Text style={styles.video_des}>
            匿名
			</Text>
		</View>
	</TouchableOpacity>
);

const App = () => {
	const [selectedId, setSelectedId] = useState(null);

	const renderItem = ({ item,index }) => {
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
		const width = "46%";
		const margin = "2%";
		// const flexDirection = "row";
		return (
			<Item
				item={item}
				index={index}
				onPress={() => setSelectedId(item.id)}
				style={{backgroundColor,width,margin}}
			/>
		);
	};

	return (
		<SafeAreaView>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin:10,
	},
	container_left:{
		width: "46%",
		margin:"2%",
	},
	container_right:{
		width: "46%",
		margin:"2%",
	},
	video_container:{
		backgroundColor:"#F5FCFF",
		borderWidth: 1,
		borderColor: "#ccc",
		borderStyle: "solid",
	},
	video_image: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems:"center",
	},
	image_icon:{
		textAlign:"center",
		width: "100%",
		// height: "100%",
		// **注意**，下面这个 height: undefined 样式，在加载 **本地图片** 时，是必须的！
		height: undefined,
		aspectRatio: 126 / 134,
	},
	image_icon_left:{
		textAlign:"center",
		width: "100%",
		// height: "100%",
		// **注意**，下面这个 height: undefined 样式，在加载 **本地图片** 时，是必须的！
		height: undefined,
		aspectRatio: 126 / 134,
	},
	video_title:{

		// textAlign:"left",
		lineHeight:24,
		margin:8,
		fontWeight:"500",
		fontSize:14,
	},
	video_des:{
		// textAlign:"left",
		marginLeft:10,
		marginBottom:10,
	},
});

export default App;
