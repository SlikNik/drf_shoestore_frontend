# React + APIs in a Nutshell 

## Your Task

For this assessment, we will be creating a new React frontend and reusing my backend from [Django ReST Framework: APIs in a Nutshell github](https://github.com/SlikNik/drf_shoestore_backend) 

## Frontend
Create a new react app. You'll want to use something like Facebook's Create React App (Links to an external site.)Links to an external site.. Please check the documentation, because this project's documentation is frequently updated. You can use either npm or yarn as your package manager, whichever you prefer to use is fine.

This react app will be relatively simple. We don't need to worry about using Redux, and we just need to create one component to handle everything we need.

### Requirements

* Uses fetch Links to an external site. to get data from your Django Rest Framework API → https://reactjs.org/docs/faq-ajax.html
* Displays all instances of Shoe on a single page
* Each attribute of a given Shoe is displayed:
- size
- brand name
- manufacturer
- color
- material
- shoe_type
- fasten_type

## Backend 

Our backend API is already functional, but we do need to make some changes before it will talk to our frontend. The frontend will be displaying shoes, so be sure to add at least 5 new instances of shoe to your backend. In addition, we'll need to worry about CORS. DRF has a documentation page. on how to handle CORS via a python package called django-cors-headers. Use this package to allow your frontend to fetch data.

* Note: For this assessment, be sure to include your db.sqlite3 in your submission. We want to see those shoes 👟

### Requirements

Backend is setup with django-cors-headers (Links to an external site.)Links to an external site.
Create at least 5 instances of Shoe via the DRF "admin panel".
