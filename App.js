// App.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const App = () => {
    const [playerVal, setPlayerVal] = useState(null);
    const [computerVal, setComputerVal] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const logic = (playerVal, computerVal) => {
        if (playerVal === computerVal) {
            return 0;
        } else if (
            (playerVal === "ROCK" && computerVal === "SCISSORS") ||
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    };

    const decision = (playerChoice) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice = 
            choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, compChoice);
        if (val === 1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setPlayerScore(playerScore + 1);
        } else if (val === -1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setCompScore(compScore + 1);
        } else {
            setComputerVal(compChoice);
            setPlayerVal(playerChoice);
        }
    };

    return (
      <View style={styles.container}>
        <LinearGradient 
            colors={['rgba(235, 123, 19, 0.9)', 'transparent']}
            style={styles.background}
            />

            <Text style={styles.title}>
                Rock Scissor Paper
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => decision("ROCK")}
                >
                  <Image
                      style={styles.image}
                      source={
                        require('./assets/rock.png')
                      }
                      
                  />

                </TouchableOpacity>
            
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => decision("SCISSORS")}
                >
                 <Image
                      style={styles.image}
                      source={
                        require('./assets/scissors.png')
                      }                      
                />   
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => decision("PAPER")}
                >
                <Image
                      style={styles.image}
                      source={
                        require('./assets/paper.png')
                      }                      
                />             

                </TouchableOpacity>
            </View>

            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>
                    Your Choice : {playerVal}
                </Text>
                <Text style={styles.scoreText}>
                    Computer's Choice: {computerVal}
                </Text>
                <Text style={styles.scoreText}>
                    Your Score : {playerScore}
                </Text>
                <Text style={styles.scoreText}>
                    Computer Score : {compScore}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cccccc",
        color: "#fff",
    },
        background: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 1000,
    }, 
    title: {
        fontSize: 28,
        marginBottom: 20,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
  
    scoreContainer: {
        marginTop: 30,
        alignItems: "center",
    },
    scoreText: {
        color: "black",
        fontSize: 25,
        marginBottom: 15,
        textAlign: "center",
    },
    image: {
      width: 100,
      height: 100,
      paddingVertical: 12,
      paddingHorizontal: 10,
      marginHorizontal: 14,
    }
});

export default App;
