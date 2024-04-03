import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { HeaderSecondary } from "../components/Header";
import HomeCard from "../components/Card";

import useTheme from "../theme/useTheme";
import colors from "../styles/variables";
import layoutStyles from "../styles/layoutStyles";
import homeStyles from "../styles/screens/homeStyles";
import textStyles from "../styles/textStyles";

const ArticleScreen = () => {
    const colours = useTheme();
    const TextStyles = textStyles(colours);
    const layoutScreenStyles = layoutStyles(colours);

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
                Linking.openURL(
                    "https://www.ville-antony.fr/toutes-les-actualites"
                );
                break;
            case "Contact":
                navigation.navigate("Contact");
                break;
        }
    };

    return (
        <ScrollView
            contentContainerStyle={layoutScreenStyles.scrollPage}
            showsVerticalScrollIndicator={false}
        >
            <Ionicons
                name="arrow-back"
                size={32}
                color={colours.text}
                style={styles.back}
                onPress={() => navigation.goBack()}
            />
            <HeaderSecondary
                title="Fête de la musique"
                navigation={navigation}
            />
            <View style={homeStyles.categories}>
                <TouchableOpacity onPress={() => handlePress("Actu")}>
                    <HomeCard
                        title="Fête de la musique"
                        description="Recherche de talents pour le 21 juin"
                        cardSize="small"
                    />
                </TouchableOpacity>
                <Text style={TextStyles.p}>
                    Recherche de talents pour le 21 juin ! Dans le cadre de la
                    fête de la musique, la ville d’Antony propose aux groupes
                    amateurs d’Antony et des communes voisines, de se produire
                    gracieusementà la salle club de Vasarely et au mail Robert
                    Doisneau le vendredi 21 juin à partir de 17h. {"\n"} {"\n"}
                </Text>
                <Text style={TextStyles.h4}>Sélection {"\n"}</Text>
                <Text style={TextStyles.p}>
                    La sélection s’effectuera sur écoute à partir des supports
                    envoyés (cf. 4) par un jury composé de membres du Conseil
                    des Jeunes Citoyens et de représentants du service culturel,
                    du service jeunesse et des studios de l’Espace Vasarely. Les
                    compositions originales seront privilégiées, mais les
                    reprises sont néanmoins autorisées. Plusieurs groupes seront
                    retenus pour participer aux concerts du 21 juin. {"\n"}{" "}
                    {"\n"}
                </Text>
                <Text style={TextStyles.h4}>Inscriptions{"\n"}</Text>

                <Text style={TextStyles.p}>
                    {" "}
                    Récupérez sur l'espace citoyen votre formulaire en ligne en
                    cliquant ici. Des liens audio / vidéo HD qui renvoient vers
                    des sites d’écoute gratuits (youtube, bandcamp, soundcloud,
                    etc.) ciblés sur un morceau précis. Ce support devra
                    correspondre au style des morceaux interprétés pour le
                    concert du 21 juin. Il est obligatoire pour s’inscrire Pour
                    les mineurs, l’autorisation parentale est disponible esur
                    l'espace citoyen. Le formulaire, le support audio/vidéo et
                    l'autorisation parentale peuvent être transmis sur l'espace
                    citoyen. Le(a) référent(e) indiqué(e) sera l’unique
                    interlocuteur(trice) des organisateurs concernant tous les
                    détails liés à la fête de la musique. Toute participation à
                    la fête de la musique implique pour chaque membre des
                    groupes l’acceptation du présent règlement, ainsi que
                    l’autorisation donnée à la ville d’Antony d’utiliser son
                    image pour toute action de communication et de promotion de
                    l’événement. FIN DES CANDIDATURES LE 23 AVRIL INCLUS {
                        "\n"
                    }{" "}
                    {"\n"}
                </Text>
                <Text style={TextStyles.h4}>Matériel fourni {"\n"} </Text>

                <Text style={TextStyles.p}>
                    La Ville fournit lors de ces concerts une sonorisation, du
                    backline (Batterie : Yamaha Stage Custom avec Cymbales
                    Zildjian K series, Ampli Basse : Ampeg SVT 7 PRO avec Ampeg
                    410 HLF, Amplis Guitare : 2x Fender champion 100 et 2x
                    Marshall MG101CFX, Piano : Yamaha P105b) et un technicien
                    son. Pour plus d’informations : culture@ville-antony.fr
                </Text>
            </View>
        </ScrollView>
    );
};

export default ArticleScreen;

const styles = {
    back: {
        position: "absolute",
        top: 48,
        left: 24,
    },
};
