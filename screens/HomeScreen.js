import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import HomeCard from "../components/Card";

import { colors } from "../styles/variables";
import layoutStyles from "../styles/layoutStyles";
import homeStyles from "../styles/screens/homeStyles";
import textStyles from "../styles/textStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (category) => {
    switch (category) {
      case "Projects":
        navigation.navigate("Projects");
        break;
      case "Events":
        navigation.navigate("Agenda");
        break;
      case "Actu":
        navigation.navigate("Articles");
        break;
      case "Articles":
        Linking.openURL("https://www.ville-antony.fr/toutes-les-actualites");
        break;
      case "Contact":
        navigation.navigate("Contact");
        break;
    }
  };

    return (
        <ScrollView
            contentContainerStyle={layoutStyles.scrollPage}
            showsVerticalScrollIndicator={false}
        >
            <Header title="Ma ville" navigation={navigation} />
            <View style={homeStyles.categories}>
                <TouchableOpacity onPress={() => handlePress("Actu")}>
                    <HomeCard
                        title="Fête de la musique"
                        description="Recherche de talents pour le 21 juin"
                        cardSize="small"
                    />
                </TouchableOpacity>
                <View style={homeStyles.row}>
                    <View style={homeStyles.col}>
                        <TouchableOpacity onPress={() => handlePress("Actu")}>
                            <HomeCard
                                title="Cambriolages"
                                description="Quelques conseils..."
                                cardSize="small"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress("Actu")}>
                            <HomeCard
                                title="Réaménagement de la rue de l'Église"
                                description="Amélioration de la circulation"
                                cardSize="big"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.col}>
                        <TouchableOpacity onPress={() => handlePress("Actu")}>
                            <HomeCard
                                title="Séjours d'été 2024"
                                description="Ouverture des pré-inscriptions"
                                cardSize="big"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress("Actu")}>
                            <HomeCard
                                title="La Ville recrute des animateurs motivés"
                                description="N'hésitez pas à postuler !"
                                cardSize="small"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={homeStyles.more}>
                    <Ionicons
                        name={"chevron-down"}
                        size={32}
                        color={colors.background}
                    />
                    <Text style={textStyles.pBoldInverted}>
                        Voir plus d'actualités
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Actu")}>
                    <HomeCard
                        title="Fête de la musique"
                        description="Recherche de talents pour le 21 juin"
                        cardSize="small"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Actu")}>
                    <HomeCard
                        title="Fête de la musique"
                        description="Recherche de talents pour le 21 juin"
                        cardSize="small"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Actu")}>
                    <HomeCard
                        title="Fête de la musique"
                        description="Recherche de talents pour le 21 juin"
                        cardSize="small"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
