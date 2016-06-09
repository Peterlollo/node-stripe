# Stripe Payment
<br />
-Basic front end payment form with credit card validation <br />
-HTML, Jquery, ejs, Node, Express <br />

#Test Payments
-Test the deployed app at https://node-stripe-boiler.herokuapp.com/ <br />
-Find test card numbers here: https://stripe.com/docs/testing <br />
-Upon successful payment submission, the paid.html page will load and show the generated stripe payment token.

#Running the App Locally
-Stripe servers must be accessed over https<br />
-Thus, the app must be deployed to heroku to be fully functional<br />
-Alternatively, see the "To Subvert Stripe and Test Locally" section below<br />

#App Dependencies
-App requires Node, npm, and bower <br />
-First install Node (Instructions for installing Node: https://nodejs.org/en/ (Select version 6.1.0))<br />
-Then install bower: npm install -g bower (You may need to sudo install. More instructions: http://bower.io/) <br />

#App Installation
-git clone app or download zip file <br />
-From root directory in terminal, run "npm install" <br />
-From root directory in terminal, run "bower install" <br />
-If prompted, install xCode <br />



#To Subvert Stripe and Test Locally
-You can open Client/index.html and change the script src="payment.js" to src="non-stripe.js"<br />
-You should also delete the next script tag which sets the Stripe publishable key. <br />
-This will subvert the stripe processes and simply test some of the jquery & form interaction, as well as the proper sending of a payment token to the server. <br />
-From root directory in terminal, run "node server/server.js" <br />
-Point your browser to the address: http://localhost:5000 <br />

