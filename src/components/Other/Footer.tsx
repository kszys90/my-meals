import React from 'react'
import { Typography, Link, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.primary.main,
        paddingY: { xs: '16px', sm: '24px' },
        marginTop: '32px'
      }}
    >
      <Typography
        variant={'body1'}
        align={'center'}
        sx={{
          color: theme => theme.palette.primary.contrastText
        }}
      >
        &copy; {new Date().getFullYear()} My Meals Recipe Website
      </Typography>
      <Typography
        variant={'body2'}
        align={'center'}
        sx={{
          color: theme => theme.palette.primary.contrastText
        }}
      >
        Created by {' '}
        <Link
          color={'inherit'}
          href={'https://github.com/kszys90'}
        >
          Krzysztof Stępień
        </Link>
      </Typography>
      <Box
        textAlign={'center'}
        mt={2}
      >
        <Link
          href={'https://www.linkedin.com/in/your-profile'}
          color={'inherit'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <LinkedInIcon
            fontSize={'large'}
            sx={{
              color: theme => theme.palette.primary.contrastText
            }}
          />
        </Link>
        <Link
          href={'https://github.com/kszys90'}
          color={'inherit'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <GitHubIcon
            fontSize={'large'}
            sx={{
              color: theme => theme.palette.primary.contrastText
            }}
          />
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
