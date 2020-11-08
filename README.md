# Job-Site-Full-Stack-Development

* React front end w/ Hooks
* Simple Node-Express API
* Cron worker to fetch data
* Simple filtering algorithm
* Redis + node-redis

The site gets all the available jobs from Github Jobs and filters for entry/junior level jobs. A job modal appears when a user selects a job, and shows the descripion of the position. User can click apply, which will open a new tab and redirects the user to the job page on Github. Cron job will update the job results every hour and a redis server is used for caching the already existing data.