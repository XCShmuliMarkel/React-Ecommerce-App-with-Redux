//import { useState, useEffect } from 'react';
import jsforce from 'jsforce';

export const Records = [1,2,3];
console.log(Records);
export default Records;

/*
{
let records =[1,2,3];
console.log(records);
}
console.log(records);
let conn = new jsforce.Connection({
    loginUrl : 'https://login.salesforce.com',
    accessToken : 'u2HY0jp6NGPmivFuxSqxaNf2',
    proxyUrl: "https://node-salesforce-proxy.herokuapp.com/proxy"
});
var password = 'Salesforce1u2HY0jp6NGPmivFuxSqxaNf2';
conn.login('admin@rcg99.demo', password, function(err, userInfo) {
   
    if (err) {
        console.error(err);
    }
    conn.query("SELECT Id, Name FROM ccrz__E_Product__c WHERE Id = \'a8P4P000000cI8wUAE\'", function(err, result) {
        console.log("total : Hi");
      if (err) { return console.error(err); }
    
      console.log("fetched : " + result.records.length);?id=a5x4T000000GwN4QAK
    });


    console.log('User ID: ' + userInfo.id);
    var options = {
        headers: {
            'Authorization': 'Bearer ' + conn.accessToken
        }
    }
    
    //https://github.com/jsforce/jsforce/issues/492
        conn.requestGet('/services/apexrest/ccrz/ccproduct/v8/fetch?LIMIT=24', options)
        .then(function(result) {
            records = result.productList;
            console.log(result);
            console.log(records);
        }, function (err) {
            console.log(err);
        }
      
        );
       
    });
    */