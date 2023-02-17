# README

#FlyBuy 

I designed this site with intentions of aspiring pilots being able to search for airports near them and have the ability to book flights with any of the available aircraft. to start, a user must either sign up or login to move to the homepage, from there they will see a dashboard which displays information about any upcoming flights, also points them to the page where you can start booking flights and also gives a breakdown of how many hours you currently have flown. Users have the freedom to cancel or edit both flight lessons as well ad their account.

To begin - clone down this repo and in the main directory rin `bundle install` to get the back end dependencies set up. once that is done, `cd` intothe client folder to install the front end dependencies by `cd client` and run `npm install`. 

once the installs are completed you can start up your servers both with `rails s` and in the client folder run `npm start`.

this uses a PostgresQL database and a rails backend, with a react front end. most of the data is being fetched to the backend and misc methods and serializers are run on it to render the proper data. 

I had fun with this project and it was a good way to end off my last phase of my bootcamp, I look forward to creating more projects in the future and if anyone has suggestions or feedback please feel free to share!
