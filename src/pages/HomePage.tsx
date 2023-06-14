import React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CompanyBox from '../components/CompanyBox';
import WorkBox from '../components/WorkBox';
import Link from '@mui/material/Link';
import ContactForm from '../components/ContactForm';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const NavButton = styled(Button)`
  color: black;
  font-size: 22px;
  font-weight: 700;
  text-transform : unset;
  &:hover {
    transform: translateY(-2px);
  }
`;

const NavPageButton = styled(Button)`
color: black;
font-weight: 400;
font-size: 28px;
text-transform : unset;
&:hover {
  transform: translateY(-2px);
}
`;

const HomePage = () => {
    return (
        <div>
            <div style={{width:"100%", height:"9px", backgroundColor:"black"}}></div>
            <Box
              sx={{
                marginTop:"5px"
              }}
            >
              <PageHeader />
            </Box>      
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '1162px',
                minHeight: '217px',
                margin: 'auto',
                marginTop: '124px'
              }}
            >
                <Typography style={{
                        textAlign:"center", 
                        fontSize:"28px",
                        fontWeight:"400",
                        textTransform:"lowercase"
                }}>
                   Lorem ipsum dolor sit amet, 
                   consectetur <b>adipiscing</b> elit 
                   Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit
                </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '100px',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                  ml: 5,
                },
              }}
              onClick={preventDefault}
            >
              <NavButton>
                About
                <img src='iconArrowRight.png' width={34} style={{marginLeft:'12px'}}/>
              </NavButton>
              <NavButton>
                News
                <img src='iconArrowRight.png' width={34} style={{marginLeft:'12px'}}/>
              </NavButton>
              <NavButton>
                Careers
                <img src='iconArrowRight.png' width={34} style={{marginLeft:'12px'}}/>
              </NavButton>
            </Box>
            <Box
              sx={{
                height: '127px',
                backgroundColor: '#F7F7F7',
                backgroundBlendMode:'darken',
                borderBottom: '1px solid black',
                marginTop: '97px',
                paddingLeft: '40px',
                paddingRight: '40px'
              }}
            >
                <Box
                  sx={{
                    maxWidth: '1250px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: 'auto'
                  }}
                >
                    <NavPageButton>
                        Featured Case
                        <img src='iconArrowDown.png' style={{marginLeft:'20px'}}/>
                    </NavPageButton>
                    <NavPageButton>
                        Contact
                        <img src='iconArrowDown.png' style={{marginLeft:'20px'}}/>
                    </NavPageButton>
                </Box>
            </Box>
            <Box
              sx={{
                minHeight:'760px',
                paddingLeft: '40px',
                paddingRight: '40px',
                borderBottom:'88px solid black'
              }}
            >
                <Box
                  sx={{
                    maxWidth: '1280px',
                    minHeight:'760px',
                    margin: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '& > :not(style) + :not(style)': {
                        ml: 5,
                    },
                  }}
                >
                    <Box
                      sx={{
                        maxWidth: '308px'
                      }}
                    >
                        <Typography style={{fontSize:'28px', fontWeight:'700'}}>
                            Featured case
                        </Typography>
                        <Typography style={{fontSize:'18px', fontWeight:'400', marginTop:'30px'}}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut 
                        </Typography>
                        <Typography style={{fontSize:'14px', fontWeight:'400', marginTop:'34px'}}>
                            Brand awareness - Team extension
                        </Typography>
                        <NavButton style={{marginTop:'26px', paddingLeft:'unset'}}>
                          View Case
                          <img src='iconArrowRight.png' width={34} style={{marginLeft:'12px'}}/>
                        </NavButton>
                    </Box>
                    <Box>
                       <img src='picture1.png' style={{width:'100%'}} />
                    </Box>
                </Box>
            </Box>
            <Box
              sx={{
                minHeight: '760px',
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
            >
                 <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1018px',
                    minHeight: '62px',
                    margin: 'auto',
                    paddingTop:'113px'
                  }}
                >
                    <Typography style={{
                            textAlign:"center", 
                            fontSize:"28px",
                            fontWeight:"400",
                            textTransform:"lowercase"
                    }}>
                       Lorem ipsum dolor sit amet, 
                       consectetur <b>adipiscing</b> elit 
                       Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit
                    </Typography>
                </Box>
                <Box
                  sx={{
                    margin:'auto',
                    maxWidth: '1035px',
                    marginTop: '116px'
                  }}
                >
                  <CompanyBox />
                </Box>
            </Box>
            <Box
              sx={{
                minHeight:'760px',
                border:'1px solid black',
                paddingTop:'70px',
                paddingLeft: '40px',
                paddingRight: '40px'
              }}
            >
                <Box
                  sx={{
                    maxWidth:'1234px',
                    display:'flex',
                    justifyContent:'space-between',
                    margin: 'auto'
                  }}
                >
                  <Button style={{fontSize:'20px', fontWeight:'700', color:'black'}}>
                      Featured Work
                  </Button>
                  <Button style={{fontSize:'20px', fontWeight:'700', color:'black'}}>
                      All Work
                  </Button>
                </Box>
                <Box
                  sx={{
                    margin:'auto',
                    maxWidth:'1278px',
                    marginTop:'68px',
                  }}
                >
                  <WorkBox />
                </Box>
            </Box>
            <Box
              sx={{
                minHeight:'173.69px',
                backgroundColor:'#D3D3D3'
              }}
            >
              <Box
                sx={{
                  margin:'auto',
                  justifyContent:'space-between',
                  display:'flex',
                  maxWidth:'1244px',
                  paddingTop:'35px',
                  paddingLeft: '40px',
                  paddingRight: '40px'
                }}
              >
                <Box>
                  <Typography style={{fontSize:'18px', fontWeight:'400'}}>Our inbox is missing you:</Typography>
                  <Link href='#' underline="none" style={{fontSize:'24px', fontWeight:'400', color:'black'}}>holla@controltheory.io</Link>
                </Box>
                <Box
                  sx={{
                    textAlign:'right'
                  }}
                >
                  <Typography style={{fontSize:'18px', fontWeight:'400'}}>Apply for work:</Typography>
                  <Link href='#' underline="none" style={{fontSize:'24px', fontWeight:'400', color:'black'}}>work@controltheory.io</Link>
                </Box>
              </Box>
            </Box>
            <ContactForm />
        </div>
    );
}

export default HomePage;