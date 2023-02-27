# Tutorial suggested by EdRoh (YouTube)

- Link : https://www.youtube.com/watch?v=JSJ8ftr92Vw&list=PLs0RSZipvGCQT-4MXO0bssf_mXCq3VfQu&index=3

- Description : In this tutorial, we will build and deploy a complete Responsive React Portfolio Website. We will be using React, Tailwind CSS, Framer Motion and React Hook Form with Form Submit to build this fully build application.

- Basic steps :

1.  npx create-react-app react-portfolio
2.  yarn add framer-motion
3.  yarn add react-anchor-link-smooth-scroll
4.  /src Delete these files => App.css, App.test.js, logo.svg, reportWebvitals.js and setupTests.js
5.  /src/App.js keep only this:
<pre><code>
    function App() {
    return (
    <div className="App">

        </div>

    );
    }
    export default App; 
</code></pre>

6.  /src/index.js delete theses :
<pre><code>
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
</code></pre>

7. Download ZIP of this project : https://github.com/ed-roh/react-portfolio => Code => Download ZIP
   Copy-paste assets => /public and src/
8. /src : create a "hooks" folder, and inside a "useMediauery.jsx" file
9. CODE !!!
