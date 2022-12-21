/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#bttnDomain").addEventListener("click", () => {
    document.querySelector("#domainText").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extension = ["com", "net", "edu", "uy", "org", "es"];

  var result = "";
  //Forma 1
  for (let value1 of pronoun) {
    for (let value2 of adj) {
      for (let value3 of noun) {
        for (let value4 of extension) {
          result += "<li>" + value1 + value2 + value3 + "." + value4 + "</li>";
        }
      }
    }
  }

  //Forma 2
  /*
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
       for (let k = 0; k < noun.length; k++) {
         for (let e = 0; e < extension.length; e++) {
           result +=
             "<li>" +
             pronoun[i] +
             adj[j] +
             noun[k] +
             "." +
             extension[e] +
             "</li>";
         }
       }
     }
   }
   */

  return result;
};
