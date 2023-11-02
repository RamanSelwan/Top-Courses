import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    const category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (!props.courses) {
            return []; // Return an empty array if props.courses is undefined
        }

        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || []; // Return an empty array if category is not found
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course, index) => {
                return <Card course={course} key={index} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
            })}
        </div>
    );
};

export default Cards;
