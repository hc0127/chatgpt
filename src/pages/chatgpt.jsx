import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Fab,
    Paper,
    TextField,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { chatgptAPI } from '../services/config';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '95vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '85vh',
        overflowY: 'auto'
    }
});

export default function Chatgpt(props) {
    const [question, setQuestion] = useState('');
    const [gptlist, setGptList] = useState([]);

    useEffect(() => {
    }, []);

    const classes = useStyles();
    
    const checkSend = (e) =>{
        if(e.keyCode === 13){
            sendQuestion();
        }
    }

    const sendQuestion = () => {
        setGptList([...gptlist,question]);
        setQuestion('');
        chatgptAPI.sendMessage('Hello World!').then(function(res){
            console.log(res.text)
        });
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h5" className="header-message text-center">Open AI Chatgpt</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} className={classes.chatSection}>
                {/* <Grid item xs={3} className={classes.borderRight500}>
              <List>
                  <ListItem button key="RemySharp">
                      <ListItemIcon>
                      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                      </ListItemIcon>
                      <ListItemText primary="John Wick"></ListItemText>
                  </ListItem>
              </List>
              <Divider />
              <Grid item xs={12} style={{padding: '10px'}}>
                  <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
              </Grid>
              <Divider />
              <List>
                  <ListItem button key="RemySharp">
                      <ListItemIcon>
                          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                      </ListItemIcon>
                      <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                      <ListItemText secondary="online" align="right"></ListItemText>
                  </ListItem>
                  <ListItem button key="Alice">
                      <ListItemIcon>
                          <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                      </ListItemIcon>
                      <ListItemText primary="Alice">Alice</ListItemText>
                  </ListItem>
                  <ListItem button key="CindyBaker">
                      <ListItemIcon>
                          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                      </ListItemIcon>
                      <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                  </ListItem>
              </List>
          </Grid> */}
                <Grid item xs={12}>
                    <List className={classes.messageArea}>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item direction="column" container component={Paper} alignItems="flex-end" className='p-2'>
                                    <Grid item>
                                        <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                    </Grid>
                                    <Grid item>
                                        <ListItemText align="right" secondary="09:30"></ListItemText>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item direction="column" container component={Paper} alignItems="flex-start" className='p-2'>
                                    <Grid item>
                                        <ListItemText align="right" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                    </Grid>
                                    <Grid item>
                                        <ListItemText align="right" secondary="09:31"></ListItemText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item direction="column" container component={Paper} alignItems="flex-end" className='p-2'>
                                    <Grid item>
                                        <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                    </Grid>
                                    <Grid item>
                                        <ListItemText align="right" secondary="10:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" label="Type Something" value={question} onChange={(e) => setQuestion(e.target.value)} onKeyUp={(e) => checkSend(e)} fullWidth />
                        </Grid>
                        <Grid item xs={1} align="right">
                            <Fab color="primary" aria-label="add" onClick={() => sendQuestion()}><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}