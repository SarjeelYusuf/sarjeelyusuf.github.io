import React, {useState} from 'react'
import { Grid, 
    Typography, 
    Tabs, 
    Tab, 
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent, 
    Grow, 
    DialogTitle,
    Dialog, 
    DialogContent,
    DialogActions} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import blogRegistry from '../../utils/blogRegistry';

import './Portfolio.css'

const Portfolio = () => {

    const [tabValue, setTabValue] =useState('All');
              
    return (

        <>

         {/* Publicartions */}
         <Grid container className="section">
                
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Publications Featured In</h6>
                </Grid>

                <Grid item xs={12}>
                   <Grid container justify='space-around'>
                        {Object.keys(resumeData.publications).map((publication) => (
                            <Grid className='publication_container' item>
                                <a href={resumeData.publications[publication].link} target='_blank'>
                                    <figure className='publication_image_container'>
                                        <img className='publication_image' src={resumeData.publications[publication].image}/>
                                    </figure>
                                </a>
                            </Grid>

                        ))} 
                   </Grid> 
                </Grid>

            </Grid>

        <Grid container xs={12} className="section pb_45 pt_45">

            {/* Title */}
            <Grid item className ="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Blogs</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs 
                value ={tabValue} 
                indicatorColor='white' 
                className='customTabs'
                variant='scrollable' 
                scrollButtons='on'
                onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab
                        label='All' 
                        value='All'
                        className = {tabValue == 'All' ? 'customTabs_item active': 'customTabs_item' } 
                    />
                    {[...new Set(blogRegistry.blogs.map(item => item.tag))].map(tag =>(
                        <Tab 
                            label={tag}
                            value ={tag}
                            className = {tabValue == tag ? 'customTabs_item active': 'customTabs_item' } 
                        />
                    ))}
                </Tabs>
            </Grid>

            {/*Blogs*/}
            <Grid item xs={12}>
                <Grid container spacing={3} justify="center">
                    {blogRegistry.blogs.map((blog, index) =>(
                        <>
                        {tabValue == blog.tag || tabValue == 'All' ? (
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Grow in timeout={1000 + (index * 100)}>
                                <Card className='customCard'>
                                    <a href={blog.link} target="_blank" rel="noreferrer">
                                        <CardActionArea>
                                            <CardMedia className = 'customCard_image' image={blog.image} title={blog.title}/>
                                            <CardContent>
                                                <Typography variant='body2' className='customCard_title'>{blog.title}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </a>
                                </Card>
                            </Grow>
                        </Grid>) : null}
                        </>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        </>
    )
        

}

export default Portfolio