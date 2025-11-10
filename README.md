Chef Menu App — Final Portfolio of Evidence (PoE) 

Name: Unathi Lahliwe 
Student Number: ST10487772 
Module: MAST5112  
Project Title: Chef Menu App (Final PoE) 

Overview 

The Chef Menu App is a cross-platform mobile application built using React Native (TypeScript). 
It allows a private chef, Christoffel, to create, manage, and display a dynamic menu for clients. 

This app demonstrates TypeScript programming skills, focusing on loops, functions, global variables, and code organization. It also implements all the final PoE features such as menu management, course-based filtering, and average price calculations. 

The app runs on Android, iOS, and Web using Expo. 

Learning Unit Outcomes Achieved 

At the end of this project, the student can: 

Use a loop in TypeScript to solve programming problems. 

Use a while loop in TypeScript to solve programming problems. 

Use a for-in loop in TypeScript to solve programming problems. 

Define and use functions in TypeScript. 

Use global variables and context for shared state. 

Organize and refactor code into multiple files and functions. 

Features Implemented (Final PoE) 

Existing Features (from Part 2) 

Add new menu items with Dish Name, Description, Course, and Price. 

Predefined course selection (Starters, Mains, Desserts, Drinks). 

Display all menu items on the Home Screen. 

Show the total number of items on the menu. 

Remove menu items via Home or Details Screen. 

Filter menu items by course. 

Simple and intuitive navigation between screens. 

New Features Added for Final PoE 

Home Screen Average Price 

Calculates and displays the average price per course (Starters, Mains, Desserts, Drinks). 

Separate Add Menu Screen 

Adding new dishes is done on a dedicated AddItem screen, separate from Home. 

Persistent Data (Array & local Storage) 

Added items are stored in an in-memory array and persist across app reloads (web). 

Improved Remove Feature 

Chefs can remove dishes directly from the home screen or Menu Details screen. 

Enhanced Filter Screen 

Guests can filter menu items by course or view all dishes (added “All” option). 

Refactored Codebase 

Code is modularized into separate folders: context, screens, data, and types. 

Improved UI & UX 

Added alerts for success, input validation, back navigation buttons, and empty-state messages. 

 

Refactoring & Code Quality Improvements 

Split logic into multiple files for clarity (types.ts, MenuContext.tsx, etc.). 

Replaced static type strings with CourseType for type safety. 

Implemented functional state updates in context to prevent stale data issues. 

Added localStorage persistence for better user experience on the web. 

Centralized calculations for averages using array loops and functions. 

Enhanced user interface consistency (buttons, alerts, layouts). 

 

Change Log 

10 Nov 2025 – MenuContext.tsx 

Implemented functional updates and added localStorage persistence. 

10 Nov 2025 – HomeScreen.tsx 

Added average price calculation by course, total menu value, and delete button per item. 

10 Nov 2025 – AddItemScreen.tsx 

Added validation, success alert, and form reset after adding a dish. 

10 Nov 2025 – FilterScreen.tsx 

Added “All” filter option and empty state message. 

10 Nov 2025 – MenuDetailsScreen.tsx 

Added back button and success alert after deletion. 

10 Nov 2025 – App.tsx 

Added navigation theme and new “Details” screen route. 

10 Nov 2025 – types.ts 

Introduced CourseType for type safety. 

10 Nov 2025 – README.md 

Updated to include final PoE requirements and change log. 

 

Project Structure 

ChefMenu/ 
 App.tsx 
 README.md 
 src/ 
   context/ 
     MenuContext.tsx 
   data/ 
     courses.ts 
   screens/ 
     HomeScreen.tsx 
     AddItemScreen.tsx 
     FilterScreen.tsx 
     MenuDetailsScreen.tsx 
   types.ts 
 

 

Logic Used 

For Loop: Calculating the average price per course on Home screen. 

While Loop: (Used for menu data persistence or iteration testing). 

Functions: addMenuItem(), removeItem(), and calculateAverage() handle logic separation. 

Global Variables: Context API (menu array) shared across screens. 

 

Installation & Setup 

Clone the repository: 

git clone https://github.com/ST10487772/MAST5112_POE  
cd ChefMenu 
 

Install dependencies (Expo recommended): 

npm install 
npx expo install react-native-gesture-handler react-native-safe-area-context @react-native-picker/picker 
npm install @react-navigation/native @react-navigation/native-stack uuid 
npm i -D @types/uuid 
 

Run the app: 

npx expo start 
 

Works on Android, iOS, and Web. 

 

Testing & Verification 

Added items persist via Context API. 

Removed items disappear immediately and update averages. 

Average prices auto-update when items are added or removed. 

Filter Screen shows only selected course dishes. 

YouTube Link: 
👉  https://www.youtube.com/watch?v=bKR_mwqO6Zw 

GitHub Repository 

👉 https://github.com/ST10487772/MAST5112_POE  

Technologies Used 

React Native 

TypeScript 

React Navigation 

Context API 

Expo 

 

References 

Expo.dev, 2024. Getting started with Expo in React Native. [online] Available at: https://docs.expo.dev/get-started/installation/ [Accessed 10 November 2025]. 
React Native, 2024. React Native documentation. [online] Available at: https://reactnative.dev/docs/getting-started [Accessed 10 November 2025]. 
W3Schools, 2024. React Native tutorial. [online] Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 10 November 2025]. 
Microsoft, 2024. Using Visual Studio Code for React Native development. [online] Available at: https://code.visualstudio.com/docs/reactnative/getting-started [Accessed 10 November 2025]. 
Stack Overflow, 2024. Common React Native errors and troubleshooting tips. [online] Available at: https://stackoverflow.com/questions/tagged/react-native [Accessed 10 November 2025]. 
Packt Publishing, 2023. React Native Cookbook. 2nd ed. Birmingham: Packt Publishing. 
Mozilla Developer Network (MDN), 2024. JavaScript fundamentals for React Native developers. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 10 November 2025]. 

 
