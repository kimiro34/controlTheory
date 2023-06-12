import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const itemData = [
    {
      img: 'picture2.png',
      title: 'Google',
    },
    {
      img: 'picture2.png',
      title: 'Real Networks',
    },
    {
      img: 'picture2.png',
      title: 'Spin Master Ltd.',
    },
    {
      img: 'picture2.png',
      title: 'SONY',
    },
    {
      img: 'picture2.png',
      title: 'Media Monks',
    },
    {
      img: 'picture2.png',
      title: 'GameHouse',
    },
    {
      img: 'picture2.png',
      title: 'Big Boat Interactive',
    },
    {
      img: 'picture2.png',
      title: 'WIRED',
    }
  ];
  
const CompanyBox = () => {
    return(
        <ImageList sx={{ maxWidth: 1035}} cols={4} gap={55} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              {/* <Button
                style={{
                    height: '120px',
                    fontSize:'24px',
                    fontWeight:'700',
                    color:'black',
                    backgroundImage:`url(${item.img})`,
                    padding:'unset',
                }}
              >
                {item.title}
              </Button> */}
            </ImageListItem>
          ))}
        </ImageList>
    )
}

export default CompanyBox;