# The Big Quiz CI MP2

This project was created for educational purposes to demonstrate knowledge of javascript core concepts and to serve as a simple trivia quiz for users.

---
# Mockups
![Index Mockup](/assets/images/mockups/index-mockup.png 'Index Mockup')
![Quiz Mockup](/assets/images/mockups/quiz-mockup.png 'Quiz Mockup')
![404 Mockup](/assets/images/mockups/404-mockup.png '404 Mockup')
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