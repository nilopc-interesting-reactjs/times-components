import React from 'react';
import {View, ScrollView, Text, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const scenarios = [
	{
		lineHeight: 12,
		fontSize: 15
	},
	{
		lineHeight: 15,
		fontSize: 15
	},
	{
		lineHeight: 25,
		fontSize: 15
	}
];

const colors = [
	'green', 'blue', 'purple'
];

export default function LineHeightTester() {
	return (
		<ScrollView style={{
			width,
			height,
			...Platform.select({ios: {marginTop: 40}})
		}}>
			<View>
				{scenarios.map(({lineHeight, fontSize}, index) =>
					<View
						style={{alignItems: 'center'}}
						key={index}>
						<Text
							style={{
								fontSize,
								lineHeight,
								color: 'white',
								width: 200,
								backgroundColor: colors[index % colors.length]
							}}
						>{`fontSize: ${fontSize} lineHeight: ${lineHeight} \n\n Sed virtute consulatu appellantur et, minim deleniti nec ad, ei cum falli offendit. Ne mea vidisse dissentiunt. Pri at percipit mediocritatem. Cu eum atqui aliquam reformidans, cu his officiis disputationi.`}
						</Text>
					</View>
				)}
			</View>

		</ScrollView>
	);
}
