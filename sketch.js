var cam;
var weights = [];
var weightsOpposite = [];
var weightsDays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var transx = 30;
var transy = 680;
var tempOS = 50;
var daysOS = tempOS + 20;

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&appid=d61ae71e609ddd8ea41b3806d7db23b0&units=imperial";
var weatherStuff = [];
let weatherShape;
let weatherShapeIcon;

var newsStuff;
let newsShape;

var calenderShape;
var calenderStuff;

let clockShape;

let weightShape;
let weightStuff;
var weightToday = 225;

function preload() {
  weatherStuff = loadJSON(weatherURL);
  newsStuff = loadJSON('assets/news.json')
  calenderStuff = loadJSON('assets/calender.json');
  weightStuff = loadJSON('assets/weight.json');
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();
  x = width;
  
  weather();
  clock();
  news();
  calender();
  weight();
  
}

function draw() {
  background(200);
  image(cam, 0, 0, windowWidth, windowHeight);
  
  clockShape.over();
  clockShape.update();
  clockShape.showText();
  
  weatherShape.over();
  weatherShape.update();
  weatherShape.showText();
  weatherShapeIcon.over();
  weatherShapeIcon.update();
  weatherShapeIcon.showImage();
  
  newsShape.over();
  newsShape.update();
  newsShape.showText();
  
  calenderShape.over();
  calenderShape.update();
  calenderShape.showText();
  
  weightShape.over();
  weightShape.update();
  weightShape.showText();
  weightGraph();
  
}

function weightGraph() {
  for (var i = 0; i < 7; i++) {
    weightsOpposite[i] = -map(weights[i], min(weights), max(weights), 0, 50);
  }
  
  for (var j = 0; j < 7; j++) {
    var x1 = j*50;
    var x2 = (j+1)*50;
    
    textAlign(CENTER);
    
    if (j < 6) {
      push();
        translate(transx, transy);
        line(x1, weightsOpposite[j], x2, weightsOpposite[j+1]);
        push();
          fill("blue");
          ellipse(x1, weightsOpposite[j], 15, 15);
        pop();
        textSize(20);
        text(weights[j], x1, tempOS);
        textSize(15);
        text(weightsDays[j], x1, daysOS);
      pop();
    }
    else {
      push();
        translate(transx, transy);
        push();
          fill('blue');	
          ellipse(x1, weightsOpposite[j], 15, 15);
        pop();
      	textSize(20);
        text(weights[j], x1, tempOS);
        textSize(15);
        text(weightsDays[j], x1, daysOS);
      pop();
    }
  }
  
}

function weight() {
  weights.push(weightStuff.sunday);
  weights.push(weightStuff.monday);
  weights.push(weightStuff.tuesday);
  weights.push(weightStuff.wednesday);
  weights.push(weightStuff.thursday);
  weights.push(weightStuff.friday);
  weights.push(weightStuff.saturday);
  
  weightShape = new Draggable ("Weight Today: " + weightToday + " lbs." + "\nLast Week Weights", 10, 540, 320, 200, 30, CENTER);
}

function calender() {
  calenderShape = new Draggable ("Sunday: " + calenderStuff.sunday + "\nMonday: " + calenderStuff.monday + "\nTuesday: " + calenderStuff.tuesday + "\nWednesday: " + calenderStuff.wednesday + "\nThursday: " + calenderStuff.thursday + "\nFriday: " + calenderStuff.friday + "\nSaturday: " + calenderStuff.saturday, windowWidth-400, 540, 400, 220, 25, CENTER);
}

function news() {
  newsShape = new Draggable ("BREAKING NEWS\n\u2022 " + newsStuff.title1 + "\n\u2022 " + newsStuff.title5 + "\n\u2022 " + newsStuff.title3, 0, 10, windowWidth, 150, 20, CENTER);
}

function weather() {
  let temp = weatherStuff.main.temp;
  let feels = weatherStuff.main.feels_like;
  let condition = weatherStuff.weather[0].main;
  let icon = weatherStuff.weather[0].icon;
  let iconDescription = weatherStuff.weather[0].description;
  let city = weatherStuff.name;
  
  weatherShape = new Draggable(city + "\nTemp: " + temp + "\u{00B0}F" + "\nFeels Like: " + feels + "\u{00B0}F \nCondition: " + condition, windowWidth-370, 200, 380, 150, 30, CENTER);
  let img = createImg("http://openweathermap.org/img/wn/" + icon + "@2x.png", "WeatherIcon");
  img.hide();
  weatherShapeIcon = new Draggable(img, windowWidth-90, 170, 100, 100, 0, CENTER);
  
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  clockShape.pressed();
  weatherShape.pressed();
  weatherShapeIcon.pressed();
  newsShape.pressed();
  calenderShape.pressed();
  weightShape.pressed();
}

function mouseReleased() {
  clockShape.released();
  weatherShape.released();
  weatherShapeIcon.released();
  newsShape.released();
  calenderShape.released();
  weightShape.released();
}

function clock() {
  let Hour = hour();
  let min = minute();
  sec = second();
  let noon = Hour >= 12? " PM" : " AM";
  if(min < 10)
    min = "0"+min;
  Hour%=12;
  
  if(month() == 1) {
    mth = 'January';
  }else if(month() == 2) {
    mth = 'February';
  }else if(month() == 3) {
    mth = 'March';
  }else if(month() == 4) {
    mth = 'April';
  }else if(month() == 5) {
    mth = 'May';
  }else if(month() == 6) {
    mth = 'June';
  }else if(month() == 7) {
    mth = 'July';
  }else if(month() == 8) {
    mth = 'August';
  }else if(month() == 9) {
    mth = 'September';
  }else if(month() == 10) {
    mth = 'October';
  }else if(month() == 11) {
    mth = 'November';
  }else if(month() == 12) {
    mth = 'December';
  }
  if(day() == 11 || day() == 12) {
    date = day() + 'th';
  }else if(day() % 10 == 1) {
    date = day() + 'st';
  }else if(day() % 10 == 2) {
		date = day() + 'nd';
  }else {
    date = day() + 'th';
  }
  yr = year();
  clockShape = new Draggable(mth + ' ' + date + ", " + yr + "\n" + Hour + ":" + min + noon, 0, 230, 300, 70, 30, CENTER);
}