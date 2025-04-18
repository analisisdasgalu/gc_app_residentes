import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF", // Color de fondo general
    },
    header: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: "#E0296A", // Color de encabezado
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontSize: 20,
      color: "#FFF",
      fontWeight: "600",
    },
    addButtonContainer: {
        padding: 10,
        alignItems: "flex-end",  // Si quieres que el botón se alinee a la derecha
        //backgroundColor: "#F2F2F2", // Opcional: color de fondo para la sección del botón
      },
      addButton: {
        backgroundColor: "#FFFFFF",
        borderColor: "#66758D",
        borderWidth : 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
      },
      addButtonText: {
        color: "#66758D",
        fontSize: 16,
        fontWeight: "600",
      },
    content: {
      flexGrow: 1,
      padding: 15,
       // Puedes variar esto dependiendo del layout
    },tableContainer: {
        width: "100%",
        borderWidth: 0,
        borderColor: "#ccc",
        marginTop: 20,
      },
      tableHeader: {
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
      },
      tableHeaderText: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000",
      },
      tableRow: {
        flexDirection: "row",
        height: 40, // altura fija para alinear todos los elementos
        borderTopWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
      },
      tableRowText: {
        flex: 1,
        textAlign: "center",
        color: "#666",
      },
      statusContainer: {
        width: 90, // Ancho fijo menor, ajústalo según tus necesidades
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
      },
      statusText: {
        color: "#FFF",             // Texto blanco
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
      },
      cancelButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginHorizontal: 5,
      },
      cancelButtonDisabled: {
        // Estilos adicionales para el botón deshabilitado
        backgroundColor: "#aaa", // Un color gris para indicar inactividad
        opacity: 0.6,
      },
    footer: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "#F2F2F2", // Color de pie de página
      alignItems: "center",
    },
    footerText: {
      fontSize: 16,
      color: "#666",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
        justifyContent: "center",
        alignItems: "center",
      },
      modalContainer: {
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
      },
      modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      confirmButton: {
        flex: 1,
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 5,
        alignItems: "center",
      },
      confirmButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
      },
      cancelModalButton: {
        flex: 1,
        backgroundColor: "#F44335",
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 5,
        alignItems: "center",
      },
      cancelModalButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
      },
      textArea: {
        height: 100,             // Altura mayor que un textfield normal
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        textAlignVertical: "top", // Para que el texto comience desde arriba (muy útil en Android)
        marginBottom: 15,
      },
      attachFileButton: {
        backgroundColor: "#66758D",  // Fondo con el color solicitado
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginBottom: 15,
        alignItems: "center",
      },
      attachFileButtonText: {
        color: "#FFF",   // Texto blanco
        fontSize: 16,
        fontWeight: "600",
      },
      attachedFileText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 15,
        textAlign: "center",
      },
  });
  export default styles;