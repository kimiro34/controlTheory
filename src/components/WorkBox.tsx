import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const itemData = [
    {
      img: 'picture3.png',
      title: 'Audio Clash',
    },
    {
      img: 'picture3.png',
      title: 'Tech Deck Skateboarding',
    },
    {
      img: 'picture3.png',
      title: 'Dragonfly',
    },
    {
      img: 'picture3.png',
      title: 'Wheel of Fortune',
    },
    {
      img: 'picture3.png',
      title: 'Hotel Ever After: Ellas Wish',
    },
    {
      img: 'picture3.png',
      title: 'Exodus of Souls',
    }
  ];
  
const WorkBox = () => {
    return(
        <ImageList sx={{ maxWidth: 1278}} cols={3} gap={14} rowHeight={271}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Button
                style={{
                    fontSize:'24px',
                    fontWeight:'700',
                    color:'black',
                    backgroundImage:`url(${item.img})`,
                    padding:'unset',
                    height:'231px'
                }}
              >
                {item.title}
              </Button>
              <div style={{height:'40px'}}></div>
            </ImageListItem>
          ))}
        </ImageList>
    )
}

export default WorkBox;