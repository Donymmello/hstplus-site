import Box from '@mui/material/Box';

/**
 * Faixa diagonal inspirada em fita de sinalização de obra/perigo — o elemento
 * assinatura do site, usado com moderação entre secções-chave.
 */
export default function HazardDivider({ tone = 'dark', height = 10 }) {
  const stripes =
    tone === 'dark'
      ? 'repeating-linear-gradient(-45deg, #14181A 0 18px, #F0B429 18px 36px)'
      : 'repeating-linear-gradient(-45deg, #C81D2C 0 18px, #F6F5F1 18px 36px)';
  return (
    <Box
      aria-hidden
      sx={{
        height,
        width: '100%',
        backgroundImage: stripes,
        opacity: tone === 'dark' ? 0.9 : 1,
      }}
    />
  );
}
