This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

To use this repo, please fork and clone / clone it.

## `npm install`

to get all dependencies

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Homework

### Make the list of posts into a PostList Component

You will need to extract the jsx and pass down the appropriate props.

### Create a SinglePost component to be used by PostList
This component should render the appropriate jsx for a single post, and handle deletion.
You will need to pass down the appropriate props from PostList.

### Add comments for each post
In SinglePost, make an api call to get all comments associated with a post.

Render the comments below the post in SinglePost as you see fit.
Probably a list of comments.

Use this endpoint to get the comments for each post: https://jsonplaceholder.typicode.com/posts/1/comments
The format is /posts/:postId/comments.


### Big reach: Adding comments to a post
In SinglePost, create a form that allows you to add comments to the post.
