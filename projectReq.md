**Project Requirements**

## Project Goals:

-Use testing to ensure the reliability of your code

-Create a set of models/schemas that properly matches the functional and technical criteria of the application

-Create an authentication scheme that supports non-logged-in, logged-in, and administrator users

-Deploy application and understand the deployment process
Use your creativity to build a compelling e-commerce site

##Unauthenticated Users
Similar to Amazon, your site should support browsing its products without having to create an account. All users who visit your site should be able to perform the following activities:

-View products (catalog)
-Refine listing by category
-Search product listing
-View a product's details
-Product information
-Photo(s)
-View reviews left by authenticated users
-Manage their cart
-Add an item to the cart from product listing or product detail pages
-Remove an item from the cart
-Edit/update quantities of items in the cart
-Log in and continue editing the cart
-Refresh the page without being logged in and have the cart persist (you may use sessionStorage, localStorage, -Cookies or JWT for this)
-Account Management
-Create an account
-Login with Facebook and/or Google
-Checkout
-Purchase items from cart
-Specify shipping address and email address
-Receive confirmation email
-Receive notification emails upon order shipping, then order delivery


##Authenticated Users
Once a user has created an account, they can continue to do everything that unauthenticated users can, plus the following activities:

-Logout
-Account management
-View past order list
-View order detail
-Current order status
-Items with quantity and subtotal
-Link to the original product detail page
-Date/time order was created
-Product reviews
-Leave a review (with text and a 5-star rating) for a product



##Product management
-Create and edit products with name, description, price and one or more photos
-Create categories for items, each item can have multiple categories
-Manage the availability of a product. If a product is no longer available, users will not see it while browsing, but they can view the product detail page if they've ordered it previously or have a direct link. On that product detail page, it should say "Currently Unavailable"
-Add/remove categories from items
-Order management
-View a list of all orders
-Filter orders by status (Created, Processing, Cancelled, Completed)
-Change the status of the order (Created -> Processing, Processing -> Cancelled || Completed)
-View details of a specific order
-User management
-Promote other user accounts to have admin status
-Delete a user
-Trigger password reset for a user (next time they successfully log in—with their old password—they are prompted for a new one)



## Data Validations
As you work on your data models, please consider the types of data that you will receive, what you want to make required and how you will propagate those errors to the user.

#Products
-Must have title, description, price, and inventory quantity
-Must belong to at least one category
-If there is no photo, there must be a placeholder photo used

#Users
-Users must have a valid email address
-Users email must be unique
-Users must have username
-Users must have a password

#Order
-Orders  must belong to a user OR guest session (authenticated vs unauthenticated)
-Orders must contain line items that capture the price, current product ID and quantity
-If a user completes an order, that order should keep the price of the item at the time when they checked out even if the price of the product later changes

#Reviews
All reviews must belong to a product
All reviews must belong to a user
All reviews must be at least X characters

##Production Application
A solid production application isn't just on the web, it is also demonstrably well-built, well-tested, and well-monitored. To this end...

-Make sure every member of the team codes out at least five automated tests.
-If deploying to Heroku: Follow these instructions to deploy your stackstore to Heroku. This guide can help you setup with postgres. If deploying to Digital Ocean: Follow these instructions to deploy your stackstore to Digital Ocean. Note that Digital Ocean has no long-term free plan—that's OK, we've got coupons which you'll use during senior phase so you won't be paying out-of-pocket. This guide can help you get setup with postgres.

-You should set yourselves up with a continuous integration tool such as Codeship or Travis. Utilize Code Climate for automatic feedback on improvements to your code. And though optional, we recommend you configure with Coveralls using node-coveralls to publish how much of your application is covered by your specs. Include badges (e.g. a Code Climate badge) on your Github's README.
