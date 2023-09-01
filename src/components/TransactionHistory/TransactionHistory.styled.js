import { styled } from 'styled-components';

export const TransactionTable = styled('table')(() => {
  return {
    margin: '0 auto',
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow:
      'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    '& thead': {
      width: 600,
      '& tr': {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#00c1c1',
        '& th': {
          textTransform: 'uppercase',
          color: 'white',
          width: 100,
          textAlign: 'left',
        },
      },
    },
    '& tbody': {
      width: 600,
      '& tr:nth-child(2n)': {
        backgroundColor: '#efefef',
      },
      '& tr': {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'white',
      },
      '& td': {
        width: 100,
      },
    },
  };
});