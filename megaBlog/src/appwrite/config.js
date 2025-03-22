import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from 'appwrite'

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket= new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
return await this.databases.createDocument(
    conf.appwriteDataBaseId,conf.appwriteCollectionId,slug,{
        title,content,featuredImage,status,userId
    }
)
        }
        catch(error){
            throw error
        }
    }
    async updatePost(slug,{title,content,featuredImage,status,userId}){
         try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
         }
         catch(error){
            throw error
         }
    }
    async deletePost(slug){
    try{ 
         await this.databases.deleteDocument(conf.appwriteDataBaseId,
        conf.appwriteCollectionId,slug
    )}
    catch(error){
        throw error
        
    }

    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(conf.appwriteDataBaseId,
                conf.appwriteCollectionId,slug)
        }
        catch(error){
            throw error
        }
    }
     async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,queries,
            )
        }
        catch(error){ throw error }
     //yahan queries use krnre ke lie indexes banane padenge, yahan status ka type keys banai hai 
     }
  
     // file upload service 

     async uploadFile(file){
        try{  
             return await this.bucket.createFile(conf.appwriteBucketId,
                ID.unique(),
                file
             )
        }
        catch(error)
        {
            throw error
        }
     }
// jab uploadFile function use hoga tab hame return me id hi milegi file ki vahi hum upar databse service me featured image me denge

     async deleteFile(fileId){
try{
    await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId 
    )
}
catch(error){
    throw error
}
     }

     // preview service

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}

const service = new Service()

export default service 
