import Box from '@mui/material/Box';

export default function MenuBox({ children } : { children : React.ReactNode }) {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '100%' }}>
      { children }
    </Box>
  );
}