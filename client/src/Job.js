import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

export default function Job({job, onClick}) {
  return (
    <Paper elevation={3} variant="outlined" onClick={onClick} className={'job'}>
      <div>
      <img alt="company-logo" id="companyLogo" src={job.company_logo} />
      </div>
      <div>
        <Typography variant='h6'>{job.title}</Typography>
        {/* <Typography variant='h6'>{job.company}</Typography> */}
      </div>
      <div>
        <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      
    </Paper>
  )
}