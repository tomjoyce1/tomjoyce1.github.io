# The DevOps One-Stop Shop | All dashboards, one website

## Fullstack React Frontend and Python FastAPI Backend

![Diagram](images/blogs/bdInternshipBlog/bdrci.jpg)

This was my 1st internship as part of Immersive Software Engineering and I worked with [BD](https://bd.com) on a full stack platform for developer tools and db monitoring.<br><br>

**Reducing Tool Sprawl**

The goal of the project was to create a centralised developer portal - a one-stop shop collating metrics from different platforms (think JFrog, Azure, Jenkins, in-house LLM etc) to save time, reduce tool sprawl and improve the workflow of devops engineers.<br><br>

**Frontend Redesign: From Bootstrap -> React**

One of my first tasks involved refactoring and modernising the UI.

This involved porting and refactoring the application from legacy Bootstrap code to ReactJS with Tailwind CSS using Vite. I redesigned or rebuilt components such as the
UI for specific features like file uploads, the “Cheers for Peers” recognition system, and the in-house AI chatbot.

Shadcn and other component libraries were rather helpful in ensuring that the UI didn’t resemble the Windows 95 part of this website!<br><br>

**Backend Engineering: FastAPI + PostgreSQL**

For the backend, I worked on a new ‘feature request’ feature, whereby developers could share their feature ideas and ‘crowdsource’ their priority with an upvote system.
This entailed:

-Designing a simple PostgreSQL schema to store feature requests, user IDs, and upvotes.

-Creating and testing endpoints with FastAPI

-Connecting these APIs to frontend components for real-time updates

This service was deployed to the Azure Cloud using services for key management and authentication. I updated the Docker pipeline and launch.json to streamline local development, enabling faster and more efficient testing. By enabling the project to be built locally via ‘npm run dev’ rather than repeatedly building a Docker image, I managed to cut down idle development time.<br><br>

**Performance Optimization:**

Focusing on site performance, I employed metric tools such as Google Lighthouse to identify and address areas for improvement. My efforts included optimising page speed across the website by compressing images, experimenting with lazy loading and refining the autocomplete features for web forms. I managed caching strategies and implemented debouncing techniques to enhance both performance and prevent function call spamming if someone was really eager to see their pipeline status.

![Diagram](images/blogs/bdInternshipBlog/diagram.png)
_Figure 1 - Internal Developer Portal Project Architecture Diagram_ <br><br>

**APIs**

The project used a lot of APIs which I tested with Postman. We utilised FastAPI, which is a web framework for building HTTP-based service APIs. Each API endpoint defined in FastAPI returns JSON responses, which are then consumed by the React components on the frontend.
Porting the project from Bootstrap to React led to (many) API endpoint errors initially.
This setup allows for smooth data flow between the client and server, enabling real-time updates and interactions within the single page application (i.e - the developer portal).<br><br>



**Reflection**

I had a fantastic internship and managed to learn a lot about the Pharma and MedTech manufacturing space and the challenges that come with it!
