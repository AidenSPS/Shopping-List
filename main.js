//Global Variables
var cashCounter = 0; //Displayed, going to have table which with correct questions highlighted
var questionCounter = 0; //Hidden counter that will be translated to dollars to represent cashCounter

//Question Arrays (needed for randomization)
var gradeOne = [[["I have 5 cookies, I ate 2, How many do I have left?"],["3"]],[["I had 10 dollars, I was given 5 in allowance, how many dollars do I have?"],["15"]],[["What is 5 + 5?"],["10"]],[["What is 5-5?"],["0"]],[["When creating this the time is 10:50AM, I spent fifty minutes and I will spend an hour and a half making this game, how much time will I spend making this game?"],["40 Minutes"]]]; //[Main] -->[Ranomized Question] -->[Question] --> [Answer]

var gradeTwo = [[["I have a sequence of numbers, (2,4,6,8,10,12), what is the next number in the sequence?"],["14"]],[["I have a sequence of numbers, (100,90,80,70), what is the next number in the sequence?"],["60"]],[["I have 5 dollars to start with, each week I get 5 more dollars, how many dollars will I have after 7 weeks?"],["35 Dollars"]],[["I have 100 dollars, I then split it among my ten best friends, how much money did each person, including myself recieve after the split?"],["10"]],[["What is 1/2 + 5/10?"],["1"]]];

var gradeThree = [[["I bought a piece of land recently with 5 acre by 7 acre dimentions. What is the Area and Perimeter of my land in acres? Put answer with a / and with no spaces"],["35/24"]],[["I have two shapes, I have a right triangle and an equalateral triangle, what does the right triangle have that the equalateral triangle doesn't? Put your in 'A (x)(measurement) angle' "],["A 90 degree angle"]],[["I have a right triangle with a height of 4 and a base of 5, what is the Area of the Triangle?"],["10 Units"]],[["What is 7/3 as a mixed number? Put your answer in (x) (y)/(z) format (ie. 5 1/5)"],["2 1/3"]],[["What is 4 1/3 as an improper fraction?"],["13/3"]]];

var gradeFour = [[["What is 6/10 as a decimal? put format in (x or 0).(y)"],["0.6"]],[["What is  6/18 - 1/3?"],["0"]],[["What is 5/10 x 4/5? Put in simplest form."],["2/5"]],[["What is the mean within the set of numbers? (1,2,3,4,5,6,7,8,9,10)"],["5.5"]],[["What is the median of the set of numbers? (1,2,3,4,5)"],["3"]]];

var gradeFive = [[["How would you express the sum of 508 and x?"],["508 + x"]],[["What is 14/7 as a decimal? Use (x or 0).(y) format."],["2.0"]],[["If you lived in Portland, Oregon and you had a friend who lived in Springfield, Massachusetts. If it is 8am in Portland, what time is it in Springfield?"],["11 AM"]],[["Compute: 3^2 (3 squared)."],["9"]],[["What is the missing base of the following number? 1000"],["10"]]];

var gradeSix = [[["I have 3 green balls, I then put it in a bag with 5 purple balls. What is the ratio between GREEN BALLS and PURPLE BALLS? Write in (x):(y)"],["3:5"]],[["What are the whole number factors of 50? Write factors within commas (ie: 10 = 1,2,5,10)"],["1,2,5,10,25,50"]],[["Compute: 5 * 1000"],["5000"]],[["Compute: (4/2)/(2)"],["1"]],[["What shape does a 45/45/45 represent?"],["Equalateral Triangle"]]];

var gradeSeven = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var preAlgebra = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var algebra1 = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var geometry = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var algebra2 = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var preCalculus = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var statistics = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var bonus1 = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];

var bonus2 = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]];


//Functions and Local Variables









//DOM Scripts