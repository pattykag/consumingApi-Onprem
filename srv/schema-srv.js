const cds = require('@sap/cds');
// const { retrieveJwt } = require("@sap-cloud-sdk/core");

// function getJWT(req) {
//     if (typeof req._ !== "undefined") {
//         return retrieveJwt(req._.req);
//     } else {
//         return "";
//     }
// }

module.exports = async (srv) => {
    const { A_BusinessPartner, A_AddressEmailAddress } = srv.entities;
    cds.env.features.fetch_csrf = true;
    
    // Using CDS API      
    const ZAPI_BUSINESS_PARTNER = await cds.connect.to("ZAPI_BUSINESS_PARTNER");

    // ********************* A_BusinessPartner ********************* //
    srv.on(['READ', 'CREATE', 'UPDATE'], A_BusinessPartner, req => ZAPI_BUSINESS_PARTNER.run(req.query));

    // ********************* A_AddressEmailAddress ********************* //
    srv.on('*', A_AddressEmailAddress, req => ZAPI_BUSINESS_PARTNER.run(req.query));
}

cds.env.features.fetch_csrf = false;