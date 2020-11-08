# Job-Site-Full-Stack-Development

* React front end w/ Hooks
* Simple Node-Express API
* Cron worker to fetch data
* Simple filtering algorithm
* Redis + node-redis

The site gets all the available jobs from Github Jobs and filters for entry/junior level jobs. A job modal appears when a user selects a job, and shows the descripion of the position. User can click apply, which will open a new tab and redirects the user to the job page on Github. Cron job will update the job results every hour and a redis server is used for caching the existing data.

## Instruction to run!
### Run the api to get data
* `$ node api/index.js`

### Start the react app
* `$ cd client/`
* `$ npm start`

### To see the data from the api on redis
* `$ redis-cli`
* `$ get github`

![Homepage](/projectImages/Homepage.PNG)

![Job Modal](/projectImages/JobModal.PNG)
