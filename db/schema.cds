namespace db;

using ZAPI_BUSINESS_PARTNER from '../srv/external/ZAPI_BUSINESS_PARTNER';

entity A_BusinessPartner as projection on ZAPI_BUSINESS_PARTNER.A_BusinessPartner { //CRU
    key BusinessPartner,
        Customer,
        Supplier,
        AcademicTitle
};

entity A_AddressEmailAddress as projection on ZAPI_BUSINESS_PARTNER.A_AddressEmailAddress { // CRUD
    key AddressID, // string(10)
    key Person, // string(10)
    key OrdinalNumber, // string(3)
    IsDefaultEmailAddress, // boolean
    EmailAddress // strin (241)

}

// extend projection A_BusinessPartner {
//     AdditionalLastName
// }