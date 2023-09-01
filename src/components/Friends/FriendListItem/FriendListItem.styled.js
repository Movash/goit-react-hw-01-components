import { styled } from 'styled-components';

export const FriendItem = styled('li')(({isOnline}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'white',
    gap: 10,
    boxShadow:
      'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    '& span': {
      marginLeft: 10,
      display: 'block',
      width: 15,
      height: 15,
      borderRadius: '50%',
      backgroundColor: isOnline ? 'green' : 'red',
    },
    '& img': {
      width: 60,
      backgroundColor: '#e1dede',
      borderRadius: 5,
    },
    '& p': {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#2E2F42',
    },
  };
});