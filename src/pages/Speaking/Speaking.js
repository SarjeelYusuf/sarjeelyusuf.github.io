import React from 'react'

import { Grid, 
    Typography,
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent, 
    Grow, 
    DialogTitle,
    Dialog, 
    DialogContent,
    DialogActions,
    Box} from '@material-ui/core';
import './Speaking.css';
import {useState} from "react";

import resumeData from '../../utils/resumeData';

const Speaking = () => {

    const [talkDialog, setTalkDialog] = useState(false)

    return (
        <>
        {/* Hero Section */}
        <Grid container className="section pb_45 pt_45">
            <Grid item xs={12} className="mb_50">
                <Box style={{textAlign: 'center', padding: '40px 0'}}>
                    <Typography variant="h2" style={{
                        fontSize: '48px',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '20px'
                    }}>
                        Public Speaking
                    </Typography>
                    <Typography variant="h6" style={{
                        color: '#b8b8d1',
                        fontSize: '20px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Conference talks, podcasts, and meetups covering DevOps, Serverless, Product Management, and Cloud Technologies
                    </Typography>
                </Box>
            </Grid>

            {/*Speaking Cards*/}
            <Grid item xs={12}>
                <Grid container spacing={3} justify="center">
                    {resumeData.speaking.map((talk, index) =>(
                        <Grid item key={index}>
                            <Grow in timeout={1000 + (index * 100)}>
                                <Card className='eventCard' onClick ={() => setTalkDialog(talk)}>
                                    <CardActionArea>
                                        <CardMedia className = 'eventCard_image' image={talk.image} title={talk.title}/>
                                        <CardContent>
                                            <Typography className='eventCard_title'>{talk.title}</Typography>
                                            <Typography variant='body2'>{talk.eventName}</Typography>
                                            <Typography variant='body2' style={{marginTop: '8px', fontSize: '12px', color: '#667eea'}}>
                                                {talk.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Dialog open={talkDialog} onClose={() => setTalkDialog(false)} maxWidth="md">
                <DialogTitle onClose={() => setTalkDialog(false)}>
                    <Typography variant="h5" style={{fontWeight: 600}}>
                        {talkDialog.title}
                    </Typography>
                    <Typography variant="subtitle1" style={{color: '#667eea', marginTop: '8px'}}>
                        {talkDialog.eventName}
                    </Typography>
                </DialogTitle>
                
                <DialogContent>
                    <img className='dialogImage' src={talkDialog.image} alt=""/>
                    <Typography variant='body2' style={{fontWeight: 600, marginBottom: '10px'}}>
                        Date: {talkDialog.date}
                    </Typography>
                    <Typography style={{fontSize: '16px', lineHeight: 1.7}}>
                        {talkDialog.description}
                    </Typography>
                </DialogContent>

                <DialogActions style={{padding: '16px 24px'}}>
                    {talkDialog?.links?.map((link, index)=> (
                        <a key={index} href={link.link} target ="_blank" rel="noreferrer">
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
        </>
    )
}

export default Speaking
