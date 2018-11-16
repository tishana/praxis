# Praxis/ Project 2
This is project 2, a fullstack CRUD app, as a student in the Web Development Immersive at General Assembly.  

--------------------------------------------

## Application Function:

Praxis, your personal habit tracker.

Praxis wants to help you:
* Set Goals!
* Track Habits!
* Win Life!

I am a firm believer in goal setting as a way to be able to get the most out of life. I set goals, break those goals into smaller pieces, or habits. I then tick each habit off as they are completed. 

Now, you can do the same with Praxis. You can set new goals, and for each goal set a goal date, and create smaller habits for each goal. When you are done with the goal, you can delete it.

You can see Praxis in action here: 
<a href="http://www.youtube.com/watch?feature=player_embedded&v=vTAsKKdx4vA
" target="_blank"><img src="http://img.youtube.com/vi/vTAsKKdx4vA/0.jpg" 
alt="Video of Praxis Habit Tracker" width="240" height="180" border="10" /></a>


Here are a few screenshots of Praxis:
1. Main page, a list of goals
![main page](https://i.imgur.com/tHXAswj.png)

2. Creating a goal
![text boxes to create a goal](https://i.imgur.com/enU6PtI.png)

3. Viewing one goal and it's habits
![a goal and it's habits](https://i.imgur.com/5ls0inQ.png)

--------------------------------------------

## User Stories

* I can set a goal (Create Goal).
* I can view a list of goals (Read Goal).
* I can add a habit for a goal (Update Goal, Create Habit).
* I can view a list of habits for a goal (Read Habit).
* I can delete a goal (Delete Goal).
* I can mark a habit completed (Update Habit).

--------------------------------------------

## Technologies Used for Praxis:

* HTML5
* CSS3
* Javascript
* Express.js
* Handlebars.js
* Mongoose ad MongoDB
* MLab
* Heroku

--------------------------------------------


## How to Install Praxis locally:

* Fork and clone this repository to your machine
* Change into the new directory
* Run npm install:

```
$ npm install

```
* Open another terminal tab, and run Mongod

```
$ mongod

```
* Open yet another terminal tab, and run nodemon
```
$ nodemon

```
* In your first terminal tab, seed the database:
```
$ node seed.js

```
* Lastly, open a browser window, and navigate to http://localhost:3001

You're all set to run Praxis on your machine. You will see goals on the main page. You can delete these, and create your own. Have fun with it... Go on, win at life...


--------------------------------------------

## Future Plans for Praxis 2.0:

During this project, I realized there was so much more I wanted to do.

 I want to add authentication so each person using Praxis can see their own goals and habits. I have a user model right now, but it is not in use because I ran out of time.

I would love to add a progress bar to each goal for visual motivation. Perhaps a "2 out of 10 habits completed" or even colors to show how much is done. This would involve marking the habits "complete" and comparing the completed habits to total habits, then rendering the progress bar.

Another improvement is being able to edit the goal title, description, and goal date, and editing the habit titles. Plans change, and we need to adjust for that, so being able to modify those goals and habits to keep us accountable.



