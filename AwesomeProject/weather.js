import React, { Component } from "react";
import { Image, StyleSheet, Text, View }
	from "react-native";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.instructions}>
					<Image source={{
						uri: "https://reactnative.dev/docs/assets/p_cat2.png",
					}}
					style={styles.imageIcon}/>
					<Text style={styles.videoName}>
            videoNamename
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin:10,
		backgroundColor:"#cccccc",
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "#F5FCFF"
	},
	instructions: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
		width: "50%",
		// height:"40%",
		// width: 300,
		// height: 250,
		borderWidth: 1,
		borderColor: "#ccc",
		borderStyle: "solid",
		textAlign: "center",
		color: "#333333",
		// marginBottom: 5
	},
	imageIcon:{
		// width: "50%",
		// height: "50%",
		width: "50%",
		// **注意**，下面这个 height: undefined 样式，在加载 **本地图片** 时，是必须的！
		height: undefined,
		aspectRatio: 126 / 134,
	},
	borderImg:{

		// width: 1,
		// height: 300,
	},
});