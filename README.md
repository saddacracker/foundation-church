foundation-church
=================

### A new church plant in Everett. Built on Jesus

Currently, Mandrill and Cloudinary accounts are setup under 'cardwell.john+fc@gmail.com'

* Install Node

* Install Mongo DB (I used Homebrew)

* Make sure Mongo DB is running 
`$ mongod`

* Install [Keystone Generator] (http://keystonejs.com/getting-started/)
`$ npm install -g generator-keystone`

* Create project folder
`$ mkdir my-test-project`
    
* Make sure you're in your project
`$ cd my-test-project`
    
* Clone this repo into your new project folder
    
* Start Keystone
`$ node keystone`
    
You will get an error because you don't have the keys for Mandrill or Cloudinary set in your dotenv file
1. get a Mandrill acount (api for sending mail)
2. get a Cloudinary account (api for images)
3. update your dotenv file (or create one)
4. run `$ node keystone` again
