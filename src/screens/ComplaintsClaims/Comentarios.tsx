import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "@gcMobile/screens/ComplaintsClaims/styles/index"; // Ajusta la ruta de tu archivo de estilos
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as DocumentPicker from "expo-document-picker";

// Extiende la interfaz para incluir la propiedad name
interface MyDocumentPickerSuccessResult
  extends DocumentPicker.DocumentPickerSuccessResult {
  name: string;
}

const Comentarios = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ message: "Contenido de Quejas y Sugerencias" });
  
  const [modalVisible, setModalVisible] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [description, setDescription] = useState("");
  const [attachedFile, setAttachedFile] = useState<MyDocumentPickerSuccessResult | null>(
    null
  );

  useEffect(() => {
    // Simula la carga inicial
    setTimeout(() => {
      setData({ message: "Hola, esta es tu nueva pantalla" });
      setLoading(false);
    }, 1500);
  }, []);

  // Abre el modal
  const handleAgregar = () => {
    console.log("Botón Agregar presionado");
    setModalVisible(true);
  };

  // Cierra el modal y muestra una alerta de éxito
  const handleConfirm = () => {
    setModalVisible(false);
    Alert.alert("Éxito", "Formulario confirmado");
  };

  // Cancela el modal
  const handleCancelModal = () => {
    setModalVisible(false);
  };

  // Acción de botón "Cancelar" en la tabla
  const handleCancel = () => {
    console.log("Cancelar presionado");
    // Lógica para cancelar una fila de queja/sugerencia
  };

  // Abre el selector de archivos y si se selecciona, guarda el archivo
  const handleAttachFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
  
      // Verificamos si el usuario NO canceló
      if (!result.canceled) {
        // Aquí 'result' es de tipo DocumentPickerSuccessResult
        // y puedes acceder a result.assets o result.uri
        console.log("Archivo seleccionado:", result.assets ?? result);
        // Guarda la info en tu estado como quieras
      } else {
        // Usuario canceló la selección
        console.log("Selección de archivo cancelada");
      }
    } catch (error) {
      console.error("Error al seleccionar el documento:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quejas y sugerencias</Text>
      </View>

      {/* Botón "Agregar" que abre el modal */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAgregar}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal con la tabla */}
      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <View style={styles.tableContainer}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Queja/Sugerencia</Text>
              <Text style={styles.tableHeaderText}>Fecha</Text>
              <Text style={styles.tableHeaderText}>Status</Text>
              <Text style={styles.tableHeaderText}>Cancelar</Text>
            </View>

            {/* Fila 1 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>Ejemplo de queja</Text>
              <Text style={styles.tableRowText}>2025-04-15</Text>
              <View style={[styles.statusContainer, { backgroundColor: "#1A73E8" }]}>
                <Text style={styles.statusText}>En Proceso</Text>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <FontAwesome name="times" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>

            {/* Fila 2 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>Otro ejemplo</Text>
              <Text style={styles.tableRowText}>2025-04-16</Text>
              <View style={[styles.statusContainer, { backgroundColor: "#344767" }]}>
                <Text style={styles.statusText}>Nuevo</Text>
              </View>
              <TouchableOpacity
                style={[styles.cancelButton, styles.cancelButtonDisabled]}
                disabled={true}
              >
                <FontAwesome name="times" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>

            {/* Fila 3 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>Ejemplo de queja</Text>
              <Text style={styles.tableRowText}>2025-04-15</Text>
              <View style={[styles.statusContainer, { backgroundColor: "#F44335" }]}>
                <Text style={styles.statusText}>Cancelado</Text>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <FontAwesome name="times" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>

            {/* Fila 4 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>Ejemplo de queja</Text>
              <Text style={styles.tableRowText}>2025-04-15</Text>
              <View style={[styles.statusContainer, { backgroundColor: "#FB8C00" }]}>
                <Text style={styles.statusText}>Visto</Text>
              </View>
              <TouchableOpacity
                style={[styles.cancelButton, styles.cancelButtonDisabled]}
                onPress={handleCancel}
              >
                <FontAwesome name="times" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>

            {/* Fila 5 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableRowText}>Ejemplo de queja</Text>
              <Text style={styles.tableRowText}>2025-04-15</Text>
              <View style={[styles.statusContainer, { backgroundColor: "#4CAF50" }]}>
                <Text style={styles.statusText}>Solucionado</Text>
              </View>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <FontAwesome name="times" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Pie de página - Acciones</Text>
      </View>

      {/* Modal para agregar queja/sugerencia */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={handleCancelModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Redactar queja o sugerencia</Text>

            {/* Campo de dato simple */}
            <TextInput
              style={styles.input}
              placeholder="Ingrese su dato"
              value={formInput}
              onChangeText={setFormInput}
            />

            {/* Área de descripción */}
            <TextInput
              style={styles.textArea}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={4}
            />

            {/* Botón para adjuntar archivo */}
            <TouchableOpacity style={styles.attachFileButton} onPress={handleAttachFile}>
              <Text style={styles.attachFileButtonText}>Adjuntar Archivo</Text>
            </TouchableOpacity>

            {/* Muestra el archivo adjunto si existe */}
            {attachedFile && (
              <Text style={styles.attachedFileText}>Archivo: {attachedFile.name}</Text>
            )}

            {/* Contenedor de botones para confirmar y cancelar */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelModalButton} onPress={handleCancelModal}>
                <Text style={styles.cancelModalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Comentarios;