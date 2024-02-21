import React, {FC, useState, useEffect } from 'react';
import { CustomCard } from '../CustomCard';
import { 
  Box, 
  Image, 
  Grid,
  Heading,
  Button,
  Spinner 
} from "theme-ui";

type Props = {
    loading: boolean;
    data: any;
};

export const ProductCard: FC<Props> = (props) => {
    const {loading, data} = props;
  return (
    <>
        {
            !loading ?
                <Grid gap={4} columns={[1, 2, 3, 4]}>
                    {   
                        data.map((item: any, i: any) => {
                            return (
                                <CustomCard key={i}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Box>
                                            <Image 
                                                src={item.image}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '20px',
                                            }}
                                        >
                                            <Heading as="h3" sx={{textAlign: 'center'}}>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Heading as="h5" sx={{textAlign: 'center'}}>
                                                {item.description}
                                            </Heading>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '100px'
                                            }}
                                        >
                                            <Heading as="h4" sx={{textAlign: 'center'}}>
                                                ${item.price.amount}
                                            </Heading>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '20px'
                                            }}
                                        >
                                            <Button
                                                sx={{
                                                backgroundColor: 'rgb(0, 163, 233)',
                                                color: 'text',
                                                border: '2px solid',
                                                borderColor: 'primary',
                                                borderRadius: '4px',
                                                padding: '0.5rem 1rem',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'secondary',
                                                    color: 'text',
                                                },
                                                }}
                                            >
                                                Buy now
                                            </Button>
                                        </Box>
                                    </Box>
                                </CustomCard>
                            )
                        })
                    }
                </Grid>
            :
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'calc(100vh - 120px)'
                }}
            >
                <Spinner 
                    sx={{
                        color: 'rgb(0, 163, 233)'
                    }}
                />
            </Box>
        }
    </>
  )
}
