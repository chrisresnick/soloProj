# Climbzy
  
## Concept
Climbzy is a site for climbing guides to list their trips. The UI and layout are inspired by Etsy. This project integrates the Google Maps API for displaying listing and AWS S3 for storing photos. 
  
## MVPs
- Search Bar
- Shopping Cart
- Listings
- Create New Listings
- Reviews
- Google Maps javascript API intigration
- AWS S3 inigration
  - Generate signed upload URLs for fast, and secure uploading
  
## Data Base schema
- Users
  - ID
  - UserName - String
  - Email - String
  - HashedPassword - String
    
- Listings
  - ID
  - Seller - Int, foreign key -> Users
  - Title - String
  - Description - Text
  - Photo - Text (url)
  - priceCents: Int
    
- ExtraImgs:
  - ID
  - Listing - Integer, Foreign Key -> Listings
  - Photo - Text (url)
  
- Reviews
  - ID
  - Rating - Integer
  - Review - Text
  - ForUser - Integer, Foreign Key -> Users
  - FromUser - Integer, Foreign Key -> Users
    
- Shopping Cart
  - ID
  - User - Integer, Foreign Key -> Users
  - Item - Integer, Foreign Key -> Listings

- Coordinates
  - ID
  - ListingId - Integer, Foreign Key -> Listings
  - Latitude - Double
  - Longitude - Double
  
    
    
    
  
## /api Routes 
- <b>/cart</b>
  - POST <b>/</b> - Add a new item to the cart
  - POST <b>/checkout/</b> - Checkout the current cart
  - PATCH <b>/:id</b> Update an item in the cart
  - GET <b>/:id</b> Fetch data on an item in the cart
  - Delete <b>/:id</b> Delete an item from the cart
- <b>/coords</b>
  - GET <b>/</b> Get all the coordinates of all the listings (used to render the map)
- <b>/listings</b>
  - PUT <b>/</b> Create a new listing
  - GET <b>/:id</b> Get data for a given listing
- <b>/permisions</b>
  - POST <b>/upload</b> Get a signed URL to upload an image to AWS
- <b>/reviews</b>
  - POST <b>/</b> Create a new review
- <b>/search</b>
  - POST <b>/</b> Search the database for a keyword
- <b>/session</b>
  - POST <b>/</b> Log in
  - DELETE <b>/</b> Log out
  - GET <b>/</b> Restore the session for the current user
- <b>/users</b>
  - POST <b>/</b> Register a new user
  
  
  

  
