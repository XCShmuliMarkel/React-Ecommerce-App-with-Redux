//import { useState, useEffect } from 'react';
import jsforce from 'jsforce';

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
    
      console.log("fetched : " + result.records.length);
    });


    console.log('User ID: ' + userInfo.id);
});

//var records = [];

