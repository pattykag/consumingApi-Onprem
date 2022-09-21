namespace db;

using ZAPI_BUSINESS_PARTNER from '../srv/external/ZAPI_BUSINESS_PARTNER';

entity A_BusinessPartner as projection on ZAPI_BUSINESS_PARTNER.A_BusinessPartner {
    key BusinessPartner,
        Customer,
        Supplier,
        AcademicTitle
};

// extend projection A_BusinessPartner {
//     AdditionalLastName
// }