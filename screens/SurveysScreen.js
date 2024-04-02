import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Header } from "../components/Header";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";

import {colors} from "../styles/variables";
import textStyles from "../styles/textStyles";
import layoutStyles from "../styles/layoutStyles";
const createSurvey = (id, question, description) => ({
  id,
  question,
  description,
  votes: { up: 0, down: 0 },
  comments: [],
});

const initialSurveys = [
  createSurvey(
    1,
    "Le meilleur joueur de foot de tous les temps?",
    "Qui est le meilleur joueur de foot de tous les temps?"
  ),
  createSurvey(
    2,
    "Le club de foot le plus emblématique?",
    "Quel est le club de foot le plus emblématique?"
  ),
  createSurvey(
    3,
    "La compétition de foot la plus excitante?",
    "Quelle est la compétition de foot la plus excitante?"
  ),
];

const SurveysApp = ({ navigation }) => {
  const [surveys, setSurveys] = useState(initialSurveys);
  const [votedSurveys, setVotedSurveys] = useState([]);
  const [expandedSurvey, setExpandedSurvey] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [newSurveyDescription, setNewSurveyDescription] = useState("");
  const [newSurveyQuestion, setNewSurveyQuestion] = useState("");
  const vote = (surveyId, type) => {
    const oppositeType = type === "up" ? "down" : "up";

    if (
      !votedSurveys.includes(`${surveyId}-${type}`) &&
      !votedSurveys.includes(`${surveyId}-${oppositeType}`)
    ) {
      setSurveys(
        surveys.map((survey) => {
          if (survey.id === surveyId) {
            return {
              ...survey,
              votes: {
                ...survey.votes,
                [type]: survey.votes[type] + 1,
              },
            };
          }
          return survey;
        })
      );
      setVotedSurveys([...votedSurveys, `${surveyId}-${type}`]);
    }
  };

  const addComment = (surveyId, comment) => {
    setSurveys(
      surveys.map((survey) => {
        if (survey.id === surveyId) {
          return {
            ...survey,
            comments: [...survey.comments, { text: comment, replies: [] }],
          };
        }
        return survey;
      })
    );
  };

  const addReply = (surveyId, commentIndex, reply) => {
    setSurveys(
      surveys.map((survey) => {
        if (survey.id === surveyId) {
          const updatedComments = [...survey.comments];
          updatedComments[commentIndex].replies.push(reply);
          return { ...survey, comments: updatedComments };
        }
        return survey;
      })
    );
  };

  const createNewSurvey = () => {
    const newSurvey = createSurvey(
      surveys.length + 1,
      newSurveyQuestion,
      newSurveyDescription
    );
    setSurveys([...surveys, newSurvey]);
    setNewSurveyQuestion("");
    setNewSurveyDescription("");
  };

  return (
    <ScrollView contentContainerStyle={layoutStyles.scrollPage}>
      <Modal isVisible={isFormVisible}>
        <View style={styles.category}>
          <View style={styles.containerInput}>
            <View style={styles.titleClose}>
              <TextInput
                placeholder="titre du nouveau sondage..."
                value={newSurveyQuestion}
                onChangeText={setNewSurveyQuestion}
                style={styles.newSurveyInput}
              />
              <TouchableOpacity
                title="Fermer"
                onPress={() => setFormVisible(false)}
                style={styles.closeFormButton}
              >
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Description du nouveau sondage..."
              value={newSurveyDescription}
              onChangeText={setNewSurveyDescription}
              style={styles.newSurveyInputDesc}
            />
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity
              onPress={createNewSurvey}
              style={styles.createSurveyButton}
            >
              <Ionicons name="send" size={24} color="#fff" />
              <Text style={styles.buttonText}>Envoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header title="Sondages" navigation={navigation} />
      <View style={styles.containerSondage}>
        <TouchableOpacity
          onPress={() => setFormVisible(true)}
          style={styles.addButton}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="add" size={24} color="#F674A2" />
          </View>
          <Text style={textStyles.pBoldInverted}>Proposer un projet</Text>
        </TouchableOpacity>

        {surveys.map((survey) => (
          <TouchableOpacity
            key={survey.id}
            onPress={() =>
              setExpandedSurvey(expandedSurvey === survey.id ? null : survey.id)
            }
            style={styles.surveyContainer}
          >
            <Text style={styles.surveyQuestion}>{survey.question}</Text>
            <Ionicons
              name="arrow-down"
              size={40}
              color="#fff"
              style={{
                transform: [
                  { rotate: expandedSurvey === survey.id ? "180deg" : "0deg" },
                ],
              }}
            />
            {expandedSurvey === survey.id && (
              <View>
                <Text style={styles.surveyDescription}>
                  {survey.description}
                </Text>
                <View style={styles.thumbsContainer}>
                  <TouchableOpacity
                    onPress={() => vote(survey.id, "up")}
                    disabled={votedSurveys.includes(`${survey.id}-up`)}
                    style={[
                      styles.voteButton,
                      votedSurveys.includes(`${survey.id}-up`)
                        ? styles.voteButtonGreen
                        : null,
                    ]}
                  >
                    <FontAwesome5 name="thumbs-up" size={20} color="white" />
                    <Text style={styles.voteButtonText}>
                      {" "}
                      ({survey.votes.up})
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => vote(survey.id, "down")}
                    disabled={votedSurveys.includes(`${survey.id}-down`)}
                    style={[
                      styles.voteButton,
                      votedSurveys.includes(`${survey.id}-down`)
                        ? styles.voteButtonRed
                        : null,
                    ]}
                  >
                    <FontAwesome5 name="thumbs-down" size={20} color="white" />
                    <Text style={styles.voteButtonText}>
                      {" "}
                      ({survey.votes.down})
                    </Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  placeholder="Ajouter un commentaire..."
                  onSubmitEditing={(event) =>
                    addComment(survey.id, event.nativeEvent.text)
                  }
                  style={styles.commentInput}
                />
                {survey.comments.map((comment, commentIndex) => (
                  <View key={commentIndex}>
                    <Text>{comment.text}</Text>
                    
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFF7FE",
    paddingTop: 96,
    padding: 24,
    gap: 48,
  },
  containerInput: {
    gap: 12,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end", // Add this line
  },
  category: {
    backgroundColor: "transparent",
    padding: 20,
    gap: 20,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#007A9D",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingBottom: 200,
  },
  surveyContainer: {
    width: "100%",
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#007A9D",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  containerSondage: {
    width: "100%",
    alignItems: "flex-start",
    gap: 24,
  },
  iconContainer: {
    backgroundColor: "#FFF",
    borderRadius: 4,
  },
  surveyQuestion: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
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
  voteButton: {
    flexDirection: "row",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ccc", // Gris par défaut
    marginBottom: 10,
  },
  voteButtonGreen: {
    backgroundColor: "green",
  },
  voteButtonRed: {
    backgroundColor: "red",
  },
  voteButtonText: {
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  buttonText: {
    color: "#FFFFFF",
  },
  commentInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flex: 1,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  newSurveyContainer: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  newSurveyInput: {
    padding: 10,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 5,
  },
  newSurveyInputDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
    backgroundColor: "white",
    borderRadius: 5,
    height: 100,
  },
  createSurveyButton: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F674A2",
  },
  closeFormButton: {
    backgroundColor: "#F674A2",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  replyButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#007bff",
  },
  reply: {
    marginLeft: 20,
    fontStyle: "italic",
    color: "#666",
  },
  toggleFormButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F674A2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
    gap: 10,
  },
  txtFormButton: {
    color: "#FFFFFF",
  },
  thumbsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    gap: 20,
  },
  surveyDescription: {
    color: "white",
  },
  titleClose: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
});

export default SurveysApp;
