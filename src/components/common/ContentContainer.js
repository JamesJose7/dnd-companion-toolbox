import React from 'react';
import { Box, Paper, styled } from '@mui/material';

import { colors } from '../../config/colors';

export const Background = styled(Paper)`
  background: ${colors.light};
`;

const ContentContainer = ({ children, ...props }) => {
  return (
    <Background elevation={2}>
      <Box py={4} px={5} {...props}>
        {children}
      </Box>
    </Background>
  );
};

export default ContentContainer;
