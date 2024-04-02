import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  TextInput,
  Linking,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

import { Header, HeaderSecondary } from "../components/Header";

import { colors } from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";

const ProjectsScreen = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  const [isFormVisible, setFormVisible] = useState(false);

  const handlePress = (index) => {
    setExpandedProjects((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const sendProject = () => {
    // Vous pouvez personnaliser la fonction sendProject pour gérer l'envoi du projet
    // Dans cet exemple, une simple alerte est affichée pour confirmer que le projet a été envoyé
    Alert.alert(
      "Projet envoyé",
      "Votre projet a été envoyé avec succès et est en cours d'analyse."
    );
    setFormVisible(false); // Masquer le formulaire après l'envoi du projet
  };

  return (
    <ScrollView
      contentContainerStyle={layoutStyles.scrollPage}
      showsVerticalScrollIndicator={false}
    >
      <Modal visible={isFormVisible} animationType="slide">
        <View style={styles.formContainer}>
          <HeaderSecondary title="Proposer un projet" />
          <TextInput placeholder="Titre du projet" style={styles.input} />
          <TextInput
            placeholder="Description du projet"
            style={[styles.input, { height: 200 }]}
            multiline
          />
          <TouchableOpacity onPress={sendProject} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Envoyer</Text>
            <Ionicons name="send" size={24} color={colors.white}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleForm} style={styles.closeButton}>
            <Ionicons name="close" size={40} color={colors.black} />
          </TouchableOpacity>
        </View>
      </Modal>
      <Header title="Projets" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={toggleForm}>
          <View style={styles.iconContainer}>
            <Ionicons name="add" size={24} color="#F674A2" />
          </View>
          <Text style={textStyles.pBoldInverted}>Proposer un projet</Text>
        </TouchableOpacity>
        <View style={styles.projectsContainer}>
          <Text style={textStyles.h3}>Projets en cours</Text>
          <TouchableOpacity
            style={styles.projectCard}
            onPress={() => handlePress(0)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.projectTitle}>Accusantium adipisci quam</Text>
            </View>
            {expandedProjects[0] && (
              <Text style={styles.extendTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                gravida ante ut commodo molestie. Phasellus convallis ac odio
                faucibus tincidunt. Mauris ac lectus ac tellus dignissim
                consequat. Nulla at hendrerit purus. Cras vel lorem lorem.
                Mauris id feugiat odio. Vestibulum pharetra rutrum lorem, at
                consequat libero feugiat ac. Maecenas molestie ut orci vitae
                iaculis. Aliquam vel nulla eget sem faucibus interdum. In ac
                ipsum nisl. Cras ut rutrum arcu, ac tempor magna. Donec
                condimentum tempus vehicula. Vestibulum pulvinar dolor et magna
                pulvina
              </Text>
            )}
            <ImageBackground
              source={require("../assets/banner.jpg")}
              style={styles.projectImage}
            >
              <LinearGradient
                colors={["rgba(0, 122, 157, 0.5)", "rgba(0, 122, 157, 0.5)"]}
                style={styles.linearGradient}
              ></LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.projectCard}
            onPress={() => handlePress(1)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.projectTitle}>Accusantium adipisci quam</Text>
            </View>
            {expandedProjects[1] && (
              <Text style={styles.extendTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                gravida ante ut commodo molestie. Phasellus convallis ac odio
                faucibus tincidunt. Mauris ac lectus ac tellus dignissim
                consequat. Nulla at hendrerit purus. Cras vel lorem lorem.
                Mauris id feugiat odio. Vestibulum pharetra rutrum lorem, at
                consequat libero feugiat ac. Maecenas molestie ut orci vitae
                iaculis. Aliquam vel nulla eget sem faucibus interdum. In ac
                ipsum nisl. Cras ut rutrum arcu, ac tempor magna. Donec
                condimentum tempus vehicula. Vestibulum pulvinar dolor et magna
                pulvinar, nec lobortis urna bibendum. Maecenas fermentum eros
                non felis pharetra, ut commodo nunc finibus. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Integer mollis tellus quis hendrerit interdum. Etiam
                efficitur scelerisque ultricies. Mauris nec porttitor tortor,
                eget vulputate tellus. Maecenas eu odio malesuada, scelerisque
                sapien nec, eleifend diam. Curabitur purus neque, aliquet quis
                laoreet et, malesuada sed mi.
              </Text>
            )}
            <ImageBackground
              source={require("../assets/banner.jpg")}
              style={styles.projectImage}
            >
              <LinearGradient
                colors={["rgba(0, 122, 157, 0.5)", "rgba(0, 122, 157, 0.5)"]}
                style={styles.linearGradient}
              ></LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    gap: 24,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 24,
    padding: 20,
  },
  sendButton: {
    flexDirection: "row-reverse",
    padding: 12,
    gap: 12,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    textAlign: "center",
  },
  sendButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  closeButton: {
    flexDirection: "row-reverse",
    padding: 12,
    gap: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    textAlign: "center",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#F674A2",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  extendTxt: {
    textAlign: "center",
    padding: 16,
    color: colors.white,
  },
  iconContainer: {
    backgroundColor: "#FFF",
    borderRadius: 4,
  },
  projectsContainer: {
    width: "100%",
    gap: 12,
  },
  projectCard: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    color: colors.background,
  },
  projectImage: {
    width: "100%",
    height: 200,
    marginTop: 12,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
  buttonRed: {
    alignItems: "center",
    backgroundColor: "#007A9D",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  h1: {
    fontSize: 48,
    fontWeight: "900",
  },
});

export default ProjectsScreen;
