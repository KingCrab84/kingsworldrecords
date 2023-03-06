/* CSS HEX */
--red-crayola: #ed254eff;
--naples-yellow: #f9dc5cff;
--mint-cream: #f4fffdff;
--oxford-blue: #011936ff;
--charcoal: #465362ff;





# Quiz



# Goal for this Project

This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link. Or, download the sources files to use this as a template.



# Table of Contents
* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
     * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
        * [Structure](#structure)
    * [Wireframes](#wireframes)
    * [Features](#features)
        * [Existing Features](#existing-features)
            * [Navigation Bar](#navigation-bar)
            * [Landing Page](#landing-page)
            * [About Section](#about-section)
            * [Events Section](#events-section)
            * [Contact Section](#contact-section)
            * [Footer](#footer)
        * [Features to be implemented](#features-to-be-implemented)
    * [Technologies used](#technologies-used)
        * [Languages](#languages)
        * [Tools and Libraries](#tools-and-libraries)
    * [Testing](#testing)
        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
    * [Credits](#credits)
# UX


## Summary
* HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia.
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document.
* This project utilizes the use of appending HTML pages.

## This project has the following features:
* A Start Quiz button
* An appended HTML page that features questions, and multiple choice answers.
    + Answers are recording using an event listener, "click" and tracks correct answers.
* An appended HTML page that features:
    + Final score which is calculated using time remaining
    + A Summary of how many questions answered correctly
    + Input area to record initials
    + A Submit button
    + Submit buttom saves initials and score to local storage
* A Highscores HTML
    + This a list summary of intials and final scores
    + Clear button resets the page and local storage
    + Go back button travels to the start of the quiz

## Psuedo code:
* Create a timer attached to a button with a starting value of 0
* When timer is pressed start a reverse countdown
* Create a 0 for countdown
* When countdown starts, start quiz
* Start Quiz will be on appended page
* Append the question: choices
* When user selects the right answer, textcontent "Correct!"
* When user selects the right answer, textcontent "Wrong!"
* Final score will keep track of how many the user got right
* Left over time will be deducted from final score
* Final Score Appended page
* Captures local storage
* Travels to another HTML
* Retrieved highscores

## This project has script features of:
* Questions contained in an array variable with objects
* Variable declaration area
* An event listener (onclick) that generates time interval
* A function to render the questions and choices on the page using a for loop
* An event listener on all list choices
* A comparison statement to compare correct answers to choices
* An appended page showing the final stats of the individual user with input area for initials, captures local storage
* Highscores retreived local storage

## This project has media Queries for:
* max-width: 980px
    + Adjusts body and container width
* max-width: 786px
    + Adjusts body and container width
    + Adjusts buttons
* max-width: 640px
    + Adjusts body and container width
    + Adjusts buttons to be centered and stacked

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;





### Requirements
* Easy to navigate on various screen sizes.
* Clear information on the services provided.
* Keep the user interested with small bits of information to make them want to engage with the club.
* Simple methods of contacting the club.
* Visually inviting so users do not leave.
### Expectations
* I expect to know if a form has been submitted properly and if items are not filled in, to be prompted.
* I expect all links to social media sites to be opened in a new tab.
* I expect all navigation links to work correctly.
* I expect screen size not to affect the quality of the website.
* I expect all information to be correct and accurate.

