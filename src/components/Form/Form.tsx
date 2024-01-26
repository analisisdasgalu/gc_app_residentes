import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { formStyles } from "./constants";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@gcMobile/theme/default.styles";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAccessType, setSelectedAccessType] = useState("");
  const [selectedTypeNumber, setSelectedTypeNumber] = useState(0);
  const selectOption = (option: string) => {
    setSelectedOption(option);
  };
  const selectAccessType = (option: string) => {
    setSelectedAccessType(option);
  };
  const selectTypeNumber = (option: number) => {
    setSelectedTypeNumber(option);
  };
  const colorGray = colors.gray;
  const colorBlack = colors.black;

  return (
    <SafeAreaView style={formStyles.container}>
      <View style={formStyles.row}>
        <TouchableOpacity
          onPress={() => selectOption("visit")}
          style={
            selectedOption == "visit"
              ? [formStyles.radioButtonsContainer, ,]
              : formStyles.radioButtonsContainer2
          }
        >
          <View style={formStyles.descPosition}>
            <Icon
              name="people"
              type="material"
              color={selectedOption === "visit" ? colorBlack : colorGray}
              size={30}
            />
            <Text
              style={
                selectedOption === "visit"
                  ? [formStyles.text1]
                  : formStyles.text2
              }
            >
              Visita
            </Text>
          </View>
          <View style={formStyles.radioBtnPosition}>
            <View
              style={
                selectedOption == "visit"
                  ? [formStyles.radioButton, ,]
                  : formStyles.radioButton2
              }
            >
              {selectedOption == "visit" && (
                <View style={formStyles.radioButtonSelected} />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectOption("service")}
          style={
            selectedOption == "service"
              ? [formStyles.radioButtonsContainer, ,]
              : formStyles.radioButtonsContainer2
          }
        >
          <View style={formStyles.descPosition}>
            <Icon
              name="shopping-cart"
              type="material"
              color={selectedOption === "service" ? colorBlack : colorGray}
              size={30}
            />
            <Text
              style={
                selectedOption === "service"
                  ? [formStyles.text1]
                  : formStyles.text2
              }
            >
              Servicio
            </Text>
            <Text
              style={
                selectedOption === "service"
                  ? [formStyles.text1]
                  : formStyles.text2
              }
            >
              Doméstico
            </Text>
          </View>
          <View style={formStyles.radioBtnPosition}>
            <View
              style={
                selectedOption == "service"
                  ? [formStyles.radioButton, ,]
                  : formStyles.radioButton2
              }
            >
              {selectedOption == "service" && (
                <View style={formStyles.radioButtonSelected} />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectOption("provider")}
          style={
            selectedOption == "provider"
              ? [formStyles.radioButtonsContainer, ,]
              : formStyles.radioButtonsContainer2
          }
        >
          <View style={formStyles.descPosition}>
            <Icon
              name="build"
              type="material"
              color={selectedOption === "provider" ? colorBlack : colorGray}
              size={30}
            />
            <Text
              style={
                selectedOption === "provider"
                  ? [formStyles.text1]
                  : formStyles.text2
              }
            >
              Proveedor
            </Text>
          </View>
          <View style={formStyles.radioBtnPosition}>
            <View
              style={
                selectedOption == "provider"
                  ? [formStyles.radioButton, ,]
                  : formStyles.radioButton2
              }
            >
              {selectedOption == "provider" && (
                <View style={formStyles.radioButtonSelected} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={formStyles.nameContainer}>
        <Text style={formStyles.name}>Fernanda Madrigal</Text>
      </View>

      <View style={[formStyles.row, formStyles.schedule]}>
        <View style={formStyles.columnContainer}>
          <Text style={[formStyles.text2, { paddingVertical: 5 }]}>
            Desde el
          </Text>
          <Text style={[formStyles.text2, { paddingVertical: 5 }]}>
            Hasta el
          </Text>
        </View>
        <View style={formStyles.columnContainer}>
          <Text style={[formStyles.date, { paddingVertical: 5 }]}>
            30 de Diciembre
          </Text>
          <Text style={[formStyles.date, { paddingVertical: 5 }]}>
            30 de Diciembre
          </Text>
        </View>
        <View style={formStyles.columnContainer}>
          <Text style={[formStyles.text2, { paddingVertical: 5 }]}>a las</Text>
          <Text style={[formStyles.text2, { paddingVertical: 5 }]}>a las</Text>
        </View>
        <View style={formStyles.columnContainer}>
          <Text style={[formStyles.date, { paddingVertical: 5 }]}>
            9:00 a.m.
          </Text>
          <Text style={[formStyles.date, { paddingVertical: 5 }]}>
            9:00 a.m.
          </Text>
        </View>
        <View style={formStyles.columnContainer}>
          <Text style={{ paddingVertical: 5 }}>CST</Text>
          <Text style={{ paddingVertical: 5 }}>CST</Text>
        </View>
      </View>

      <View style={[formStyles.accessTypeContainer, formStyles.row]}>
        <View style={formStyles.columnContainer}>
          <Text style={[formStyles.text2, { paddingVertical: 40 }]}>
            Acceso
          </Text>
          <Text style={[formStyles.text2, { paddingTop: 28 }]}>Número</Text>
          <Text style={[formStyles.text2]}>Entradas</Text>
        </View>
        <View style={formStyles.columnContainer}>
          <TouchableOpacity
            onPress={() => selectAccessType("vehicle")}
            style={
              selectedAccessType == "vehicle"
                ? [formStyles.radioButtonsContainer, ,]
                : formStyles.radioButtonsContainer2
            }
          >
            <View style={formStyles.descPosition}>
              <Icon
                name="directions-car"
                type="material"
                color={
                  selectedAccessType === "vehicle" ? colorBlack : colorGray
                }
                size={30}
              />
              <Text
                style={
                  selectedAccessType === "vehicle"
                    ? [formStyles.text1]
                    : formStyles.text2
                }
              >
                Veículo
              </Text>
            </View>
            <View style={formStyles.radioBtnPosition}>
              <View
                style={
                  selectedAccessType == "vehicle"
                    ? [formStyles.radioButton, ,]
                    : formStyles.radioButton2
                }
              >
                {selectedAccessType == "vehicle" && (
                  <View style={formStyles.radioButtonSelected} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => selectTypeNumber(1)}
            style={
              selectedTypeNumber == 1
                ? [formStyles.radioButtonsContainer, ,]
                : formStyles.radioButtonsContainer2
            }
          >
            <View style={formStyles.descPosition}>
              <Icon
                name="person"
                type="material"
                color={selectedTypeNumber == 1 ? colorBlack : colorGray}
                size={30}
              />
              <Text
                style={
                  selectedTypeNumber == 1
                    ? [formStyles.text1]
                    : formStyles.text2
                }
              >
                Una vez
              </Text>
            </View>
            <View style={formStyles.radioBtnPosition}>
              <View
                style={
                  selectedTypeNumber == 1
                    ? [formStyles.radioButton, ,]
                    : formStyles.radioButton2
                }
              >
                {selectedTypeNumber == 1 && (
                  <View style={formStyles.radioButtonSelected} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={formStyles.columnContainer}>
          <TouchableOpacity
            onPress={() => selectAccessType("pedestrian")}
            style={
              selectedAccessType == "pedestrian"
                ? [formStyles.radioButtonsContainer, ,]
                : formStyles.radioButtonsContainer2
            }
          >
            <View style={formStyles.descPosition}>
              <Icon
                name="directions-run"
                type="material"
                color={
                  selectedAccessType === "pedestrian" ? colorBlack : colorGray
                }
                size={30}
              />
              <Text
                style={
                  selectedAccessType === "pedestrian"
                    ? [formStyles.text1]
                    : formStyles.text2
                }
              >
                Peatonal
              </Text>
            </View>
            <View style={formStyles.radioBtnPosition}>
              <View
                style={
                  selectedAccessType == "pedestrian"
                    ? [formStyles.radioButton, ,]
                    : formStyles.radioButton2
                }
              >
                {selectedAccessType == "pedestrian" && (
                  <View style={formStyles.radioButtonSelected} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => selectTypeNumber(2)}
            style={
              selectedTypeNumber == 2
                ? [formStyles.radioButtonsContainer, ,]
                : formStyles.radioButtonsContainer2
            }
          >
            <View style={formStyles.descPosition}>
              <Icon
                name="person-add"
                type="material"
                color={selectedTypeNumber == 2 ? colorBlack : colorGray}
                size={30}
              />
              <Text
                style={
                  selectedTypeNumber == 2
                    ? [formStyles.text1]
                    : formStyles.text2
                }
              >
                Varias
              </Text>
            </View>
            <View style={formStyles.radioBtnPosition}>
              <View
                style={
                  selectedTypeNumber == 2
                    ? [formStyles.radioButton]
                    : formStyles.radioButton2
                }
              >
                {selectedTypeNumber == 2 && (
                  <View style={formStyles.radioButtonSelected} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
