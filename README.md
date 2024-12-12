# Inspira - Advanced Front End (React)

Inspira is a dynamic online platform designed for designers, architects, and artists to discover fresh inspiration, showcase their latest projects, and engage with a global community of creative professionals for valuable feedback and collaboration.

Find Inspira live site here - [Inspira](https://inspira-668a9b9d89ea.herokuapp.com/)

Find live API here - [Inspira API](https://inspira-api-bc9117602418.herokuapp.com/)

Find API Repository here - [API repository](https://github.com/asyaharoyan/api-inspira)


# Contents
- [**User Experience UX**](#user-experience-ux)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design Prototype](#design-prototype)
  - [Design Choices](#design-choices)
  - [Typography](#typography)
  - [Colour Scheme](#colour-scheme)
  - [Project Management](#project-management)
- [**Permissions**](#permissions)
  - [Logged Out User](#logged-out-user)
  - [Logged In User](#logged-in-user)
  - [Staff User](#staff-user)
- [**Existing Features**](#existing-features)
  - [Informative Splash Page](#informative-splash-page)
  - [Responsive Navigation Bar](#responsive-navigation-bar)
  - [Search Bar](#search-bar)
  - [Role Icons](#role-icons)
  - [Champion Card](#champion-card)
  - [Account Creation](#account-creation)
  - [Profile Page](#profile-page)
  - [Page Not Found](#page-not-found)
  - [Champion Create](#champion-create)
  - [Champion Edit](#champion-edit)
  - [Champion Delete](#champion-delete)
  - [Champion Information Page](#champion-information-page)
  - [Comments](#comments)
  - [Upvoting](#upvoting)
  - [Leaderboard](#leaderboard)
  - [Notifications](#notifications)
- [**Future Features**](#future-features)
  - [Items](#items)
  - [Events](#events)
  - [News](#news)
  - [Teams](#teams)
  - [Contact Form](#contact-form)
  - [Improved Profile Page](#improved-profile-page)
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)
- [**Deployment To Heroku**](#deployment-to-heroku)
- [**Credits**](#credits)
  - [**Content**](#content)
  - [**Media**](#media)
- [**Assessor Information**](#assessor-information)
- [**Acknowledgments**](#acknowledgements)


# User Experience (UX)

## Project Goals

- Provide a space where designers, architects, and artists can share their work, get feedback, and collaborate on projects across disciplines.
- Ensure that users can seamlessly explore content and interact with posts, profiles, and projects in an intuitive and engaging manner.
- Help users discover new trends, ideas, and inspiration by showcasing a diverse range of projects and connecting them with like-minded professionals worldwide.
- Enable users to follow their favorite creators, like and comment on posts, and stay up-to-date with the latest work and ideas in the design and creative community.
- Allow users to create and manage profiles, track their work, and control the visibility of their posts and projects.

## User Stories

## Design Prototype

The user interface and experience (UI/UX) design for Inspira was crafted using [Figma](https://www.figma.com/), ensuring a seamless and visually appealing design that enhances the user's journey throughout the site.

To view the Figma project, you can visit it [here](https://www.figma.com/design/jsSjnZu2QlOO2bFqOYtyzt/INSPIRA?node-id=0-1&t=0X02r4BdYG0j5pP6-1),


## Components

This project was created using React which allows for the re-use of components throughout the application. A react component is able to perform a multitude of operations such as render elements on a page, display data, handle events/user interactions, communicate to other components via props and much more.

## Design Choices

### Typography

  The font chosen for this project is Lora from google fonts. Different font sizes have been used throughout the website where appropriate. All fonts will fall back to sans-serif if Lora font can't be loaded.

### Color Scheme

  The colores are neutral and light, to let the user's projects stand out instead of taking all the attention from the users.

  ![Colour Theme](/src/assets/readme_images/color-palete.png)


## Project Management

### GitHub Project Board

  To keep track of the progress and milestones of my project, I created user stories through GitHub issues. This approach allowed me to effectively monitor what had been completed and what tasks remained, ensuring a structured and organized development process.

  ![Project Board](/src/assets/readme_images/user-stories.png)

## Permissions

The users have different permissions depending on if they are logged in or not.

### Logged Out User

A logged out user will have access to the following

- Home Page
- View other users profiles and posts
- Sign In Page
- Sign Up Page

### Logged In User

A logged in user will have access to the following

- Home Page
- Sign Out Page
- News Feed Page
- Liked Page
- Comment
- Edit own profile
- Edit/delete own comments
- Change password
- View other users profiles and posts
- Follow/unfollow users
- Like posts
- See popular profiles
- See information about the user

## Existing Features

### Responsive Navigation Bar

  The navigation bar is fully responsive, adjusting to different screen sizes to ensure a seamless user experience across devices.
  On larger screens, the navigation bar is displayed horizontally for easy access to key sections of the site. On smaller devices, the navigation bar is transformed into a "burger" menu, which can be expanded with a click. Once a link is selected, the menu closes automatically, allowing for a cleaner and more efficient navigation experience.

  The navigation bar also includes a clickable logo, which redirects the user back to the homepage for easy access.

  It renders different icons depending on if the user is logged in or not.

  For not logged in users it shows following menu

  - Home
  - Sign In
  - Sign Up

  If the user is logged in, they will see the following drop-down menu

  - Home
  - News Feed
  - Liked
  - Sign out
  - Avatar

### Search bar

### Posts card

### Create post page

### Post page

### Most Active Profiles

### Sign in/ Sign up

### Informative info page for terms and conditions

### Like page

### Profile page

### Comment / Like

### Notifications

### Not found
The page has been designed to show a clear information to the user. It is custom designed for Inspira app.

![Not found](/src/assets/readme_images/not-found.png)


## Future Features

### Restricting Future Completion Dates
In the future the app will not allow the users to choose future completion date. This will make the users to share more accurate data in the app. It is important for other users to know when the project was completed to be able to follow the latest trends in design and art.

### Validating Locations Input
The app will have a feature to validate the location to avoid false data in app. It will also have a possibility for other users to ckick on location and see where the person is from in case the name of the city is not recognized. 

It will help professionals to find likeminded collegues as well as be able to see the completed projects when they travel.

### Upload Multiple Pictures for a Single Post
As a designer or architect they usually want to share more then one picture of the project as the projects are usually big and can not been shown with one post. The feautre will be added in the future

### Keep Picture During Post Edit
In the project there is a problem with editing the post as the post is not possible to change and keep the same picture unless we don't reupload it. This can be a bad user experience. The bug will be fixed in the future.

### Pinning Posts for Inspiration
Usually designers and architects want to be able to like and pin posts for future inspirations. In the future this function will be devided in two buttons and funtions. Like will only handle one action, to like a project while pin will save the post for the future as not every post which we like we use for the future inspiration. It will also have a possibility to create folders to keep different projects't inspirations to make user experience better.

# Technologies Used

## Languages

- [JavaScript](https://www.javascript.com/) - A dynamic programming language that's used for web development
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - A markup language used for structuring and presenting content
- [CSS3](https://en.wikipedia.org/wiki/CSS) - A style sheet language used for describing the presentation of a document

## Libraries and Frameworks

- [React](https://reactjs.org/) - Advanced front-end JavaScript library for building user interfaces
- [Bootstrap](https://getbootstrap.com/) - Popular CSS Framework for developing responsive and mobile-first websites
- [Font Awesome](https://fontawesome.com/) - A font and icon toolkit based on CSS
- [Google Fonts](https://fonts.google.com/) - A library of open source font families and APIs for convenient use via CSS

# Testing

## Code Validation

## Lighthouse Testing

## Accessibility Testing

## Responsiveness Testing

## Manual Testing Pages

## Browser Compatibility

  - All the above manual tests have been completed in the following desktop browsers
    - Google Chrome
    - Microsoft Edge
    - Firefox

## Bugs Fixed

Used class instead of className - Searched all classes and changed them to className

![Debug className](/src/assets/readme_images/debug-classname.png)

Choosing date does not work in create post form - The problem was that i was updating formData, needed to update postData.

Can not change the profile page - fixed

It logs in after refreshing the page - it has been fixed. The link in log out form was wrong in backend.

Chosen profile does not show in profile image - It has been fixed by changing src attribute in profile image.
![Debug profile picture](/src/assets/readme_images/debug-profile-image.png)

It does not show that the picture has been changed but it changes in profile edit form - It had been fixed by changing variable. Instead of image should have been avatar.

The profile picture did not appear in NavBar, next to the comments or posts - Fixed

It has been fixed by debugging with console.logs. As it appears I had a wrong path in my backend.

Changing the name of the source to avatar gave the same error and that it is undefined
![Debug 1](/src/assets/readme_images/debug-profile-pic.png)

Profile image was undefined too and it made clear that it is not being connected to the front end because of the source.
![Debug 2](/src/assets/readme_images/debug-profile-pic1.png)

In preview it showed that profile_image is not with the user 4
![Debug 3](/src/assets/readme_images/debug-profile-pic2.png)

The problem was from the backend. In serializers.py profile_image was defined wrong.

    profile_image = serializers.ReadOnlyField(source='profile.image.url')

It has been changed to
    profile_image = serializers.ReadOnlyField(source='profile.avatar.url')

![Debug 4](/src/assets/readme_images/debug-profile-pic3.png)

The profile picture is not updating on the right corner if I don't refresh the page - 

When I click on follow button it does not update at once - 

## Bugs Unresolved

Can not let the picture to be the same in post edit form - It forces the user to choose a picture as it removes the old one.

# Deployment To Heroku

The project was deployed to [Heroku](https://www.heroku.com). The deployment process is as follows:

Create a new repository in [GitHub](https://github.com/) where the project files will be located

Once created the repository was pulled to GitPod

Create a React APP by typing on the terminal  **npx create-react-app . --use-npm**

Test that the application is working by typing **npm start** in the terminal

After making sure it is working, git add, commit and push the project to GitHub.

For deploying the project in Heroku

- Navigate to Heroku
- Click **New app**
- Fill in the relevant information
- Click **Create app**

![Deployment 6](/src/assets/readme_images/create-inspira.png)

Link our Heroku application with GitHub project

- Click the **Deploy** tab
- Choose **GitHub**
- Search for the repository
- Once found, click **Connect**

![Deployment 6](/src/assets/readme_images/connect-inspira.png)

Finally click **Deploy Branch** and wait for it to build

![Deployment 9](/src/assets/readme_images/deploy-inspira.png)

# Credits

### Content

This project was inspired by the [Code Institute](https://codeinstitute.net/) walk-through **Moments** project and has been modified to serve the purpose of the **Inspira** project.

Many of the files had been copied from the **Moments** walkthrough and modified accordingly as the time is short and not possible to recreate everything from the scratch. 

### Media

All the pictures which has been shared are my own projects.

The logo of the application has been designed by me using **CorelDraw**

Default profile pictures had been downloaded from **Google** and has been used only for educational purposes.

