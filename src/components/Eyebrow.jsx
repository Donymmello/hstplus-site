import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Eyebrow({ index, children, color = 'primary.main', dark = false }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
      <Box sx={{ width: 28, height: 3, bgcolor: color }} />
      <Typography
        variant="overline"
        sx={{ color: dark ? 'rgba(255,255,255,0.7)' : 'text.secondary', fontSize: '0.78rem' }}
      >
        {index ? `${index} — ` : ''}
        {children}
      </Typography>
    </Stack>
  );
}
