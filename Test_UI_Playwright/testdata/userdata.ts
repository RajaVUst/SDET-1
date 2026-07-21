import {Secrets} from '../src/secrets'
export const userdata ={

    user1:{
       name:"Jane Smith",
       email:"jane@example.com",
       phone:"555-123-4567",
       Address:"123 Main Street",
       City:"Springfield",
       ZIP:"62701",
       Country:"USA",
       State:"AL"
    },

    card_details:{
        Cardholder_Name :"Jane Smith",
        Card_Number  :Secrets.get('CARD_NUMBER'),
        EXPIRY : Secrets.get('EXPIRY'),
        CVV : Secrets.get('CVV')
    }
}