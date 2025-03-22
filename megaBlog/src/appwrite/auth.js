import conf from '../conf/conf.js'

import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
async createAccount({email,password,name}){
    try{
const userAccount = await this.account.create(ID.unique(),email,password,name)
if(userAccount){
    //call another method like succesfully creqted account like login
    return this.login({email,password})
}
else{
    return  userAccount
}
    }
    catch(error){
        throw error
    }
}
async login({email,password}){
    try{
 return await this.account.createEmailPasswordSession(email,password)
    }
    catch(error){
        throw error
    }
}
async getCurrentUser(){
    try{
return await this.account.get()
    }
    catch(error){
        throw error
    }
    return null //agar koi account hoga hi nhi to null react ho jaega cattch tab kaam karega jab services reach hi nhi ho pa rhi 
}
async logout(){
    try{
        // return await this.account.deleteSession('current')
        return await this.account.deleteSessions()
    }
    catch(error){
        throw error
    }
}
}
 
const authService = new AuthService()

export default authService 
//here appwrite contains methods automaticallyso that we can use them to create new methods like create account login 

//we did this whole shit to make our code future proof so that if we change backennd services we dont face face issues  