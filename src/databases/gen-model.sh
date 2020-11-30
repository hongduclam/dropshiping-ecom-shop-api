#!/usr/bin/env bash
#npx sequelize-cli model:generate --name InvetoryProduct --attributes productId:integer,availableQuantity:integer,incomingQuantity:integer,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name ProductMedia --attributes productId:integer,name:string,link:string,description:string,mineType:string,contentType:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name ProductType --attributes name:string,description:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name Collection --attributes title:string,description:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name CollectionDetails --attributes collectionId:integer,productId:integer,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name Customer --attributes firstName:string,lastName:string,email:string,phoneNumber:string,addressFirstname:string,addressLastName:string,addressCompany:string,addressCity:string,addressCountry:string,addressPostalCode:string,addressPhone:string,notes:string,isAgreeMaketingMail:boolean,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name CustomerProducts --attributes customerId:integer,productId:integer,productName:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name CustomerTags --attributes customerId:integer,tag:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name Order --attributes orderNumber:string,orderDate:date,orderTotal:decimal,paymentType:enum,cartId:string,customerId:integer,paymentStatus:enum,fullfillmentStatus:enum,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name Cart --attributes sessionId:string,ip:string,createdBy:integer,updatedBy:integer
#npx sequelize-cli model:generate --name CartDetails --attributes cartId:integer,productId:integer,quantity:integer,productName:string,createdBy:integer,updatedBy:integer
