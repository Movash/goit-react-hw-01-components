import { styled } from 'styled-components';

export const StatisticsSection = styled('section')(() => {
  return {
    margin: '0 auto 100px auto',
    width: 500,
    backgroundColor: 'white',
    '& h2': {
      paddingTop: '40px',
      paddingBottom: '40px',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      textTransform: 'uppercase',
      color: '#2E2F42',
    },
    '& ul': {
      display: 'flex',
      border: '1px solid #e1dede',
      '& li': {
        width: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        color: 'white',
        border: '1px solid #d7d8d8',
        '& .percentage': {
          fontWeight: 500,
          fontSize: 25,
          lineHeight: 1.5,
          letterSpacing: '0.02em',
        },
      },
    },
  };
})