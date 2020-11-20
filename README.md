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
    -
  - Back End
  
