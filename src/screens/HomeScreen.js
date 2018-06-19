import React, { Component } from 'react';
import { StyleSheet, ListView, ScrollView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction, Icon, ListItem } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import {Card} from "./src/components/Card"
import { CardSection } from '../components/CardSection';
import { Input } from '../components/Input';
import { PRIMARY_COLOR } from '../constants/style';
var MOCKED_DATA = [
	{ task: 'Medications', time: '8:00pm', room: 'room 204' },
	{ task: 'Blood Test', time: '10:00pm', room: 'room 205' },
	{ task: 'Check Vitals', time: '10:30pm', room: 'room 206' },
	{ task: 'Medications', time: '11:15pm', room: 'room 207' }
];
var i = -1;
class HomeScreen extends Component {
	_onPressButton() {
		Alert.alert('More Info Displayed');
	}
	state = { MOCKED_DATA: [] };

	//componentWillMount() {
	//	MOCKED_DATA.then(response => this.setState({ tasks: response.data }));
	//}
	renderHeader() {
		return (
			<View>
				<Header style={{ backgroundColor: PRIMARY_COLOR, height: 50 }}>
					<Left />
					<Body>
						<Title style={{ color: 'white', marginBottom: 30 }}>Home</Title>
					</Body>
					<Right />
				</Header>
			</View>
		);
	}

	renderTasks() {
		var taskCard = MOCKED_DATA[(i = i + 1)];
		return (
			<Card title="Tasks">
				<TouchableOpacity onPress={this._onPressButton}>
					<View style={{ height: 100 }}>
						<View style={styles.detailWrapper}>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.task}</Text>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.room}</Text>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.time}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</Card>
		);
	}
	//////////////////////////////////////////////////////////////////////////////////
	// Properties automatically referred to by react-navigation navigators
	static navigationOptions = ({ navigation }) => ({
		//tabBarVisible: false,
		title: 'Helping Hand ',
		tabBarLabel: 'Home',
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center'
		},
		tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />
	});

	render() {
		return (
			<ScrollView>
				{this.renderHeader()}

				{this.renderTasks()}

				{this.renderTasks()}

				{this.renderTasks()}

				{this.renderTasks()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 38,
		backgroundColor: 'transparent'
	},
	button: {
		marginRight: 10
	}
});

export default connect(null, actions)(HomeScreen);
