// 4) შექმენით Express server და courses მასივი. server-ზე უნდა იყოს routes: /courses, /courses/:courseId (get, patch, delete). app.param() middleware-მა courseId პარამეტრით უნდა იპოვოს course. PATCH route-მა უნდა შეძლოს მხოლოდ price-ის შეცვლა. თუ course ვერ მოიძებნა დააბრუნეთ 404.

// let courses = [
//     {id: 11, title: "HTML", price: 50},
//     {id: 12, title: "CSS", price: 70},
//     {id: 13, title: "JavaScript", price: 120},
//     {id: 14, title: "Node.js", price: 150},
// ]

const express = require("express");
const app = express();

app.use(express.json());

let courses = [
    { id: 11, title: "HTML", price: 50 },
    { id: 12, title: "CSS", price: 70 },
    { id: 13, title: "JavaScript", price: 120 },
    { id: 14, title: "Node.js", price: 150 },
];

app.param("courseId", (req, res, next, courseId) => {
    const course = courses.find(c => c.id === Number(courseId));

    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        });
    }
    req.course = course;
    next();
});

app.get("/courses", (req, res) => {
    res.status(200).json(courses);
});

app.get("/courses/:courseId", (req, res) => {
    res.status(200).json(req.course);
});

app.patch("/courses/:courseId", (req, res) => {
    const { price } = req.body;

    if (price !== undefined) {
        req.course.price = price;
    }

    res.status(200).json({
        message: "Course price updated successfully",
        course: req.course
    });
});

app.delete("/courses/:courseId", (req, res) => {
    courses = courses.filter(course => course.id !== req.course.id);

    res.status(200).json({
        message: "Course deleted successfully",
        deletedCourse: req.course
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});