# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    
The context API allows us to pass data through the component tree without having to use prop drilling. Though Redux solves this problem as well, context API uses far less code to do so.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Using Redux, actions, reducers and the store all work together to mange state. The store is a state container. It is known as the "single source of truth" in a Redux app because any app can have only ONE store and it holds the application's state. The store has a single root reducer function (though we can combine multiple reducers and pass in the combined reducer). Reducers take in the current state and an action and, based on this action, returns a brand new state using a pure function that does not mutate previous state. These actions that are passed in are how the reducer knows what to do. They basically describe an event that has happened `in the application. Sometimes the action has a payload, which contains additional information to update the state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux thunk is type of middleware. It is code that intercepts an action before it reaches the reducer(s). Specifically thunk is used for async logic. Our action creator may now change based on the return of this function. For example, we can use thunk to fetch data from an API. Depending on if the request succeeds or fails, our action type and payload will be different.  


4. What is your favorite state management system you've learned and this sprint? Please explain why!

First of all, everything we have learned this week is so much better than prop drilling. I like the organization and separation of concerns of both Redux and Context API. For me, they both are great for different situations.
   In a smaller
application, I would prefer to use Context API in combination with reducers. It is less code to write, doesn't require installing extra libraries, and Redux just seems like overkill for small amounts of changing data. However, as the downfall of Context API is that is it  re-renders ALL components when state is updated, it seems less than ideal for managing large amounts of changing data.
    For a large application with a lot of dynamic data, I would prefer to use Redux. It only re-renders updated components which would be critical when state is changing frequently. The developer tools for Redux are also amazing and would really help a developer keep track of what is going on in the application.