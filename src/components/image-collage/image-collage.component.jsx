import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ overflow: 'hidden' }} cols={2} rowHeight={400}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=600&h=400&fit=crop&auto=format`}
            srcSet={`${item.img}?w=600&h=400&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1648631272400-f2ff22de4545',
    title: 'Paris',
  },
  {
    img: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0',
    title: 'Berlin',
  },
  {
    img: 'https://images.unsplash.com/photo-1442570468985-f63ed5de9086',
    title: 'India',
  },
  {
    img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    title: 'Thailand',
  }
];