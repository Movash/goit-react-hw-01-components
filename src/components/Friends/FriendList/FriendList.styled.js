import { styled } from 'styled-components';

export const FriendsList = styled('ul')(() => {
  return {
    margin: '0 auto 100px auto',
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    gap: '16px',
  };
});
