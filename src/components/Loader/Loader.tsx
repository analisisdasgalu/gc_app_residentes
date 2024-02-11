import React from "react";
import { Modal, ActivityIndicator, View } from "react-native";
import { loaderStyles } from "./constants";
import { useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";

const Loader = ({ children }: { children: React.ReactNode }) => {
	const { isLoading } = useSelector((state: RootState) => state.uiReducer);
	return (
		<>
			{children}
			<Modal transparent visible={isLoading}>
				<View style={loaderStyles.loaderContainer}>
					<View style={loaderStyles.loaderCard}>
						<ActivityIndicator size='large' color='#0000ff' />
					</View>
				</View>
			</Modal>
		</>
	);
};

export default Loader;
