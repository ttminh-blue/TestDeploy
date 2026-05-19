# Project Description
Full Stack Web Application with Docker.

Docker containers are a flexible platform that allows you to easily build, ship and run your applications in scalable and distributed environments.

## Tech stack

- [Angular CLI][cli]
- [NodeJS][nodejs]
- [Express][expressjs]
- [Jestsjs][jestsjs]
- [Docker][docker]
- UI modules:
  - [AngularMaterial][angular-material]
  - [Flex-Layout][angular-flex-layout]
- [Azure][azure]

[cli]: https://cli.angular.io/
[nodejs]: https://nodejs.org/
[docker]: https://www.docker.com/
[jestsjs]: https://jestjs.io/
[expressjs]: https://www.expressjs.com/
[angular-material]: https://material.angular.io/
[angular-flex-layout]: https://github.com/angular/flex-layout/
[azure]: https://azure.microsoft.com/


## Setting up development environment 🛠


- `git clone https://github.com/rickykiet83/full-stack-app-dockerize.git`
- `cd full-stack-app`
- `npm run install-dependencies`
- Create a new **.env** file in the root of backend folder. The content of **.env** file:
  - DEFAULT_PORT=3000
  - DB_CONNECTION_STRING="mongodb://localhost:27017" (replace 27017 by your own port)
  - DB_NAME=tedu-courses
- `docker-compose up`

# Backend API

- `npm run start:back` for nodejs server web application
- The server should run on `http://localhost:3000/` (3000 = DEFAULT_PORT in .env file)

# Frontend

- `npm run start:front` for angular web application
- The app should run on `http://localhost:4200/`

# Test Backend API
- `npm run test:back`

Visit https://tedu.com.vn/khoa-hoc/lam-chu-docker-de-chinh-phuc-devops-42.html and signup the course to learn Docker from scratch, no previous experience required!

## Recommended Courses:
- Xây dựng hệ thống với kiến trúc Micro-service: [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/49/C5D7O1.html)
- Microfrontends Angular Mastery Course: [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/56/C5D7O1.html)
- Tedu Exam course (MongoDb, DDD, CQRS, Identity Server):  [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/43/C5D7O1.html)
- Authentication và Authorization nâng cao:  [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/36/C5D7O1.html)
- Xây dựng ứng dụng web với ASP.NET Core Web API + Identity Server + Angular:  [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/35/C5D7O1.htm)
- Phát triển Web App với .NET 6 (ABP Framework & Angular):  [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/50/C5D7O1.html)
- Triển khai CI/CD với Azure DevOps:  [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/37/C5D7O1.html)
- Thiết kế RESTful API với ASP.NET Core và Dapper ORM: [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/24/C5D7O1.html)