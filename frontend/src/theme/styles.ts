import { styled } from '@mui/material/styles';
import { Box, BoxProps, List, ListItem, Link, Button, InputBase } from '@mui/material';
import type { Theme } from '@mui/material';

type InputGroupProps = BoxProps

export const HeaderContainer = styled(Box)(() => ({
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
}));

export const NavigationList = styled(List)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.breakpoints.down('sm') ? '10px' : '75px',
    paddingLeft: theme.breakpoints.down('sm') ? '10px' : '45px',
    paddingRight: theme.breakpoints.down('sm') ? '10px' : '40px',
}));

import type { LinkProps } from '@mui/material/Link';
export const NavigationLink = styled(Link)<LinkProps>(({ theme }: { theme: Theme }) => ({
    fontWeight: 200,
    fontSize: '1rem',
    position: 'relative',
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.text.primary,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#717f7c',
        borderRadius: '5px',
        transform: 'scaleX(0)',
        transformOrigin: '100% 50%',
        transition: 'transform 0.5s cubic-bezier(0.52, 1.64, 0.37, 0.66)',
    },
    '&:hover:before': {
        transform: 'scaleX(1)',
    },
}));

import type { ListItemProps } from '@mui/material/ListItem';
export const NavigationItem = styled(ListItem)<ListItemProps>(({ theme }: { theme: Theme }) => ({
    paddingLeft: '30px',
    paddingRight: '30px',
    fontWeight: 600,
    color: 'rgba(220, 220, 220, 0.726)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.5s',
    '&:hover': {
        color: theme.palette.common.white,
    },
}));

export const ItemContainer = styled(Box)(() => ({
    width: '100%',
    borderRadius: '10px',
    background: '#7a8c89',
    boxShadow: '20px 20px 60px #687774, -20px -20px 60px #8ca19e',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const ItemBox = styled(Box)(() => ({
    height: '75px',
    width: '100%',
    textAlign: 'left',
    borderBottom: '1px solid rgba(90, 90, 90, 0.48)', // Default border for all items
    color: '#dadada',
    display: 'flex',
    alignItems: 'center',
    transition: 'max-height ease 0.3s',
    '&:last-child': {
        borderBottom: 'none', // Remove border for the last item
    },
}));

export const ItemRow = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
}));

export const CheckboxLabel = styled('label')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
}));

export const ItemText = styled(Box)(() => ({
    fontWeight: 300,
    fontSize: '1rem',
    cursor: 'pointer',
    flexGrow: 1,
    paddingLeft: '10px',
    transition: 'ease-in-out 0.2s',
    '&:hover': {
        textShadow: '10px 10px 20px rgba(255, 255, 255, 0.71)',
    },
    '@media (min-width: 530px)': {
        fontSize: '1.25rem !important',
    },
}));

export const InputGroup = styled(Box)<InputGroupProps>(() => ({
    width: '100%',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
}));

export const InputBox = styled(InputBase)(() => ({
    flexGrow: 1,
    color: 'rgb(232, 232, 232)',
    fontSize: '18px',
    fontWeight: 300,
    borderBottom: '1px solid rgba(182, 182, 182, 0.27)',
    paddingLeft: '10px',
    paddingRight: '10px',
    '&:focus': {
        borderBottom: '1px solid rgba(214, 214, 214, 0.84)',
    },
}));

export const SubmitButton = styled(Button)(() => ({
    fontSize: '17px',
    fontWeight: 700,
    marginLeft: '10px',
    padding: '0.5em 1em',
    border: 'transparent',
    boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.24)',
    background: '#616161b3',
    borderRadius: '50px',
    color: '#4a9196',
    transition: 'color 0.2s',
    '&:hover': {
        background: 'linear-gradient(90deg, #4a9196 25%, #a997bb 100%)',
        boxShadow: '0 5px 16px 0 rgba(164, 164, 164, 0.12)',
        color: 'rgb(218, 218, 218)',
    },
    '&:active': {
        transform: 'translate(0em, 0.2em)',
    },
}));