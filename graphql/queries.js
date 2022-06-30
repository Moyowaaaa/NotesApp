import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query GetNotes {
        notes {
            id
            title
            body
            tag
            }
            }`;


export const GET_SINGLE_NOTE = gql`
    query GetSingleNote($id: ID!) {
        note(id: $id) {
        id
        title
        body
        tag
        }
        }`;

        export const GET_TODOS = gql`
            query GetTodos {
                todos {
                    id
                    text
                    }
                    }`;
                    
        
