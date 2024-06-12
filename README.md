# Hospital Bed Management API
This project was built with Node.js.

## Overview
This API allows you to access endpoints for tracking beds in hospitals. You have access to not only the beds but hospitals the beds belong to, the patients said beds are assigned to when that patient checks in (or remove bed assignment when parents are checked out), the users (administrators) who can access the system for handling bed management for a hospital.

## Getting Started
To set up this project for the first time (or when it is updated), run `npm install` to install all dependencies.

Get your server up by running `npm run dev`. To verify that the server is up, you should see the log message, "App up on port 8080!" (subject to change) on your console.

The development server will run on http://localhost:8080 by default if there is no .env file. A .env.example file is provided for you should you want to want to create your own .env file. Just create a copy, rename it to .env and assign values to variables provided. You may also see any lint errors in the console.

> **ℹ️ Important**
>
> To have access to the full capabilities of this API, you will need to have access to a MongoDB database. Otherwise, the API will not be able to pull any information from the database to display to the user. Consider using MongoDB atlas if you don't want to create the database locally. Create a new project in Atlas and then create a cluster.
>
> * Instructions for creating new Atlas project [here](https://www.mongodb.com/docs/atlas/government/tutorial/create-project/#navigate-to-the-create-a-project-page)
>
> * Instructions for creating new Atlas cluster [here](https://www.MongoDB.com/docs/guides/atlas/cluster/)
>
> After creating your cluster, copy the connection string (Instructions on how to do that provided [here](https://www.geeksforgeeks.org/how-to-get-the-database-url-in-mongodb/)) and assign this string to the `URI` constant in the `/config/config.js` file.

And there you go. The API should be fully functional after following these instructions.

## API Guide
The routes available from this api are as follows:

| Route | Description | Method |
| -- | -- | -- |
| / | Root of the api | GET |
| /users | Returns all users | GET |
| /users/reg | Registers a user | POST |
| /users/delete | Deletes a user | DELETE |
| /patients | Returns all patients | GET |
| /patients/add | Adds a patient to a hospital | POST |
| /patients/delete | Deletes a patient | DELETE |
| /patients/change-name | Changes patient name | patch |
| /patients/check-in | Checks in patient | POST |
| /patients/check-out | Checks out patient | POST |
| /hospitals | Returns all hospitals | GET |
| /hospitals/add | Adds a hospital | POST |
| /hospitals/delete | Deletes a hospital | DELETE |
| /hospitals/change-name | Changes hospital name | PATCH |
| /beds | Returns all beds | GET |
| /beds/add | Adds a bed | POST |
| /beds/delete | Deletes a bed | DELETE |