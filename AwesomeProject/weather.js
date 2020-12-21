import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View }
	from "react-native";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		img:"./video.jpeg",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		img:"./video.jpeg",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		img:"./video.jpeg",
	},
];
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.container_left}>

					<View style={styles.video_container}>
						<View style={styles.video_image}>
							<Image source={require("./video.jpeg")}
								style={styles.image_icon_left}/>
						</View>
						<Text numberOfLines={2}
							ellipsizeMode = 'tail' style={styles.video_title}>
          秋秋腌泡菜第二弹！把一年的两大鸥演出来了，好多人要求看过程
						</Text>
						<Text style={styles.video_des}>
            匿名
						</Text>
					</View>
					<View style={styles.video_container}>
						<View style={styles.video_image}>
							<Image source={require("./video.jpeg")}
								style={styles.image_icon_left}/>
						</View>
						<Text numberOfLines={2}
							ellipsizeMode = 'tail' style={styles.video_title}>
          秋秋腌泡菜第二弹！把一年的两大鸥演出来了，好多人要求看过程
						</Text>
						<Text style={styles.video_des}>
            匿名
						</Text>
					</View>

				</View>

				<View style={styles.container_right}>
					<View style={styles.video_container}>
						<View style={styles.video_image}>
							{/* <Image source={require("./video.jpeg")}
								style={styles.image_icon}/> */}
							<Image
								source={{
									uri: "https://reactnative.dev/docs/assets/p_cat2.png",
								}}
								style={styles.image_icon}
							/>
						</View>
						<Text numberOfLines={2}
							ellipsizeMode = 'tail' style={styles.video_title}>
          秋秋腌泡菜第二弹！把一年的两大鸥演出来了，好多人要求看过程
						</Text>
						<Text style={styles.video_des}>
            匿名
						</Text>
					</View>
					<View style={styles.video_container}>
						<View style={styles.video_image}>
							{/* <Image source={require("./video.jpeg")}
								style={styles.image_icon}/> */}
							<Image
								source={{
									uri: "https://reactnative.dev/docs/assets/p_cat2.png",
								}}
								style={styles.image_icon}
							/>
						</View>
						<Text numberOfLines={2}
							ellipsizeMode = 'tail' style={styles.video_title}>
          秋秋腌泡菜第二弹！把一年的两大鸥演出来了，好多人要求看过程
						</Text>
						<Text style={styles.video_des}>
            匿名
						</Text>
					</View>
					<View style={styles.video_container}>
						<View style={styles.video_image}>
							{/* <Image source={require("./video.jpeg")}
								style={styles.image_icon}/> */}
							<Image
								source={{
									uri: "https://reactnative.dev/docs/assets/p_cat2.png",
								}}
								style={styles.image_icon}
							/>
						</View>
						<Text numberOfLines={2}
							ellipsizeMode = 'tail' style={styles.video_title}>
          秋秋腌泡菜第二弹！把一年的两大鸥演出来了，好多人要求看过程
						</Text>
						<Text style={styles.video_des}>
            匿名
						</Text>
					</View>
				</View>
			</View>



		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin:10,
	},
	container_left:{
		width: "46%",
		margin:"2%",
		// flexDirection: "column",
	},
	container_right:{
		width: "46%",
		margin:"2%",
		// flexDirection: "column",
	},
	video_container:{
		backgroundColor:"#F5FCFF",
		// width: "46%",
		// margin:"2%",
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
		width: "50%",
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