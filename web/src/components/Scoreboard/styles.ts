import { styled } from 'styles';

export const Wrapper = styled('div', {
  height: '100vh',
  maxWidth: '1224px',
  width: '100%',
  margin: '0 auto',
  padding: '2.5rem 2rem',

  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled('h2', {
  color: '$title',
  fontSize: '2rem',
});

export const Table = styled('table', {
  marginTop: 40,
});

export const TableHead = styled('thead', {
  color: '$text',
  fontWeight: 600,
});

export const TableBody = styled('tbody', {});

export const TableRow = styled('tr', {
  display: 'flex',
  marginBottom: '8px',
  borderRadius: '4px',
  overflow: 'hidden',
});

export const TableCell = styled('td', {
  background: '$container',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',

  '&.index': { flex: 0.1 },
  '&.user': { flex: 1 },
  '&.challenges': { flex: 0.3 },
  '&.experience': { flex: 0.3 },

  variants: {
    isIndex: {
      true: {
        marginRight: '8px',
        textAlign: 'center',
      },
    },

    isHeader: {
      true: {
        background: 'none',
        textAlign: 'left',
      },
    },
  },
});

export const IndexText = styled('p', {
  flex: 1,
  fontSize: '1.6rem',
});

export const UserDataWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  div: {
    marginLeft: '16px',
    color: '$text',
    fontWeight: 600,

    strong: {
      fontSize: '1rem',
      lineHeight: '1rem',
    },

    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '.8rem',
      gap: '0.2rem',
      fontWeight: 400,
    },
  },
});

export const Picture = styled('img', {
  width: '2.8rem',
  height: '2.8rem',
  borderRadius: '100%',
});
