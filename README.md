# Paytm End-to-End Clone
## A paytm clone using the MERN Stack which has the following features
1] Authentication - Signup and Signin using JWT tokens where I store the tokens in localStorage.
2] Built the necessary APIs to get account balance for each user. Additionally capable of searching users who have signed in such that money can be transferred.
3] The signup API has been defined such that upon signup, the user gets assigned a random balance amount between 1-10,000.
4] Last but the most important, added functionality to send and receive money among signup up users. Database atomicity is maintained as we make the use of transactions in mongodb.  Upon sending the payment, the amount is deducted from the sender and added to the receiver. 
## To run the app
1] Clone the repository
2] "cd backend" --> "node backend"
3] "cd frontend" --> "npm run dev"
## A demo video has been attached in the repository
