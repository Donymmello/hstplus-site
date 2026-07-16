import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * Cabeçalho de secção padronizado — usar em TODAS as secções de conteúdo para
 * garantir consistência (alinhamento, espaçamento, largura do texto de intro)
 * sem ter de ajustar cada página/secção manualmente. Qualquer secção nova só
 * precisa de usar isto para herdar automaticamente o mesmo padrão visual.
 *
 * Uso típico:
 *   <SectionHeader index="01" title="As nossas soluções">
 *     Texto de introdução opcional, centrado e com largura máxima consistente.
 *   </SectionHeader>
 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  children,
  align = 'center',
  introWidth = 640,
  color = 'primary.main',
  dark = false,
  mb = { xs: 5, md: 6 },
}) {
  return (
    <Box sx={{ textAlign: align, mb }}>
      {eyebrow && (
        <Typography variant="overline" sx={{ color: dark ? 'warning.main' : color }}>
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.55rem', md: '3.35rem' },
          maxWidth: align === 'center' ? 760 : 680,
          mx: align === 'center' ? 'auto' : 0,
          mb: children ? 2 : 0,
          color: dark ? '#fff' : 'text.primary',
        }}
      >
        {title}
      </Typography>
      {children && (
        <Box
          sx={{
            color: dark ? 'rgba(255,255,255,0.8)' : 'text.secondary',
            fontSize: '1.02rem', lineHeight: 1.7,
            maxWidth: introWidth,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

/**
 * Wrapper de largura consistente para o corpo das secções — evita que cada
 * ficheiro escolha um Container/maxWidth diferente por engano.
 */
export function SectionContainer({ maxWidth = 'lg', children, ...props }) {
  return (
    <Container maxWidth={maxWidth} {...props}>
      {children}
    </Container>
  );
}
