//Create customer collection
// Validation rules ensuring required fields (Customer_ID, Customer_Name, Customer_Email, Customer_Country) and an array "Tickets" with Ticket_ID, Show_ID, Ticket_Price, and Ticket_Seat (not required).
use('tour')
db.createCollection("customer", {
  validator: {
     $jsonSchema: {
        bsonType: "object",
        required: ["Customer_ID", "Customer_Name", "Customer_Email", "Customer_Country"],
        properties: {
           Customer_ID: {
              bsonType: "string",
           },
           Customer_Name: {
              bsonType: "string",
           },
           Customer_Email: {
              bsonType: "string",
           },
           Customer_Country: {
              bsonType: "string",
           },
           Tickets: {
              bsonType: "array",
              items: {
                 bsonType: "object",
                 required: ["Ticket_ID", "Show_ID", "Ticket_Price"], 
                 properties: {
                    Ticket_ID: {
                       bsonType: "string",
                    },
                    Show_ID: {
                       bsonType: "string",
                    },
                    Ticket_Price: { 
                       bsonType: "number", 
                       minimum: 100 // Minimum price 100 euros
                    },
                    Ticket_Seat: {
                       bsonType: "string"
                    }
                 }
              }
           }
        }
     }
  }
});


db.createCollection("merch", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["_id", "Merchandise_ID", "Merchandise_Name", "Merchandise_Price", "SKU"],
          properties: {
             _id: {
                bsonType: "string"
             },
             Merchandise_ID: {
                bsonType: "string"
             },
             Merchandise_Name: {
                bsonType: "string"
             },
             Merchandise_Price: {
                bsonType: "double"
             },
             SKU: {
                bsonType: "array",
                items: {
                   bsonType: "object",
                   required: ["SKU_Code", "StockQuantity"],
                   properties: {
                      Size: {
                         bsonType: "string"
                      },
                      SKU_Code: {
                         bsonType: "string"
                      },
                      StockQuantity: {
                         bsonType: "int"
                      }
                   }
                }
             }
          }
       }
    }
 })
 
