## Chat App



## BackEnd Structur

# config

Contains all the configuration files and .env variables

# controllers
For business logic. 

# Router 
Contains all the routes
index.js is the entry and has the routes to login,register 

# Middleware
Form validation and other

# public 
user images 

# uploads
user images uploaded into chat

# database

all the logics and files realted to postgres and config of database

# socket

Logic that allows chat between users using sockets and webrtc

## Sequelize commands to create new models and migrations

Creating user model : sequelize model:create --name User --attribute  firstname:string email:string password:string gender:string avatar:string

This creates a migration folder

sequelize db:migrate for migrating the file to postgres


# seeding with sequelize 

sequelize seed:create --name users


