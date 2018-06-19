import React, { Component } from 'react';
import {
	StyleSheet,
	ListView,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	Alert
} from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction, Icon, ListItem } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import {Card} from "./src/components/Card"
import { CardSection } from '../components/CardSection';
import { Input } from '../components/Input';
import { PRIMARY_COLOR } from '../constants/style';
var MOCKED_DATA = [
	{ name: 'Steve', task: 'Medications', time: '8:00pm', room: 'room 204' },
	{ name: 'Kim', task: 'Blood Test', time: '10:00pm', room: 'room 205' },
	{ name: 'Daniel', task: 'Check Vitals', time: '10:30pm', room: 'room 206' },
	{ name: 'Matt', task: 'Medications', time: '11:15pm', room: 'room 207' }
];
var i = -1;
class PatientScreen extends Component {
	renderHeader() {
		return (
			<View>
				<Header style={{ backgroundColor: PRIMARY_COLOR, height: 50 }}>
					<Left />
					<Body>
						<Title style={{ color: 'white', marginBottom: 30 }}>Patients</Title>
					</Body>
					<Right />
				</Header>
			</View>
		);
	}
	renderPatient() {
		var taskCard = MOCKED_DATA[(i = i + 1)];
		return (
			<Card title={taskCard.name}>
				<TouchableOpacity onPress={this._onPressButton}>
					<View style={{ height: 100 }}>
						<View style={styles.detailWrapper}>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.task}</Text>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.room}</Text>
							<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{taskCard.time}</Text>
						</View>
						<Button
							Text="Reply!"
							backgroundColor="#fff"
							onPress={() => this.props.navigation.navigate('main')}
						/>
					</View>
				</TouchableOpacity>
			</Card>
		);
	}
	_onPressButton() {
		Alert.alert('More Info Displayed');
	}
	//////////////////////////////////////////////////////////////////////////////////
	// Properties automatically referred to by react-navigation navigators
	static navigationOptions = ({ navigation }) => ({
		//tabBarVisible: false,
		title: 'Patients',
		tabBarLabel: 'Patients',
		tabBarIcon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />,
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center'
		},
		headerLeft: (
			<Button
				navigate={navigation.navigate}
				large
				icon={{ name: 'person' }}
				backgroundColor={PRIMARY_COLOR}
				onPress={() => navigation.navigate('DrawerOpen')}
			/>
		)
	});

	render() {
		return (
			<ScrollView>
				{this.renderHeader()}
				{this.renderPatient()}
				{this.renderPatient()}
				{this.renderPatient()}
				{this.renderPatient()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 38,
		backgroundColor: PRIMARY_COLOR
	},
	button: {
		marginRight: 10
	}
});
export default connect(null, actions)(PatientScreen);
