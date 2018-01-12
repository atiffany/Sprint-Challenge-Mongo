###Questions###

1. Describe the following: DataBase, Collection , Document
A database is a set of data that is stored in such a structure as can be accessed, viewed, possibly changed. For our uses, we have data that needs to persist, to be saved and accessed at a later unknown time. In order to do this, the information needs to be stored. We put this data in a database, which allows us to save and access the data again. In Mongo, the database stores collections of documents.
A collection is a group of at least one. It is the way data is stored. Since Mongo is non-relational, data is not stored as a table with rows and columns, as one might see in SQL. Instead, data are stored as separate documents in a collection of documents. This is more similar to a rolodex to store contact information, rather than a spreadsheet. 
A document is one instance of data in a collection. However the data is created according to the set schema, one occurrance of using that schema will be set to a document. For each entry (each book in the library, each artist on a record label, each song on a playlist) there will be a separate document in that specific collection that will have the information specific to that entry.



2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
The relationships added to the non-relational databases are done so in two ways. By embedding or by reference. One would use embedding if the data were minimal that needed to be related, and it could be put inside the schema and the document itself. If there is a large amount of data that needs to be related, a person could use references, creating a pointer that links to another document. 
In order to fill that first document with the data that the reference points to, the .populate() command then uses the reference to find the related data and bring it in to the first document.


3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
MVC stands for Model-View-Controller Architecture. This is a pattern for writing code to delineate the application into three parts. This makes it easier to control the information that is accepted from and presented to the user of the application. The model is considered the central component of the MVC pattern. Independent of the user interface, it manages the data and sets the logic and the rules for the application.
The View is the way the data is outputted to the user. It may have multiple views---this is the part of the application that sends information to the user of the application.
The Controllers are the way data is accepted from the user. It takes user input and converts it into usable data either to send to the model or to send to the view. 