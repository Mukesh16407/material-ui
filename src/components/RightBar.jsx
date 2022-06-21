import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



export const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Hello Friend
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=2000"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160__340.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="http://hoteltopic.com/wp-content/uploads/2018/02/female-user-icon-7.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160__340.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="http://hoteltopic.com/wp-content/uploads/2018/02/female-user-icon-7.png"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Post
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem >
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
              
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  );
};
