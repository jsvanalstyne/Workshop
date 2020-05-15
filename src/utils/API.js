import GraphQLClient from 'graphql-js-client';

// This is the generated type bundle from graphql-js-schema
import types from './types.js';



export default {
    getAllDocuments : function (){
     return (const client = new GraphQLClient(types, {
        url: 'https://writing-workshop.herokuapp.com/graphql',
        fetcherOptions: {
          headers: `Authorization: Basic aGV5LXRoZXJlLWZyZWluZCA=`
        }
      }));
    }
}