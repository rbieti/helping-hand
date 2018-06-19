import React, { Component } from 'react';
import {
	Alert,
	StyleSheet,
	ListView,
	ScrollView,
	View,
	//Text,
	Image,
	TouchableWithoutFeedback,
	TouchableHighlight
} from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction, Icon, ListItem, Button } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import {Card} from "./src/components/Card"
import { CardSection } from '../components/CardSection';
import { Input } from '../components/Input';
import { PRIMARY_COLOR } from '../constants/style';

class MessageScreen extends Component {
	_onPressButton() {
		Alert.alert('You tapped the button!');
	}
	//////////////////////////////////////////////////////////////////////////////////
	// Properties automatically referred to by react-navigation navigators
	renderHeader() {
		return (
			<View>
				<Header style={{ backgroundColor: PRIMARY_COLOR, height: 50 }}>
					<Left />
					<Body>
						<Text style={{ color: 'white', marginBottom: 30 }}>Messages</Text>
					</Body>
					<Right />
				</Header>
			</View>
		);
	}
	renderMessages() {
		return (
			<Card text="Message">
				<TouchableHighlight onPress={this._onPressButton}>
					<View style={{ height: 100 }}>
						<View style={styles.detailWrapper}>
							<Text style={styles}>____________</Text>

							<Text style={styles}>____________</Text>
							<Button
								text="Reply!"
								backgroundColor="#000"
								onPress={() => this.props.navigation.navigate('main')}
							/>
						</View>
					</View>
				</TouchableHighlight>
			</Card>
		);
	}

	static navigationOptions = ({ navigation }) => ({
		//tabBarVisible: false,
		title: 'Messages',
		tabBarLabel: 'Messages',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="description" size={30} color={tintColor} />;
		},
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
				onPress={() => navigation.navigate('Messages')}
			/>
		),
		drawerIcon: ({ tintColor }) => <Icon name="description" size={25} color={tintColor} />
	});

	render() {
		//	return <ScrollView>{this.renderHeader()}</ScrollView>;
		return (
			//<View>{this.renderHeader()}</View>
			//<View>
			//	<Header style={{ backgroundColor: PRIMARY_COLOR, height: 50 }} />
			//	</View>
			//<ScrollView>{this.renderHeader()}</ScrollView>
			<ScrollView>
				{this.renderHeader()}
				{this.renderMessages()}
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

export default connect(null, actions)(MessageScreen);
