import { FC } from 'react';
import { Card } from 'theme-ui';

type Props = {
    children?: React.ReactNode;
};

export const CustomCard: FC<Props> = ({ children }) => (
  <Card
    sx={{
      width: '100%',
      height: 'auto',
      p: 3,
      borderRadius: 4,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }}
    variant={'primary'}
  >
    {children}
  </Card>
);
