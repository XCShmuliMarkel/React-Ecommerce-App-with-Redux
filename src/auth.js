import { useState, useEffect } from 'react';
import jsforce from 'jsforce';

let conn = new jsforce.Connection({
    loginUrl : 'https://login.salesforce.com',
    accessToken : 'u2HY0jp6NGPmivFuxSqxaNf2',
    proxyUrl: "https://node-salesforce-proxy.herokuapp.com/proxy"
});

conn.login('admin@rcg99.demo', 'Salesforce1' + 'u2HY0jp6NGPmivFuxSqxaNf2', function(err, userInfo) {
   
    if (err) {
        console.error(err);
    }
    console.log('User ID: ' + userInfo.id);
});