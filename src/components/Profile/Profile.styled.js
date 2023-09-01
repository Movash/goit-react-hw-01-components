import { styled } from "styled-components";


export const ProfileCard = styled('div')(() => {
  return {
    margin: '100px auto',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 5,
    border: '2px solid #b6b6b6',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '40px auto',
      gap: 10,
      '& img': {
        width: 120,
        height: 120,
        borderRadius: '50%',
        marginBottom: 30,
        backgroundColor: '#e1dede',
      },
      '& .name': {
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#2E2F42',
      },
      '& .tag': {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
      },
      '& .location': {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
      },
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
        backgroundColor: '#e1dede',
        border: '1px solid #d7d8d8',
        '& .quantity': {
          fontWeight: 700,
          color: '#2E2F42',
        },
      },
    },
  };
})

// export const StatsList = styled('ul')(() => {
//   return {
//     display: 'flex',
//     border: '1px solid #e1dede',
//     '& li': {
//       width: 100,
//       height: 100,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: 5,
//       backgroundColor: '#e1dede',
//       border: '1px solid #d7d8d8',
//     },
//   };
// });
