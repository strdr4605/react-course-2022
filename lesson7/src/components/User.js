import './User.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function User({user}) {
  return user === undefined ? (
    <Paper sx={{ maxWidth: 'fit-content', padding: 1 }}>
      <Typography gutterBottom variant="h5" component="div">
        No user
      </Typography>
    </Paper>
  ) : (
    <Card sx={{ maxWidth: 'fit-content' }}>
      <CardMedia
          component="img"
          height="140"
          image={user.avatar}
          alt={user.email}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.first_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
