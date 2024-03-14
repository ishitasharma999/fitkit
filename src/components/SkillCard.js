import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SkillCard(props) {
  return (
    <Card id="skill-card" sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={props.image}
        alt="skill icon"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p class="experience-description text-justify">
            {props.description}
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
