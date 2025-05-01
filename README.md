- Nextjs is a edge time framework application will not run all the time >> it is not running all the time just like pure backend application 
- When request is made then things start to work 
- Databsse connection is not all time connected
- As the request arrives then connection is made
- ALl the functions write in next js runs on time


{🧾 What is the purpose of the tsconfig.json file?
The tsconfig.json file is the configuration file for the [TypeScript compiler]. It tells TypeScript how to compile your code, what files to include, and what specific rules or settings to apply.

- it defines the root files and compiler options.
✅ It controls how strict TypeScript should be.
✅ It helps tools like Next.js, VS Code, ESLint, etc., understand your TypeScript setup.
✅ It allows adding custom types, like extending next-auth interfaces.
}

# Zod 
- Schema validation library ... zod,yup,joi etc
- in general it looks like this to validate a Schema using zod
import { z } from 'zod';
const schema = z.object({
  name: z.string(),
  age: z.number().min(18),
});
//import zod
import { z } from 'zod'; ← This imports the Zod library.
z.string(), z.object(), .min(), .max(), .regex() → These are Zod methods used to define and validate schemas.
## use of zod validdation Schema
Zod validation schemas are used to check if the data entered by a user is correct and follows certain rules. They are not used to store data like a database model but to validate data in both the frontend and backend. On the frontend, you can use them with tools like React Hook Form to show errors when a user fills out a form. On the backend, you can use the same schema to check the data sent in an API request (like when a user signs up) before saving it to the database. This keeps your code clean and avoids writing the same validation in multiple places. Usually, these schemas are saved in a separate folder (like schemas/) and reused wherever needed.

<!-- Lec 3 -->
# Database connection using mongoose
- As the nextjs is a edge time framework database is not all the time connected
- As the request goes the connnection is established
- It is possible sometimes that database is already connected and still we are resquesting the Connection.
- So when we are ever making a nextjs application keep one thing in mind that is the DB connection is already there if yes then use the same otherwise make the new connection
- All the apis we are gonna make have to write the bdconnect for every request so always check before requesting a db connect

# Resend Email library
- The Resend email is a {modern service and API designed for sending emails programmatically}, especially popular among developers building web apps, SaaS products, and transactional systems. {It's essentially an email sending API}—think of it like SendGrid, Mailgun, or Postmark—but built with a modern developer experience in mind

- Resend is an email service that lets you [send emails] from your app via a simple and clean API. It’s used commonly with frameworks like:
Next.js
Node.js
React
Serverless functions
And others
// what to do and how the flow should look like

- code should effectibvwely handle registering a new user and if the user is not verified then verify the user with veirfication code.
if existing user by email is verified then succes is false // dont have to send an emial
else verify the user and save the updated one then succes is true   
and if the user doesnt exit create a new user with the provided details and store in the db 
 
 // types of file we need
- templaete for verification code
- helper function to send the verification code 
- APi respone

## resend method 
- The resend property or resend() method typically refers to functionality provided by email APIs (like Resend, SendGrid, etc.) that allows you to resend an email or interact with the Resend email API in a programmatic way.
- [Resend] is a { transactional email service }(like SendGrid or Mailgun) and provides an API you can use to send emails from your app.
- Resend is a tool (package) that helps your backend send emails easily.

// working 
<!-- It's bringing a class (a blueprint) that knows how to talk to Resend’s email server. -->
import { [Resend] } from 'resend';
<!-- "Create a connection between my code and the Resend email service." -->
<!-- It makes a new object called resend.
It stores your API key (like a password).
This object is now ready to send emails by calling its .emails.send() method. -->

const [resend] = new Resend('your-resend-api-key');
const sendEmail = async () => {
  const response = await resend.emails.send({
    from: 'your@email.com',
    to: 'user@example.com',
    subject: 'Hello from Resend!',
    html: '<p>This is a test email</p>',
  });
  console.log(response);
};

- Resend is a class from the resend npm package
- resend is an instance of the Resend client.
  emails.send() is a method to send an email using the API. using the resend api servers >> its like i am delivering emails to others via some deleivery peron here that deleivery person is resened..
  The response contains metadata like the {email ID} or {delivery status}.
## easy exlanation 
So, you talk to Resend’s server because they are the professional email delivery experts — your code just asks, “Can you deliver this message for me?” and they do it.

# Auth provider in nextjs
http://next-auth.js.org/providers/ Read about it

- [See what is OAuth Providers] -- during singin getting the token from the google,github,facebook providers
- OAuth is an authorization framework that allows third-party applications to access a user's data without needing their password. The flow starts when the application asks the user for permission to access their data from a service like Google or GitHub. If the user agrees, the service provides the app with a temporary authorization code. The app then exchanges this code for an access token by proving its identity to the service. Once the token is issued, the app uses it to request the user's data from the service’s API. This ensures the app only accesses what the user allowed and keeps passwords safe.

- [Login using Email Provider] 
The Email provider sends "magic links" via email that the user can click on to sign in. 
https://next-auth.js.org/configuration/providers/email

- [login using credentials Provider]
The Credentials provider allows you to handle signing in with arbitrary credentials, such as a username and password
It is intended to support use cases where you have an existing system you need to authenticate users against.
https://next-auth.js.org/configuration/providers/credentials

## Callbacks in Provider
- The callbacks are async functions that NextAuth calls at specific points during the authentication process. You can use them to modify behavior, data, or add logic
- Callbacks are extremely powerful, especially in scenarios involving JSON Web Tokens as they allow you to implement access controls without a database and to integrate with external databases or APIs.
- If you want to pass data such as an Access Token or User ID to the browser when using JSON Web Tokens, you can persist the data in the token when the jwt callback is called, then pass the data through to the browser in the session callback.
read morehttps://next-auth.js.org/configuration/callbacks
# credentials porvider 

# await authorize(){}
- Authorize function in the Credentials Provider for NextAuth.js. This function handles the sign-in logic when a user provides credentials (e.g., email/username and password). It connects to the database, checks the user's credentials, and either returns the user object or throws an error.

{Problems i faced during the auth setup}
In callbacks when i wrote the jwt and session and extracted values from user to put in token it gave me error that _id , username , isverified , isaccepting messages all this is not in {default user interface and session interface}
# middleware 
- Authjs requires a middleware..
# route.ts
- In a Next.js App Router project (especially in app/api/... folders), the route.ts file defines the logic for handling API routes — kind of like your backend endpoints.
- 📦 What does route.ts do?
  It exports HTTP method handlers (like GET, POST, PUT, etc.). These tell Next.js how to respond when a request hits this endpoint.
  Valid exports in route.ts;
- You can export functions with the names of HTTP methods:
  GET
  POST
  PUT
  DELETE
  PATCH
  OPTION
Anything outside of these names (like VerifyUser) should not be exported from this file, or you’ll get that TypeScript error you saw earlier.
- Route.ts handles http request and send back 

# signup and login page 
handlecick and handle change function

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
✅ Purpose:
This function is called whenever the user types in an input field (like name, email, password, etc.). It's used to update the state (formData) as the user types.

🧠 What’s happening:
e is the event object automatically passed by React when the user interacts with an input.
e.target refers to the actual input field being changed.
e.target.name gets the name attribute of the input field (e.g., 'email', 'password').
e.target.value is what the user typed in that field.
setFormData(...) updates the state:
...formData copies all existing values.
[e.target.name]: e.target.value updates just that one field based on its name.

🧩 Example:
If a user types "john" into the Name field:
e.target.name is "name"
e.target.value is "john"
So, formData becomes { name: "john", email: "", password: "", confirmPassword: "" }

📨 handleSubmit Function
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Signup form submitted:', formData);
};
✅ Purpose:
This function is triggered when the form is submitted (the user clicks "Sign Up").

🧠 What’s happening:
e.preventDefault() stops the default browser behavior of refreshing the page on form submission.
You can now add custom logic: validation, sending data to the backend, etc.
console.log(...) just prints the collected formData to the console (for now).
# using Gemini api 
http://dev.to/shubhamtiwari909/gemini-ai-next-js-15-tailwind-1247

# Use form [shadcn]
## debouncing {we did debouncing in our project using settimetou and cleartimeout}
useDebouncedCallback from usehooks-ts is a custom React hook that lets you delay the execution of a function until a certain amount of time has passed since it was last called — commonly known as debouncing.
This is useful in situations like:

Typing in a search box (to avoid firing API calls on every keystroke).
Resizing the window (to prevent flooding with events).
Preventing rapid clicks on a button.


