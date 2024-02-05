import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { cardStyles } from "./constants";
import { colors, filterPalette } from "@gcMobile/theme/default.styles";

interface ICardProps {
	nombre: string;
	desde: string;
	hasta: string;
	tipo: string;
	acceso: string;
	avisos: string;
	email: string;
	tipo_visita: string;
	uniqueID: string;
	estado: string;
	index: number;
}

export default function Card({
	nombre,
	desde,
	hasta,
	tipo,
	acceso,
	avisos,
	email,
	tipo_visita,
	uniqueID,
	estado,
	index,
}: ICardProps) {
	return (
		<View style={[cardStyles.container]}>
			<View style={cardStyles.row}>
				<View
					style={{
						flex: 0.2,
						flexDirection: "column",
						borderRightWidth: 1,
						borderColor: colors.gray,
						marginRight: "1%",
					}}>
					<View
						style={{
							flexDirection: "column",
							flex: 0.4,
						}}>
						<Text>Icono</Text>
					</View>
					<View
						style={{
							flexDirection: "column",
							flex: 0.2,
						}}>
						<Text style={{ fontSize: 9, color: colors.darkGray }}>
							{tipo_visita}
						</Text>
					</View>
				</View>

				<View style={{ flexDirection: "column", flex: 1 }}>
					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "100%",
							}}>
							<View style={{ flex: 1, flexDirection: "row" }}>
								<Text
									style={{
										color: colors.gray,
										marginRight: "5%",
										fontSize: 9,
									}}>{`${index + 1})`}</Text>
								<Text style={{ color: colors.darkGray, fontSize: 10 }}>
									{nombre}
								</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={cardStyles.descriptionText}>Desde:</Text>
						</View>

						<View
							style={{
								width: "35%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{desde?.split("T")[0]}
							</Text>
						</View>
						<View
							style={{
								width: "15%",
							}}>
							<Text style={cardStyles.descriptionText}>a las:</Text>
						</View>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{desde?.split("T")[1]}
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={cardStyles.descriptionText}>Hasta:</Text>
						</View>

						<View
							style={{
								width: "35%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{hasta?.split("T")[0]}
							</Text>
						</View>
						<View
							style={{
								width: "15%",
							}}>
							<Text style={cardStyles.descriptionText}>a las:</Text>
						</View>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{hasta?.split("T")[1]}
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={cardStyles.descriptionText}>Tipo:</Text>
						</View>

						<View
							style={{
								width: "30%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{tipo}
							</Text>
						</View>
						<View
							style={{
								width: "22%",
							}}>
							<Text style={cardStyles.descriptionText}>Acceso:</Text>
						</View>
						<View
							style={{
								width: "22%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{acceso}
							</Text>
						</View>
					</View>

					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={cardStyles.descriptionText}>Avisos:</Text>
						</View>

						<View
							style={{
								width: "30%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{avisos}
							</Text>
						</View>
						<View
							style={{
								width: "22%",
							}}>
							<Text style={cardStyles.descriptionText}>Estado:</Text>
						</View>
						<View
							style={{
								width: "22%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{estado}
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 0.16,
						}}>
						<View
							style={{
								width: "25%",
							}}>
							<Text style={cardStyles.descriptionText}>Autor:</Text>
						</View>
						<View
							style={{
								width: "75%",
							}}>
							<Text style={{ color: colors.darkGray, fontSize: 10 }}>
								{email}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
