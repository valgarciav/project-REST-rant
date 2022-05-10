# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## ROUTES
PATH  | Purpose | Method
/ | Home page | GET
/places | Places index page | GET
/places | Create new place | POST
/places/new | Form page to create new place | GET
/place/:id | Details about a particular place. | GET 
/place/:id | Update a particular place | PUT
/places/:id/edit | Form page for editing an existing place | GET
/places/:id | Delete a particular place | DELETE 
/places/:id/rant | Create a rant (comment) about a particular place | POST
/places/:id/rant/:rantId | Delete a rant (comment) about a particular place | DELETE
* | 404 page. any route not defined above | GET


## DATABASE

### Places
Field | Type
Name | String
City | String
State | String
Cuisine | String
Pic | String

### Rants
