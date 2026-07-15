import Box from '@mui/material/Box';

/**
 * Moldura de foto reutilizável — o padrão único para reintroduzir fotos reais
 * nas secções de texto sem poluir. Faz três coisas:
 *   1. zoom lento no hover (só transform, acelerado por GPU);
 *   2. sobreposição em degradê com as cores da marca (maroon/verde) a baixa
 *      opacidade, que "assenta" a foto na paleta em vez de a colar por cima;
 *   3. aresta de luz interna (inset) para dar profundidade/qualidade premium.
 *
 * O fade de entrada é herdado do <Reveal> que envolve cada secção — não é
 * preciso duplicá-lo aqui. Respeita prefers-reduced-motion (regra global em
 * index.css desliga transições/animações).
 */
const tints = {
  // degradê maroon -> verde, ambos translúcidos: integra a foto sem a escurecer
  brand:
    'linear-gradient(150deg, rgba(74,13,20,0.46) 0%, rgba(20,24,26,0.10) 48%, rgba(31,122,61,0.32) 100%)',
  // para fotos sobre fundo escuro (Hero): esbate a aresta na cor do fundo
  heroFade:
    'linear-gradient(120deg, rgba(46,8,16,0.72) 0%, rgba(46,8,16,0.20) 42%, rgba(20,24,26,0.08) 100%)',
  // variante verde-segurança (secções de consultoria/conformidade)
  green:
    'linear-gradient(150deg, rgba(20,82,42,0.48) 0%, rgba(20,24,26,0.12) 55%, rgba(31,122,61,0.22) 100%)',
  // legenda/base escura para texto sobreposto
  dark:
    'linear-gradient(180deg, rgba(20,24,26,0) 40%, rgba(20,24,26,0.55) 100%)',
};

export default function PhotoFrame({ src, alt, ratio = '4/5', overlay = 'brand', sx }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: ratio,
        boxShadow: '0 24px 48px -22px rgba(74,13,20,0.5)',
        '&:hover img': { transform: 'scale(1.06)' },
        '&:hover .pf-tint': { opacity: 0.68 },
        ...sx,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
      <Box
        className="pf-tint"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: tints[overlay] || tints.brand,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.16), inset 0 0 0 1px rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
