# Beer_Extravaganza
:beer: An online patform to rate various types of beer 

Steps to setup the project

Step 1 : Clone the repository: `git clone https://github.com/sladyn98/Beer_Extravaganza.git`

Step 2 : Install the requirements using `pip install -r requirements.txt`

Step 3 : Install node and angular 

Note: We require node version upwards of 10.5

Step 4 : Steps to get the latest node version

   a) `sudo npm cache clean -f`
   
   b) `sudo npm install -g n`
   
   c) `sudo n latest`

Step 5 : Setup angular cli using the following command : `npm install -g @angular/cli`

Step 6 : Running the project
 
The database is populated with dummy data.My suggestion would be to run the project with the existing migrations 
but feel free to remove the migrations and run your own using

a) `python manage.py makemigrations beer_platform`

B) `python manage.py migrate`

Run the django backend server using: `python manage.py runserver`

Now to run the frontend of the application 

a) `cd beer-front-end`

b) ng serve

