import React, { Component } from "react";
import { Image, StyleSheet, Text, View }
	from "react-native";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.video_con}>
					<View style={styles.video_image}>
						<Image source={{
							uri: "https://reactnative.dev/docs/assets/p_cat2.png",
						}}
						style={styles.image_icon}/>
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
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin:10,
	},
	video_con:{
		backgroundColor:"#F5FCFF",
		width: "50%",
		borderWidth: 1,
		borderColor: "#ccc",
		borderStyle: "solid",
	},
	video_image: {
		justifyContent: "center",
		alignItems: "center",
	},
	image_icon:{
		textAlign:"center",
		width: "50%",
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
	},
});