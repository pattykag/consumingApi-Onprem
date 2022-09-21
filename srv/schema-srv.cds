using { db } from '../db/schema';

service externalApi { 
    entity A_BusinessPartner as projection on db.A_BusinessPartner;
}