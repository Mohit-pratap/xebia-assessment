import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar, Box, Container, NavLink } from 'theme-ui';
import { useUser } from '../../contexts/UserContext/userContext';

import { Logo } from '../Icons/Logo';

export const Menu = () => {
  const user = useUser();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10 || currentScrollPos + window.innerHeight >= document.documentElement.scrollHeight;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);


  return (
    <Box
      as="menu"
      sx={{
        position: 'fixed',
        // top: '0',
        left: '0',
        width: '100%',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
        display: 'flex',
        top: visible ? '0' : '-100px',
        transition: 'top 0.3s'
      }}
    >
      <Container p={10} sx={{ flex: '1 auto' }}>
        <NavLink as={Link} href="/en/US">
          <Logo />
        </NavLink>
        <NavLink as={Link} href="/en/US/product" pl={20}>
          Product
        </NavLink>
        <NavLink as={Link} href="/en/US/about" pl={20}>
          About
        </NavLink>
      </Container>
      <Avatar
        data-testid="usericon"
        sx={{
          margin: 10,
          width: 48,
          height: 48,
          padding: 1,
          backgroundColor: '#d8d8d8',
        }}
        src={user}
      />
    </Box>
  )
};
