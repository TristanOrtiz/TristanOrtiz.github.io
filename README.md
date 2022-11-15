
<h1> CS 3366 Project 2 Report  <font size="3px"> by Tristan Ortiz </font></h1> 
<p align="center">
  <img src="https://i.ibb.co/pLrrgtC/project-2-sketch.png" alt="Project Mirror Sketch" width="600px">
</p>

### General Information
Personalized Calendar
- The personalized calendar takes in your data from a JSON file and displays the current days of the week with their corresponding events. The JSON file could be pulled from your local mail or calendar api and will be able to be updated on what you have going on currently in the week.

News Feed
- The news feed is displayed at the top of the mirror giving full room to display all of the trending headlines. The news feed will be using data from a JSON file grabbed from New York times api.

Text Messages / Social Feed Items
- Your text messages will be displayed on the mirror for you to read hands-free. This works because the mirror will be able to connect to your phone via wifi and grab your text messages and display them for you.
- Also instead of just viewing your text messages, you can also view your social media pages. You will be also be able to keep up with all of your social needs hands-free.

Clock
- The clock is conviently displayed so you can see what the current time is.

Weather
- The weather is also displayed so you can see what the current weather is at the time. It also will be able to show you what it feels like and what conditions the curret weather is in.


### Health-Related Information
Sleep
- The mirror will be able to connect to your smart watch and access your health information. The mirror will be able to provide how long you slept for, how much was it light sleep vs deep sleep, and what the comparisons are to last weeks. 

Weight
- The mirror will be able to display your weight with the build in scale that is installed in front of the mirror. While displaying your current weight, You will also be able to see compare what your last weeks weights were.

Exercise
- While the mirror is able to connect to your smart watch, it will display how many steps you have currently in the day. While displaying your steps, it will also tell you how long you stood and exercised that current day. A line graph will also be displayed showing you your progress.

Mirror Time
- The amount of time you spent at your wonderful mirror will also be displayed for you. Also, the amount of last weeks time will be displayed for you.

## Sketch Implementation
<p align="center">
  <img src="https://i.ibb.co/LP1zw66/Screenshot-2022-11-15-171357.png" alt="Project Mirror Implemented Screenshot" width="900px">
</p>

### General Information
Personalized Calendar
- The personalized calendar was implemented by using loadJSON() to gather information from a local file called calendar.json.
- The calendar is displayed by using the gathered information and creating a text box that shows all of the current weeks task.

News Feed 
- The news feed was implemented by gather information from a local file called news.json.
- The gathered information is then displayed in the news feed at the top showing breaking headline titles.

Clock
- The clock is displayed for the user at the top left below the new feed.
- The clock finds its current time by communicating with the user's computer. 

Weather
- The weather is displayed at the top right below the news feed.
- The weather is grabbed from the openweather api and then displays it for the user in a text box.
- The text box displays the current location, current tempature, what it feels like outside, the condition outside, and a weather icon for the condition.

### Health-Related Information
Weight
- The current weight of the user is displayed at the bottom left of the user below the clock.
- The weght is grabbed from a json file that could be used with a scale to upload the current user's weight.
- Below the current user's weight is a line graph of last weeks weight. Each time the user uses the scale, the scale could save the user's weight in a json file.

## Advance Feature
<p align="center">
  <img src="https://media4.giphy.com/media/i4srHZXccNFmSr5fYM/giphy.gif?cid=790b7611ba12e81c65408fc392fc9f436766fde802298719&rid=giphy.gif&ct=g" alt="Project Advance Feature Gif" width="900px">
</p>

### Drag and Drop UI
- The drag and drop UI was implemented for the user to move around the displayed items.
- Each text box is able to be moved around and positioned freely for the user's experience.
- The drag and drop UI was created in the draggable.js file.
