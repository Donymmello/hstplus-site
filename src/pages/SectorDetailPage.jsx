import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Chip from '@mui/material/Chip';
import { findSectorBySlug } from '../data/sectors';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import LeadFormDialog from '../components/LeadFormDialog';
import Seo from '../components/Seo';

function ListBlock({ icon: Icon, iconColor, title, items }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
        {title}
      </Typography>
      <Stack spacing={1.2}>
        {items.map((item) => (
          <Stack direction="row" spacing={1.2} key={item} alignItems="flex-start">
            <Icon sx={{ fontSize: 18, color: iconColor, mt: 0.3, flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.92rem', color: 'text.secondary' }}>{item}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default function SectorDetailPage() {
  const { slug } = useParams();
  const sector = findSectorBySlug(slug);
  const [dialog, setDialog] = useState(null); // null | 'informacoes' | 'cotacao'

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [sector]);

  if (!sector) {
    return (
      <Container maxWidth="sm" sx={{ py: 14, textAlign: 'center' }}>
        <Seo title="Sector não encontrado" noindex />
        <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 2 }}>
          Sector não encontrado
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>
          O sector que procuras pode ter mudado de nome ou já não está disponível.
        </Typography>
        <Button component={RouterLink} to="/#setores" variant="contained" color="secondary">
          Ver todos os sectores
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Seo title={sector.name} description={sector.resumo} path={`/setores/${sector.slug}`} />
      <Box sx={{ backgroundImage: gradients.dark, color: '#fff', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Link
              component={RouterLink}
              to="/#setores"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', mb: 3, textDecoration: 'none' }}
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} /> Voltar aos sectores
            </Link>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              Sector
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mt: 1, maxWidth: 780 }}>
              {sector.name}
            </Typography>
            <Typography sx={{ mt: 2, maxWidth: 620, color: 'rgba(255,255,255,0.78)' }}>{sector.resumo}</Typography>
          </Reveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                {sector.ambito && (
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ p: 2.5, mb: 4, bgcolor: '#EEF1EC', border: '1px solid', borderColor: 'divider' }}
                  >
                    <EngineeringIcon sx={{ color: 'primary.main', fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                    <Box sx={{ fontSize: '0.82rem', color: 'text.primary', lineHeight: 1.7 }}>
                      <Typography component="span" sx={{ display: 'block', fontSize: 'inherit' }}>
                        <strong>Âmbito:</strong> {sector.ambito}
                      </Typography>
                      {sector.perfilTecnico && (
                        <Typography component="span" sx={{ display: 'block', fontSize: 'inherit', mt: 0.8 }}>
                          <strong>Perfil técnico de referência:</strong> {sector.perfilTecnico}
                        </Typography>
                      )}
                      {sector.normas && sector.normas.length > 0 && (
                        <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mt: 1.2 }}>
                          <Typography component="span" sx={{ fontSize: 'inherit', mr: 0.5 }}>
                            <strong>Normas de referência:</strong>
                          </Typography>
                          {sector.normas.map((n) => (
                            <Chip key={n} label={n} size="small" sx={{ height: 20, fontSize: '0.68rem', bgcolor: '#fff' }} />
                          ))}
                        </Stack>
                      )}
                    </Box>
                  </Stack>
                )}
                <ListBlock icon={WarningAmberIcon} iconColor="primary.main" title="Principais riscos" items={sector.riscos} />
                <ListBlock icon={CheckCircleIcon} iconColor="secondary.main" title="Soluções HST Plus" items={sector.solucoes} />
                <ListBlock icon={TrendingUpIcon} iconColor="warning.main" title="Resultados esperados" items={sector.resultados} />
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal delay={0.1}>
                <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider', position: { md: 'sticky' }, top: { md: 96 } }}>
                  <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 1 }}>
                    Actua no sector de {sector.name.toLowerCase()}?
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mb: 3 }}>
                    Fala com a nossa equipa sobre os riscos específicos da tua operação.
                  </Typography>
                  <Stack spacing={1.5}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<RequestQuoteIcon />}
                      onClick={() => setDialog('cotacao')}
                    >
                      Pedir Cotação
                    </Button>
                    <Button
                      component="a"
                      href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Trabalho no sector de ${sector.name} e gostaria de saber mais sobre os vossos serviços.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      variant="text"
                      color="secondary"
                      startIcon={<WhatsAppIcon />}
                      sx={{ mt: 0.5 }}
                    >
                      Falar directamente no WhatsApp
                    </Button>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <LeadFormDialog open={dialog !== null} onClose={() => setDialog(null)} type={dialog || 'cotacao'} courseName={`Sector: ${sector.name}`} />
    </>
  );
}
