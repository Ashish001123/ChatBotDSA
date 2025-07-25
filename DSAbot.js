import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD2jNuJ6KSmsdiu03iCq7L-sO4430NjhZE" });
const history = [];
const DSAprompt = `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
      Data structure and Algorithm. You have to solve query of user in simplest way
      If user ask any question which is not related to Data structure and Algorithm, reply him rudely
      Example: If user ask, How are you
      You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely
      
      You have to reply him rudely if question is not related to Data structure and Algorithm.
      Else reply him politely with simple explanation`

    const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    config: {
      systemInstruction: DSAprompt
    },
  });  


async function main(){
    const userProblem = readlineSync.question("Ask your Data structure and Algorithm related question: ");
    const response = await chat.sendMessage({message : userProblem});
    console.log(response.text);
    main();
}

main();
