import { gql } from "@apollo/client";


export const CREATE_NOTE = gql`
mutation addNote($title: String, $body: String, $tag: String) {
addNote(title: $title, body: $body, tag: $tag) {
id
title
body
tag
}
}`;


export const DELETE_NOTE = gql`
mutation deleteNote($id: ID!) {
deleteNote(id: $id) {
id
title
body
tag
}
}`;

export const Update_NOTE = gql`
mutation updateNote($id: ID!, $title: String, $body: String, $tag: String) {
updateNote(id: $id, title: $title, body: $body, tag: $tag) {
id
title
body
tag
}
}`;

export const CREATE_TODO = gql`
mutation addTodo($text: String) {
createTodo(text: $text) {
id
text
}
}`;

export const DELETE_TODO = gql`
mutation deleteTodo($id: ID!) {
deleteTodo(id: $id) {
id
text
}
}`;
