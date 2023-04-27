# Real Estate Site - Homes by Anna C

A web platform for a real estate agent persona named Anna Chong, it provides a space for agent personal branding to potential clients. Includes CRUD functionality for listings of new property developments and built on MERN stack with Typescript.

Explore the app at this Live URL:
[ Homes by Anna C ]("")

# Features

Public Role

- See real estate agent's profile on index page
- See all available New Launch listings and filter by district
- Click in to individual listings to see New Launch listing's details
- Sign up for a member account

Member Role

- Sign in to member account
- See real estate agent's profile on index page
- See all available New Launch listings and filter by district
- Bookmark/unbookmark specific listings on New Launch listings page
- Click in to individual listings to see New Launch listing's details
- Access "My Bookmarks" page which shows member's bookmarked listings with option to unbookmark
- Sign out of account

Admin Role

- Sign in to admin account
- See all available New Launch listings and filter by district
- Create new New Launch listing
- Click in to individual listings to see New Launch listing's details
- Edit individual listing's details
- Delete New Launch listings
- Sign out of account

# Technologies Used

- jwt-decode v.1.2
- react v18.2.0
- tailwindcss v3.3.1
- typescript v4.9.3
- vite - v4.2.0
- react-icons v4.8.0
- bcrypt v5.1.0
- multer" v1.4.5-lts.1
- uuid v9.0.0
- mongoose v7.0.3
- jsonwebtoken v9.0.0
- express v4.18.2
- dotenv v16.0.3
- bcrypt v5.1.0
- @aws-sdk/client-s3 v3.316.0

## Timeline for Project

6 Working Days

# ERD Models

![Alt text](md-screenshots/ERD.png)

There are 3 model schemas created for this project, all using model referencing. NewLaunch as the main model, and the other 2 are user models Admin and Member.

# Wireframe

Below are some of the basic wireframes I did up before starting on the project.

- Public Logged Out Pages

![Alt text](md-screenshots/Wireframe-LoggedOutNewLaunchesPage.png)

![Alt text](md-screenshots/Wireframe-LoggedOutNewLaunchDetails.png)

- Admin Pages

![Alt text](md-screenshots/Wireframe-AdminCreateNewLaunch.png)

![Alt text](md-screenshots/Wireframe-AdminLogInPage.png)

![Alt text](md-screenshots/Wireframe-AdminEditNewLaunch.png)

- Member Sign Up Page

![Alt text](md-screenshots/Wireframe-MemberSignUp.png)

- Member Logged In Pages

![Alt text](md-screenshots/Wireframe-MemberLoggedIn.png)

![Alt text](md-screenshots/Wireframe-MemberLoggedInBookmarks.png)

# App Screenshots

Logged Out Main Page:

![Alt text](md-screenshots/Main%20Page%20Logged%20Out.png)

Member Main Page:

![Alt text](md-screenshots/Main%20Page%20Member%20Logged%20In.png)

Public New Launches Page:

![Alt text](md-screenshots/Public%20New%20Launches%20Page.png)

Members New Launches Page:

![Alt text](md-screenshots/Members%20New%20Launches%20Page.png)

Members Bookmark Page:

![Alt text](md-screenshots/Members%20Bookmark%20Page.png)

Members New Launch Details Page:

![Alt text](md-screenshots/Members%20New%20Launch%20Details%20Page.png)

Members New Launch Details Page (continued):

![Alt text](md-screenshots/Members%20New%20Launch%20Details%20Page%202.png)

Admin New Launches Page:

![Alt text](md-screenshots/Admin%20New%20Launches%20Page.png)

Admin New Launch Details Page:

![Alt text](md-screenshots/Admin%20New%20Launch%20Details%20Page.png)

Admin Edit New Launch Page:

![Alt text](md-screenshots/Admin%20Edit%20New%20Launch%20Page.png)

# Future Developments

- Implement a more advanced search function
- Have a more advanced contact me form on Contact page, with message sending to agent's email address
- Possibly another entire CRUD function feature of "Blog" on the site, with articles and comments function
