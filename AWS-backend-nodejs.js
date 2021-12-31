// Get AWS development kit
const AWS = require('aws-sdk')
// Create an instance of the dynamodb object
const docClient = new AWS.DynamoDB.DocumentClient()
// table to be queried
const tableName = "Colors"

// Handler function
exports.handler = (event, context, callback) => {
    
    // Define the parameters to obtain an items from dynamodb
    // tables
    let params = {
        // Name of the table to be queried
        TableName: tableName,
        Key: {
            // The object ID to be obtained
            "ID": "01"
        }
    }
    
    // Finally return the color with that ID in the table
    docClient.get(params, (err, data) => {
        callback(err, data.Item.Color)
    })
    
};
