import React from 'react';
import { StyleSheet, View, Platform, AsyncStorage, ScrollView, Text, Image } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Divider } from 'react-native-elements';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Font } from 'expo';

import store from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import PatientScreen from './src/screens/PatientScreen';
import MessageScreen from './src/screens/MessageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import SignoutScreen from './src/screens/SignoutScreen';

import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';
import { PRIMARY_COLOR } from './src/constants/style';

export default class App extends React.Component {
	//////////////////////////////////////////////////////////////////////////////
	// Setup some warnings to ignore
	// https://github.com/firebase/firebase-js-sdk/issues/97
	constructor() {
		super();
		this.state = {
			fontLoaded: false
		};
		console.ignoredYellowBox = ['Setting a timer'];
	}
	//////////////////////////////////////////////////////////////////////////////
	// Upon loading app, initialize firebase
	componentWillMount() {
		// DTG - Debugging

		firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);

		//console.log('App.js: Signing Out');

		//firebase.auth().signOut();
	}

	async componentDidMount() {
		await Font.loadAsync({
			'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	//////////////////////////////////////////////////////////////////////////////
	// Main render method
	render() {
		if (!this.state.fontLoaded) {
			return null;
		}

		//////////////////////////////////////////////////////////////////////////////
		// Inner StackNavigator for search results
		const HomeScene = TabNavigator(
			{
				Home: { screen: HomeScreen },
				Patients: { screen: PatientScreen },
				Messages: { screen: MessageScreen },
				SignOut: { screen: SignoutScreen }
			},
			{
				navigationOptions: {
					tabBarVisible: true
				},
				tabBarPosition: 'bottom',
				swipeEnabled: false,
				lazy: true, // Each screen will not mount/load until user clicks on them
				animationEnabled: false
			}
		);
		/*
    const HomeScene = StackNavigator (
      {
        home: { screen: HomeScreen },
        Patients: { screen: PatientScreen }
      },
      {
        navigationOptions: {
          headerStyle: { backgroundColor: PRIMARY_COLOR },
          headerBackTitleStyle: { color: "#FFF" },
          headerTitleStyle: { color: "#FFF" },
          headerTintColor: "#FFF"
        }
      }
    );

    //////////////////////////////////////////////////////////////////////////////
    // This component dictates the configuration of the drawer
    */
		/*
    const customDrawerComponent = props => (
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: PRIMARY_COLOR,
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            style={{ flex: 2, width: 200, height: 200}}
            source={require("./assets/logo.png")}
          />
        </View>

        <View>
          <Text h1 style={{ textAlign: "center", marginTop: 10 }}>
            MENU
          </Text>
          <Divider style={{ backgroundColor: PRIMARY_COLOR }} />
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );
*/
		//////////////////////////////////////////////////////////////////////////////
		// Main side drawer
		/*  const MainDrawer = DrawerNavigator(
      {
        home: { screen: HomeSn },
        Patients: { screen: PatientScreen },
        signout: { screen: SignoutScreen }
      },
      {
        contentComponent: customDrawerComponent
        // contentOptions: {
        //   activeTintColor: { color: '#F00' }
        // }
      },
      {
        navigationOptions: {
          headerStyle: { backgroundColor: PRIMARY_COLOR },
          headerBackTitleStyle: { color: "#FFF" },
          headerTitleStyle: { color: "#FFF" },
          headerTintColor: "#FFF"
        }
      }
    );
*/
		//////////////////////////////////////////////////////////////////////////////
		// Top Level Navigator
		const MainNavigator = TabNavigator(
			{
				//welcome: { screen: WelcomeScreen },
				auth: { screen: AuthScreen },
				main: { screen: HomeScene }
			},
			{
				navigationOptions: {
					tabBarVisible: false
				},
				tabBarPosition: 'bottom',
				swipeEnabled: false,
				lazy: true, // Each screen will not mount/load until user clicks on them
				animationEnabled: false
			}
		);

		// NOTE: onNavigationStateChange={null} disables Navigator debug logging
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<MainNavigator onNavigationStateChange={null} />
				</View>
			</Provider>
		);
	}
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		//alignItems: 'center',
		justifyContent: 'center',
		marginTop: Platform.OS === "android" ? 24 : 30,
		marginBottom: Platform.OS === "android" ? 0 : 20
	}
});
