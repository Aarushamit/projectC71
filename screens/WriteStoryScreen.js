import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            author: '',
            title: '',
            story: '',
        }
    }

    submitStory = () => {
        db.collection("informationOfStory").doc(this.state.author).get().then((doc) => {
            var authorName = doc.data()
            this.setState({
                author: authorName
            })
        })

        db.collection("informationOfStory").doc(this.state.title).get().then((doc) => {
            var titleName = doc.data()

            this.setState({
                title: titleName
            })
        })
        db.collection("informationOfStory").doc(this.state.story).get().then((doc) => {
            var writeStory = doc.data()

            this.setState({
                story: writeStory
            })
        })
    }
    render(){
        return(
            <View>
                <TextInput style = {styles.inputBox}
                placeholder = "author name"
               
                />

<TextInput style = {styles.inputBox}
                placeholder = "story name"
               
                />

<TextInput style = {styles.inputBox}
                placeholder = "write the story here"
                multiline = {true}
                
                />

<TouchableOpacity style = {styles.submitButton} onPress = {this.submitStory}>
         <Text style = {styles.submitButtonText}> submit the story </Text>       
                </TouchableOpacity>
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',

      },

      submitButton:{
        backgroundColor: '#FBC02D',
        height: 50, 
        width: 100,
      },

      submitButtonText:{
        padding: 10, 
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
      },

      submitted:{
          fontSize: 50,
          textAlign: 'center',
          fontWeight: 'bold',
      },
})