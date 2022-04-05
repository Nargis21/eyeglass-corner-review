import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='questions'>
            <h1>What is context API?</h1>
            <h3>Context API is use to avoid props drilling.It's provide the system to pass data parent component  to child component without props.When we should need to pass data grand component to parent component and child component, it is difficult to pass data by props.In this sitution Context API provide the way to share data easily without props. </h3>
            <h1>What is semantic tag?</h1>
            <h3>Semantic tags are use to organize the code.Semantic tags have own maningful name.They specify the parts of a html structure.Like header,footer,section,article etc.Semantic tag helps to build meaningful and perfect HTML code stucture.</h3>
            <h1>What is the difference between inline, block and inline block element?</h1>
            <h3>Block elements are starts with a new line and takes the whole space of a line.Inline elements are doesn't starts with new line and it takes up space as it's content.Inline-block normally behaves like inline but we set the height width of the content like block element.</h3>
        </div>
    );
};

export default Blogs;