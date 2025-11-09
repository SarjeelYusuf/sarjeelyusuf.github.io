import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';
import CustomTimeline, {CustomTimelineSeperator} from "../../components/Timeline/CustomTimeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import resumeData from '../../utils/resumeData'
import TimelineContent from '@material-ui/lab/TimelineContent';
import CardMembershipIcon from '@material-ui/icons/CardMembership'

import './Resume.css'

const Resume = () => {
    return (

        <>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About</h6>
                </Grid>

                <Typography  variant='subtitle1' className='timeline_description' style={{fontSize: '16px', lineHeight: 1.8}}>
                <b>An engineer turned product manager at Datadog and AWS community builder.</b> Using a data-driven approach to develop next-gen solutions and product growth along with constantly striving for intuitive UI/UX experience.
                Can be found talking about technology and philosophy while laughing at the comedies of life.
                </Typography>
            </Grid>

            {/* Experiance/Eduction */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        
                        {/*Experiance*/}
                        <Grid item sm={12} md={7}>
                            <CustomTimeline title={'Work Experiance'} icon={<WorkIcon/>}>

                                {Object.keys(resumeData.work).map((experiance) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{resumeData.work[experiance].job } - {resumeData.work[experiance].company}</Typography>
                                            <Typography className='timeline_date'>{resumeData.work[experiance].date}</Typography>
                                            <Typography  variant='body2' className='timeline_description'>
  {Array.isArray(resumeData.work[experiance].description) ? (
    <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
      {resumeData.work[experiance].description.map((item, idx) => (
        <li key={idx} style={{ marginBottom: '0.5em' }}>{item}</li>
      ))}
    </ul>
  ) : (
    resumeData.work[experiance].description
  )}
</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/*Education/Certificates*/}
                        <Grid item  sm={12} md={5}>
                            <CustomTimeline title={'Education'} icon={<SchoolIcon/>}>

                            {Object.keys(resumeData.education).map((school) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{resumeData.education[school].degree } <br/> <span>{resumeData.education[school].institution}</span></Typography>
                                            <Typography className='timeline_date'>{resumeData.education[school].date}</Typography>
                                            <Typography  variant='body2' className='timeline_description'>{resumeData.education[school].description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                            
                            {/*Certification*/}
                            <CustomTimeline title={'Certification & Achievements'} icon={<CardMembershipIcon/>}>

                                {Object.keys(resumeData.certification).map((cert) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                        
                                            <figure className='cert_image_container'>
                                                <img className='cert_image' src={resumeData.certification[cert].image}/>
                                            </figure>
                                            <Typography className='cert_title'>
                                                <a href={resumeData.certification[cert].link}>
                                                    {resumeData.certification[cert].level}
                                                </a>
                                                <br/>
                                                <span>{resumeData.certification[cert].issuer}</span>
                                            </Typography>
                                            <Typography className='timeline_date'>{resumeData.certification[cert].date}</Typography>
                                        
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            {/* Skills Section */}
            <Grid container className='section pb_45 pt_45 skills_section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Skills & Expertise</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {/* Product Management Skills */}
                        <Grid item xs={12} md={4}>
                            <div className='skill_category'>
                                <Typography className='skill_category_title'>
                                    Product Management
                                </Typography>
                                <div className='skill_chips'>
                                    {resumeData.skills.productManagement.map((skill, index) => (
                                        <Chip 
                                            key={index}
                                            label={skill} 
                                            className='skill_chip'
                                        />
                                    ))}
                                </div>
                            </div>
                        </Grid>

                        {/* Technical Skills */}
                        <Grid item xs={12} md={4}>
                            <div className='skill_category'>
                                <Typography className='skill_category_title'>
                                    Technical Skills
                                </Typography>
                                <div className='skill_chips'>
                                    {resumeData.skills.technical.map((skill, index) => (
                                        <Chip 
                                            key={index}
                                            label={skill} 
                                            className='skill_chip'
                                        />
                                    ))}
                                </div>
                            </div>
                        </Grid>

                        {/* DevOps Skills */}
                        <Grid item xs={12} md={4}>
                            <div className='skill_category'>
                                <Typography className='skill_category_title'>
                                    DevOps & SRE
                                </Typography>
                                <div className='skill_chips'>
                                    {resumeData.skills.devops.map((skill, index) => (
                                        <Chip 
                                            key={index}
                                            label={skill} 
                                            className='skill_chip'
                                        />
                                    ))}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}

export default Resume