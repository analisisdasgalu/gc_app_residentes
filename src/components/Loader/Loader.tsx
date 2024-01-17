import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { loaderStyles } from "./constants";

const Loader = () => {
	const rotation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.loop(
			Animated.timing(rotation, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			})
		).start();
	}, [rotation]);

	const spin = rotation.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});
	return (
		<View style={loaderStyles.background}>
			<View style={loaderStyles.loaderContainer}>
				<Animated.View
					style={[loaderStyles.loader, { transform: [{ rotate: spin }] }]}
				/>
			</View>
		</View>
	);
};

export default Loader;
