# Learning React🚀 

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- Parcel uses File Watching Algorithm written in C++.
- It gives us faster builds due to caching
- Image optimization
- It does minification and bundling of file when we install production/normal parcel dependency.
- It also compresses file.
- Consistency hashing algorithm
- Code splitting - splitting of files
- Differential Bundling - support of older browsers.
- Diagnostics of app
- Better Error Handling.
- It allows us to host app via https
- Tree Shaking - remove unused code


# Two types of exports/imports:
1) Default export/import
export default Component/variable
import Component from "path";

2) Named export/import
export const Component
import {Component} from "path";

# 2 types of routing in web apps:
1) Client side routing
2) Server side routing

# Redux Toolkit
1) Install @reduxjs/toolkit and react-redux
2) Build redux store
3) Connect store to the app
4) Create slice (cartSlice)
5) dispatch (action)
6) Selector

# Types of testing (Developer Edition)
1) Manual Testing
2) Test by code
    i) Unit Testing.
    ii) Integration Testing.
    iii) End to End Testing (e2e test).

# Setting Up Testing in our application.
1) Installed React Testing Library
2) Installed Jest
3) Installed Babel-Jest dependencies
4) Configure babel according to testing
5) Configure parcel config file to disable babel traspilation
6) Jest configuration - npx jest --init
7) Install jsdom library
8) Install @babel/preset-react - to make JSX work in test cases.
9) Install @testing-library/jest-dom 