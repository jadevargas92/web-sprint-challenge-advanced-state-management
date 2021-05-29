# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are an event that happend in the application and the type that is passed (action.type) lets the code know what to do.
   A reducer is a function that determines the changes to the applications state based on the action it receives.
   Store is an object that holds the application's state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

   Redux Thunk allows you to write action creators that return a function instead of an action. Allows for asynchronous code.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux - I was so worried going into it because I have heard the horror stories, but it honestly was okay.

It took a little bit of playing around and slowly walking through each step, but having a single source of truth - and after the intial setup - it is nice to be able to
call the pieces of information that you need from state and bring them into the component.
