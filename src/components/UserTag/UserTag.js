import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTags } from '../../redux/slices/tag';

const style = {
  width: '100%',
  maxWidth: 360,
  height: 300,
  bgcolor: '#e3e3e3',
  borderStyle: 'solid',
  fontSize: '1.5rem',
  justifyContent: 'center',
};

const ListItemStyle = {
  textAlign: 'center',
};

export default function UserTag() {
  const dispatch = useDispatch();
  const tagList = useSelector((state) => state.tag.tagList);
  useEffect(() => {
    dispatch(fetchAllTags());
  }, []);

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {tagList.slice(0, 6).map((tag) => (
        <ListItem sx={ListItemStyle} key={tag.id}>
          <ListItemText primary={tag.name} />
        </ListItem>
      ))}
      <Divider />
    </List>
  );
}
