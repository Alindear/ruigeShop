/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
} from "react-native";

import {
	Colors,
} from "react-native/Libraries/NewAppScreen";

import Weather from "./weather";
import Article from "./article";
import Map from "./map";
import TabNavigator from "react-native-tab-navigator";

// const App: () => React$Node = () => {
//   constructor(props){
//     super(props);

//     this.state = {
//     };

// }
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: "天气",
		};
	}
	render() {

		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}>

						{global.HermesInternal == null ? null : (
							<View style={styles.engine}>
								<Text style={styles.footer}>Engine: Hermes</Text>
							</View>
						)}
						<View style={styles.view_area}>
							<View style={styles.header}>
								<Image
									source={{
										uri: "https://reactnative.dev/docs/assets/p_cat2.png",
									}}
									style={styles.imageIcon}
								/>

								<View style={styles.header_text}>
									<Text>Action</Text>
									<Text>Friend</Text>
									<Text>Hot</Text>
								</View>

								<Image
									source={{
										uri: "https://reactnative.dev/docs/assets/p_cat2.png",
									}}
									style={styles.imageIcon}
								/>

							</View>

						</View>
					</ScrollView>
				</SafeAreaView>
				<View style={styles.container}>
					<TabNavigator>
						<TabNavigator.Item
							selected={this.state.selectedTab === "天气"}
							title='天气'
							titleStyle={styles.tabText}
							selectedTitleStyle={styles.selectedTabText}
							renderIcon={() => <Image style={styles.icon} source={{
								uri: "https://reactnative.dev/docs/assets/p_cat2.png",
							}}/>}
							renderSelectedIcon={() => <Image style={styles.icon}
								source={{
									uri: "https://reactnative.dev/docs/assets/p_cat2.png",
								}}/>}
							onPress={() => this.setState({selectedTab: "天气"})}>
							<Weather/>
						</TabNavigator.Item>
						<TabNavigator.Item
							selected={this.state.selectedTab === "文章"}
							title='文章'
							titleStyle={styles.tabText}
							selectedTitleStyle={styles.selectedTabText}
							renderIcon={() => <Image style={styles.icon} source={{
								uri: "https://reactnative.dev/docs/assets/p_cat2.png",
							}}/>}
							renderSelectedIcon={() => <Image style={styles.icon}
								source={{
									uri: "https://reactnative.dev/docs/assets/p_cat2.png",
								}}/>}
							onPress={() => this.setState({selectedTab: "文章"})}>
							<Article/>
						</TabNavigator.Item>
						<TabNavigator.Item
							selected={this.state.selectedTab === "地图"}
							title='地图'
							titleStyle={styles.tabText}
							selectedTitleStyle={styles.selectedTabText}
							renderIcon={() => <Image style={styles.icon} source={{
								uri: "https://reactnative.dev/docs/assets/p_cat2.png",
							}}/>}
							renderSelectedIcon={() =>
								<Image style={styles.icon}
									source={{
										uri: "https://reactnative.dev/docs/assets/p_cat2.png",
									}}
								/>
							}
							onPress={() => this.setState({selectedTab: "地图"})}>
							<Map/>
						</TabNavigator.Item>
					</TabNavigator>
				</View>
			</>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tabText: {
		color: "#BFBFBF",
		fontSize: 13
	},
	selectedTabText: {
		color: "#1296DB",
		fontSize: 13
	},
	icon: {
		width: 20,
		height: 20
	},
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: "absolute",
		right: 0,
	},
	view_area: {
		backgroundColor: Colors.white,
	},
	header:{
		padding:10,
		height: 42,
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		borderBottomWidth: 0.5,
		borderBottomColor: "#ccc",
		// backgroundColor: Colors.black,
	},
	header_text:{
		paddingLeft: 90,
		paddingRight: 90,
		flex:1,
		justifyContent: "space-between",
		flexDirection: "row"
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	imageIcon:{
		height: 20,
		width: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
		color: Colors.dark,
	},
	highlight: {
		fontWeight: "700",
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: "600",
		padding: 4,
		paddingRight: 12,
		textAlign: "right",
	},
});

// export default App;
