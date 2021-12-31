const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const tableName = "Colors"

exports.handler = (event, context, callback) => {
    
    let params = {
        TableName: tableName,
        Key: {
            "ID": "01"
        }
    }
    
    docClient.get(params, (err, data) => {
        callback(err, data)
    })
    
};
