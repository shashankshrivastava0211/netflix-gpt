# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=================================================><=====================================================
1)create react-app 
2)rocesses let setup tailwind first
set up my tailwind 
3)Routing 
login form
form validation 
useRef hook 
firebase setup
deploying our app to production 
create signup -user account
implemented sign in api 
created redux store and user slice
implemented sign out 
update profile
bug fix
unsubcribed to the onAuthchanged CALLBACK
registered an tmdb api ,created an app an dget access tocken then take get data from tmdb niow play]ying apis 


=================================================><=====================================================

# feature 
-browse page (logged in user)
---header
----main movie 
--------trailer in background 
---------title and description
        movie suggestion 
            movieList *n (vertically scroll)


=================================================><=====================================================            

# log out 
#header
        login/sign-up

#login/signup page
    sign in sign up form 
    redirect to browse page
-netflix-gpt 
        search bar 
        Movie suggestions


=================================================><=====================================================

# lets start by making first authentication 

# lets set up routing now npm - react-router-dom
createBrowserRouter([{
    paths==>
}])

now import router provider
router provider daal dia or individual hata diye 
<RouterProvider router={appRrouter}>==>  const appRrouter=createBrowserRouter([{
    paths
}])

background gradient to bottom makes ur header on absolute

used opacity for makng my signup look upside of my background created logon now making sign up 
# how can i change same for login for for sign up also how can i develop same login form to sign up page 

for it we need to make for developing same form to be login sign up i have used state variable isSignupform
how to do validation on form?
alot of times when i build form in my web app we use library known as formic to handle forms
we will be useRef hook ==> 


# use regex for valid Email and password regex keys from google refer utils

=================================================><=====================================================

ab hame email or password jo user enter krega login page pr vo chaiye toh ham uske liye ya toh state variable le skte hai or store kr skte hai hr on change k sath ya useRef le skte hain us login page ka refrence basically 
created a useref
const email =useRef(null) for eg=>
now ref to email section ===><input classname"xyz" type="email" ref={email}>

now when i am clicking submit button clicking on it is on submit methodnand refreshing the page after clicking in sign uop as it is a form and on clicking of thos button it is basically submitting it to prevent that <form onSubmit={(e)=>e.preventDefault}>

on it gives u a refrence of this input bix as a object where email.current means input box and addinhg .value means value of it for eg password.current.value

# authentication for authentication we need backend so we are using firebasew
downloaded firebase and pasted config also make sre to use web and create a project 
as we have same api get auth() for each and every api ib fiure vase si e-ursa vbetter ti stire ut ub a unique place where it can be used again nd agaibn so defined in firebase and exported it 
=================================================><=====================================================

now when sign up and sign is ready we have to implement take our user to browse page after login and sign up for that we will cresate a redux store and use it 

used onAuthStateChane for connecting now if the user is sign up with that event listner which we have copied pasted from firebase manage users used useNavigate hook from react router dom to navigate it to browser
navihation done successfully nhi hori thi kyuki body pr hi a[p routing hai toh nhi kr skta yaa tohj routing app level pr deni thi nhi di toh ab iske child se hi nevigate kra skte ho parent system smbhlta h isiliye login or signup pr individually krdia navigate ab 
fixed bug==>state change bug store m display name show nhi hora th uske qki vo purana hi lera haio wps se dispatch kra action usse user update k baad taaki updated user jaaye idhr user nhi le sktey  qki user to woi waala jayega isiliye auth.current user 

# bug fixed for directly entering into browse without signing in through navbar for that i have used state change methods hamne login logout tbhi karaya jb user add hora hai or baaki jagah se naigate hata dia navigate tbhi hoga jb adduser ya remove user dispatch hoga ab ye ham body m nhi kr sktey qki body hi router hai iske child se kr skte the toh hamne heasder se krdia qki header sb jgah rehta h


#TMDB login kra sign uo kra movie list api m gya ab api nikaali js krke shell pr aati h by default uske baad ab ye call krnapdega everytime i want that perticular api kuch contants chaiye is api k liye vo copy krke constants m daaldiye

why api and everything happens two times in xonsole? even after empty dependency this basically happens becausde of strict mode in index.js if i remove strict mode it will show only 1 but even in strict modde this happens only in developing mot when code is pushed to production 
it hsd=ioens because react renbders two times just to check if there are any incossistency with the app 



