import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article'>
            <h2>Difference Between Props and State.</h2>
            <p>    Props: Props are immutable. Props cannot be modified.Props are read-only.Props are used to pass data from one component to another. We can pass properties from parent components.

                State : State are mutable.State is both read and write. We can define states in the component itself.The state is set and updated by the object. Using state we can make our application interactive. Without state our react application is just a glorified static template.

            </p>
            <h2>How use state works?</h2>
            <p> The use state is a hook that allows us to have state variables in functional components.The useState hook is a special function. It pass the initial state to this function. And it returns an array of two entries. </p>

        </div>
    );
};

export default Article;