import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function PopNonAcquise() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4242/getDataNonAcquise");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.post("http://localhost:4242/updateStatus", {
        id,
        status,
      });
      if (response.data.success) {
        fetchData();
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <View style={styles.rowContainer}>
        <Image source={{ uri: item.image_url }} style={styles.smallImage} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem && (
              <>
                <Image
                  source={{ uri: selectedItem.image_url }}
                  style={styles.largeImage}
                />
                <Text>{selectedItem.name}</Text>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => updateStatus(selectedItem.id, "acquise")}
                >
                  <Text style={styles.updateText}>Marquer comme acquise</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => updateStatus(selectedItem.id, "non acquise")}
                >
                  <Text style={styles.updateText}>
                    Marquer comme non acquise
                  </Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  smallImage: {
    width: 100,
    height: 100,
  },
  largeImage: {
    width: 300,
    height: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
  rowContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
