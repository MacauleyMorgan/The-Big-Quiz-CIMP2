# The Big Quiz CI MP2

This project was created for educational purposes to demonstrate knowledge of javascript core concepts and to serve as a simple trivia quiz for users.
The live site link can be found here [Live Site](https://macauleymorgan.github.io/The-Big-Quiz-CIMP2/ "Live Site")

---
# Mockups
![Multi-page Mockup](/assets/images/mockups/multipage-mockup.png 'Multi-page Mockup')
# User Stories
## First time visitors
- As a first time user I want to be able to get feedback on my performance in the quiz, in the form of a scoring system.
- As a first time user I want to be able to easily view the quiz without contrast issues.
- As a first time user I want to display the website on any device and be eligible to read.
- As a first time user I want to be able to view instructions of the game to ensure compliance with the rules.
- As a first time user I want to be able to view how many questions I have left in the quiz without counting alongside the game.
- As a first time user I want to be able to exit the quiz by returning home via button at any point
## Returning users
- As a returning user I want to be able to save my score and be able to return to the website to view the results of previous attempts.
- As a returning user I want to be able to play using a random selection of questions each time.
- As a returning user I want to be able to play the quiz in a responsive setting that resizes based on viewport dimensions.
## Frequent users
- As a frequent user I want to be able to select between a light or dark mode theme to make the site easier to read in low light surroundings.
- As a frequent user I want to be able to view multiple previous attempts and how my score stacks up against them.
---
# Game flow
The flow of the game is in a structured format and begins when the user selects the play button on the index page which directs them to the quiz page which will load an initial question and 4 choices.
Upon loading into the quiz page the theme switcher will become available to toggle light and dark mode for a better user experience.

## Play

When the user selects an answer option by clicking the list item with that value inside, the quiz will check the answer against the object and store the response either by incrementing a score that the user will see at the end of the quiz, or if the answer is incorrect, by storing that question in the incorrect answers array for display later and loading a new random question from the questions array. 

Once a question from the array is chosen, it will be removed from the array to prevent the same question appearing twice in the quiz. Then the question will be displayed and the question index incremented until the 10 questions have been answered.

## Leader board and Incorrect answers array

Once the user has answered all ten questions the game will end and the screen will show the score and allow for an input of name to save the score. The score is then stored in the local storage as a JSON object for use in the leader board in the future.

The menu will also allow for the user to view any incorrect answers and show them the question and correct answer for future learning opportunities. The leaderboard is loaded at the bottom of the page in the form of the top 3 scores stored in the local storage. The user's score is displayed below for a comparison and on reload will be sorted and added to the top 3 if necessary. It also allows for the deletion of the local storage data via to clear score button if the user would like to reset the saved scores.

---
# Features
## Site wide
- Consistent color scheme and structure to the website to allow for easy navigation and a consistent user interface.
    > As a first time user I want to be able to easily view the quiz without contrast issues.
## Landing page
- Social media links are included inside the landing page to allow users to share the link with friends to play the quiz.
## Quiz Page
- Light/Dark modes are implemented into the quiz page to allow the user to select a preferred option whilst they answer questions.
    > As a first time user I want to be able to easily view the quiz without contrast issues.
    > As a first time user I want to display the website on any device and be eligible to read.
## 404 Page
- Links to index page are provided so the user can return without using the browser buttons.
    > As a first time user I want to be able to exit the quiz by returning home via button at any point
- Links to the quiz are provided for easier navigation of the website.
---
# Existing features
## General features
- For a better user experience, the implementation of a light and dark theme on click was created during the quiz.
    > As a first time user I want to be able to easily view the quiz without contrast issues.
    > As a first time user I want to display the website on any device and be eligible to read.
- Instructions to the user have been created by means of a clickable modal on the index page, which collapses on press off the acknowledgement button.
    > As a first time user I want to display the website on any device and be eligible to read.
    > As a first time user I want to be able to view instructions of the game to ensure compliance with the rules.
- Name and score submissions have been coded to allow the user to save the attempt and compare it with others who have completed the quiz on the same device.
    > As a first time user I want to be able to get feedback on my performance in the quiz in the form of a scoring system. 
## Quiz features
- The quiz selects a question randomly every time a question is generated ensuring a uniqueness to the quiz for every user.
    > As a returning user I want to be able to play using a random selection of questions each time.
- Displays current quiz progress to inform the user how many questions they have left to answer.
    > As a first time user I want to be able to view how many questions I have left in the quiz without counting alongside the game.
- Score feedback
    > As a returning user I want to be able to save my score and be able to return to the website to view the results of previous attempts.
# Features left to implement
- Question quantity selection in the sense of game modes, and also the ability to have quizzes with a different quantity of questions asked (e.g. 10,20 and 30 question sets).
- Further expansion of question set with selectable themes for the user to opt in/out.
- Leader board integration to back end instead of local storage to allow for a comparison of score between devices and also to create a competitive environment with friends.
---
# Design
## Wireframes

### Landing page
The image below shows the intended wire frame of the index page upon submitting the url to the browser for the first time, it shows an easily navigated game app with clear space for buttons and a collapsed modal for the instructions of the game to reduce visual clutter until the button is pressed.

![Index Initial Wireframe](/assets/images/wireframes/index-inital-wireframe.png "Index Initial Wireframe")

The below image displays the look of the index page when the user clicks the instructions button, in this instance the play button and instructions button will disappear and the instructions of the quiz will how in the page accompanied by a button to confirm acknowledgement of the instructions. After clicking the acknowledge button the screen will revert back to the initial page.

![Index Instructions Wireframe](/assets/images/wireframes/index-instruction-wireframe.png "Index Instructions Wireframe")
### Quiz page
This first wire frame of the quiz page shows the way the quiz will be displayed on desktops and larger browsers above 700px. The layout will be one easily navigable and have 4 large choice buttons for the user to respond to the question generated by the quiz. The footer of the page will also be used to display the amount of remaining questions in the set.

![Desktop Wireframe](/assets/images/wireframes/desktop-wireframe.png "Desktop Wireframe")

The mobile version of the quiz page will be displayed when the viewport is narrower than 700px, it will display the choices in a more mobile friendly format stacked on top of each other with some spacing to mitigate the risk of selecting an unintended choice for the user. In addition to this the link home stacks to create a more user friendly header.
> - As a first time user I want to be able to exit the quiz by returning home via button at any point

![Small Screen Wireframe](/assets/images/wireframes/smaller-screen-size.png "Small Screen Wireframe")
### 404 Page
This 404 wire frame will be displayed on screen sizes 700px+ and allow for a clear error message in the same consistent theme as the other pages and provides the user with 2 links both to the home page and also the quiz itself.

![404 Wireframe](/assets/images/wireframes/404-wireframe.png "404 Wireframe")

The below image shows the error page displayed on screen sizes below 700px, to keep consistency and a better user experience the buttons are stacked and have defined borders to indicate to the user.

![404 Wireframe smaller screen](/assets/images/wireframes/404-wireframe-smaller.png "404 Wireframe Smaller screen size")
---
# Technology utilisation
## HTML
HTML was the main language used to create the structural design of the website.
## CSS
The website was styled using a collapsible style sheet (CSS) externally in the folder.
## JavaScript
The website has been built using JavaScript utilities including ES6 concepts.
## Visual Studio Code
The website was developed using the Visual Studio Code IDE.
## Github
The source code for this website is hosted on Github.
## Git
Git was utilized in unison with github to push and commit to the repository of the source code.
## Favicon.io
This website was used to generate the favicon image then to download the image and use the file in the documents.
## Figma
This website was used to create wire frames and apply a planned structure and design for the website.
## Chat GPT
Chat GPT was used to generate the questions for the quiz using the following prompt 'Here is a JSON object containing a trivia question with multiple choices, using this format create me 10 more using the theme of "Enter a theme"'.

`const questions = [
    {
        question: "What is the capital of Italy?",
        choices: ["Berlin", "Madrid", "Rome", "Paris"],
        correctAnswer: "Rome"
    }
]`

I then used this template with the themes general, nature, kids, solar system etc then screened questions for duplicates resulting in 76 questions to pull from.

---

# Accessibility
## Wave extension
The wave extension was used on the site to generate data based on the accessibility of the website, the page was waved in both light and dark mode to ensure both themes are accessible in regards to contrast and semantic layout. In light mode the wave extension reported the following information.

![accessibility](/assets/images/testing/wave/wave-index-light-structure.png 'Wave structure light mode')
![accessibility](/assets/images/testing/wave/wave-index-light.png 'Wave contrast light mode')

In dark mode the wave extension the wave extension gave this information.

![accessibility](/assets/images/testing/wave/wave-index-dark-structure.png 'Wave structure dark mode')
![accessibility](/assets/images/testing/wave/wave-index-dark-contrast.png 'Wave contrast dark mode')

## Lighthouse Testing 
The website was also assessed using the Google chrome lighthouse extension to generate statistics on SEO and accessibility, the findings from the extension are as follows.
### Index Page
Lighthouse data available for the index page when loaded in a mobile format.

![accessibility](/assets/images/testing/lighthouse/index-lighthouse.png 'Index page mobile')

Lighthouse data available for the index page when loaded in a desktop format.

![accessibility](/assets/images/testing/lighthouse/index-lighthouse-desktop.png 'Index page desktop')

### Quiz Page
Lighthouse data displayed for quiz page when processed in the mobile format.

![accessibility](/assets/images/testing/lighthouse/quiz-lighthouse.png 'Quiz page mobile')

Lighthouse data displayed for quiz page when processed in the desktop format.

![accessibility](/assets/images/testing/lighthouse/quiz-lighthouse-desktop.png 'Quiz page desktop')

### 404 Page
Lighthouse data for 404 page mobile view.

![accessibility](/assets/images/testing/lighthouse/404-lighthouse.png '404 page mobile')

Lighthouse data for 404 page in desktop format.

![accessibility](/assets/images/testing/lighthouse/404-lighthouse-desktop.png '404 page desktop')

# Functional Testing
**Tests index page**|**Expected Outcome**|**Actual Outcome**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:
Load index page|Load index.html|Loads index.html|Pass
Resize to 701px|Detect media query|Query detected and restyled|Pass
Resize to 501px|Detect media query|Query detected and restyled|Pass
Click play button|Load quiz.html|Loads quiz.html|Pass
Click instruction button|Show instructions|Displays instructions|Pass
Click acknowledge button|Close instructions|Closes instructions|Pass
Click facebook link in footer|Load Facebook in new tab|Loads Facebook in new tab|Pass
Click instagram link in footer|Load Instagram in new tab|Load Instagram in new tab|Pass
Click X link in footer|Load X in new tab|Load X in new tab|Pass
 | | | 
 | | | 
Tests quiz page|Expected Outcome|Actual Outcome|Pass/Fail
Load quiz page|Load quiz.html|Loads quiz.html|Pass
Resize to 701px|Detect media query|Query detected and restyled|Pass
Resize to 501px|Detect media query|Query detected and restyled|Pass
Change to light theme|Changes sight to light mode|Triggers light mode|Pass
Change to dark theme|Changes sight to dark mode|Triggers dark mode|Pass
Click home button|Loads index.html in current tab|Loads index.html|Pass
Click answer A|Submits choice A |Submits choice A to check answer function|Pass
Click answer B|Submits choice B|Submits choice B to check answer function|Pass
Click answer C|Submits choice C|Submits choice C to check answer function|Pass
Click answer D|Submits choice D|Submits choice D to check answer function|Pass
Check score counter for incorrect answer|Score does not increment|Score does not increment|Pass
Check score counter for correct answer|Score tally increments|Score tally incremented correctly|Pass
Check question count increments correctly|Counter at bottom will reduce by 1 each question|Counter at bottom reduced by 1 each question|Pass
Save score submission via input|Save score and name into local storage and display on screen|Saved score and name into local storage as object and displays on screen|Pass
Pass input invalid name|Window alert to submit valid name|Window alerts user to enter valid name|Pass
Click clear score button|Clear object from local storage and set html to empty|Local storage cleared and leaderboard deleted|Pass
Click show incorrect answers when incorrect is 1+|HTML to display questions in incorrect array and correct answer|HTML displays "No incorrect answers"|Pass
Click show incorrect answers when score is 10/10|HTML to display "No incorrect answers"|HTML displays "No incorrect answers"|Pass
Click close button on incorrect answers section|HTML set to "" and button to disappear|HTML set to "" and button to disappear|Pass
 | | | 
 | | | 
404 Page Tests|Expected Outcome|Actual Outcome|Pass/Fail
Load 404 page|Load 404.html|Loads 404.html|Pass
Resize to 701px|Detect media query|Query detected and restyled|Pass
Resize to 501px|Detect media query|Query detected and restyled|Pass
Click home button|Load index.html in current tab|Loads index.html in current tab|Pass
Click quiz button|Load quiz.html in current tab|Loads quiz.html in current tab|Pass
Click facebook icon|Load facebook site in new tab|Loads Facebook in new tab|Pass
Click instagram icon|Load instagram site in new tab|Load Instagram in new tab|Pass
Click X icon|Load X in new tab|Load X in new tab|Pass

# Validation Testing
## HTML Validation Testing
![Index HTML](/assets/images/testing/index.png "Index HTML")
![Quiz HTML](/assets/images/testing/quiz.png "Quiz HTML")
![404 HTML](/assets/images/testing/404.png "404 HTML")
## CSS Validation Testing
![Style CSS](/assets/images/testing/CSS.png "Style CSS")
## Javascript Validation Testing
![Modal JS](/assets/images/testing/modal.png "Modal JS")

![Script JS](/assets/images/testing/script.png "Script JS")

![Theme JS](/assets/images/testing/theme.png "Theme JS")

# Version control

The website was coded inside visual studio code and pushed to the github repository "The-Big-Quiz-CIMP2".

The github desktop app was used in order to commit the files into the repository by adding the name of the commit followed by a short description of the change before pressing the "commit" button and pushing it to the repository.

## Github Pages

1. Adding it to Github Pages
2. To create the live link for the site, github pages was used in the following way.
3. Navigate to settings
4. Click on the Pages tab
5. Select the branch "main"
6. This will generate the link to the live site when created.
7. Click Save

The live site link can be found here [Live Site](https://macauleymorgan.github.io/The-Big-Quiz-CIMP2/ "Live Site")

## Cloning

1. Select the github repository to clone.
2. CLick on the code button to access the dropdown menu.
3. Download the file then open with IDE or copy Git URL from the HTTPS dialogue box.
4. Open the console window in the IDE of your choice. 
5. Use the 'git clone' command inside the terminal and follow the command with the url you wish to clone.
6. A clone of the project will be created locally on your machine.

# Credits
## Chat GPT
Chat GPT was used to generate the questions and answers in a given format for the quiz using prompts defining themes. 

Site created for educational purposes only.