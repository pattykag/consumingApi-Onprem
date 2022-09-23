const cds = require('@sap/cds');
cds.env.features.fetch_csrf = true;

module.exports = async (srv) => {
    const { A_BusinessPartner, A_AddressEmailAddress } = srv.entities;
    // Using CDS API      
    const ZAPI_BUSINESS_PARTNER = await cds.connect.to("ZAPI_BUSINESS_PARTNER");

    // ********************* A_BusinessPartner ********************* //
    srv.on(['READ', 'CREATE', 'UPDATE'], A_BusinessPartner, req => ZAPI_BUSINESS_PARTNER.run(req.query));
    // ********************* A_BusinessPartner ********************* //

    // ********************* A_AddressEmailAddress ********************* //
    srv.on('*', A_AddressEmailAddress, req => ZAPI_BUSINESS_PARTNER.run(req.query));
    // ********************* A_AddressEmailAddress ********************* //
}