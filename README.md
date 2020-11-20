# soloProj
  
  # Concept
  Etsy clone but for climbing guides/outdoor trips.
  
  # MVPS
  - Search Bar
  - Shopping Cart
  - Listings
  - Reviews
  
  # Possible Extras
  - Map API
    - Show Listings on a Map
  - Ability request permision to list trips
  
  # Data Base schema
  - Users
    - ID
    - User Name - String
    - Email - String
    - Hashed Password - String
    - Listing Permision - Boolean
    
  - Listings
    - ID 
    - Seller - Integer, Foreign Key
    - Description - text
    - Picture Link - text
    - Price
  
 - Reviews
    - ID
    - Rating - Integer
    - Review - Text
    - ForUser - Integer, Foreign Key
    - FromUser - Integer, Foreign Key
    
 - Shopping Cart
  - ID
  - User - Integer, Foreign Key
  - Item - Integer, Foreign Key
    
    
    
  
  # Routes 
  - Front End
    - /listings/#id
      - Display a listing
      - Show calender for booking
    - /shop/#id
      - Display a shops page and all of their listings
    - /
      - Home Page
    - /sell
      - Request Seller permison
      
  - Back End
    - /api/listings/id
      - Fetch a listing from the database and return JSON
    - /api/shop/id
      - Fetch shop text and all listings from database and return JSON
     - /api/shopingCart/id POST
        - Add item to user shoping cart
    - /api/shopingCart/id DELETE
      - delete an item from shoping cart
  
