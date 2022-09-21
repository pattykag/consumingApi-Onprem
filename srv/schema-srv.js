const cds = require('@sap/cds');

module.exports = async (srv) => {
    const { A_BusinessPartner } = srv.entities;
    // Using CDS API      
    const ZAPI_BUSINESS_PARTNER = await cds.connect.to("ZAPI_BUSINESS_PARTNER");

    srv.on('READ', A_BusinessPartner, req => ZAPI_BUSINESS_PARTNER.run(req.query));
    
    srv.on('UPDATE', A_BusinessPartner, async (req) => {
        console.log(req.params);
        ZAPI_BUSINESS_PARTNER.run(req.update);
    });
}