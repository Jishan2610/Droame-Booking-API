# Droame-Booking-API
DOC:- 
Tech Stacks :- Front-end:-HTML,CSS,JAVASCRIPT,REACTJS Back-end:- Node,Express,MongoDB,Mongoose with other smaller packages.
Now the approach was pretty simple .I created two schemas for mongoDb one is "User" and the other is "Booking".
So there can be any number of users and each booking will be associated with an user and that's the main logic.
So while storing a document of "Booking" model I stored the user reference(stored user ID in "Boooking" model to which this booking is associated with) .
With the help of this user id as well as bookingId we can uniquely identify each booking. 
I provided all the feature of creating User , creating Booking,Editting Booking,Deleting Booking. 
Now for the front-end you can easily call the backend server with some minor modification.
PROCEDURE:- create an .env file and set the connection string for mongoDb as MONGO_URI="{Your connection String}" .
type npm install at the command line to install all the dependencies for the project.
then type npm start to run the server . Now we don't need to care about the requests to the server as front-end will take care of that.
Now for the frontend part make sure when you are testing on your local setup set the port different from the port used for the backend web server. 
copy the project in your local machine. 
type npm install to install all the dependency then type npm start in your commandline to run the project.
And make sure to change all the serverlink to yours own.
One more thing for Booking Shot Id I provided some specific values which will get accepted they are [1100,1200,1300,1400,1101,1201,1301,1401] And yeah that's all for this project. THe video demo link is shared here also.Download or play on the browser itself.
VIDEO LINK OF THE PROJECT WORKING :- https://drive.google.com/file/d/1a8tOndmD7UqHXuli1YP1wHfI6CPIOznB/view?usp=sharing
JUST A MENTION THAT "I got really less time due to my class tests and projects and what not because I am from Mechanical Engineering Background ,so couldn't really got much time to focuse on the UI ,just tried to finish all the CRUD functionalities for both front-end and back-end with minimalistic front-end styling.
