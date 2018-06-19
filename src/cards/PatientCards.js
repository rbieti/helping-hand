import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const PatientCards = ({ MOCKED_DATA }) => {
	const { task, time, room } = MOCKED_DATA;
	const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle} />
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{task}</Text>
					<Text>{time}</Text>
                    <Text>{room}</Text>
				</View>
			</CardSection>

			<CardSection>
				<View />
			</CardSection>

			<CardSection>
				<View />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	}
	
};

export default TaskCards;
