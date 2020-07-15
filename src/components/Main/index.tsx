import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Magdiel Dantas</strong>
                <span>2400 Tweets</span>
            </ProfileInfo>

            {/* <ProfilePage/> */}

            {/* <BottomMenu>
                <HomeIcon/>
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>
            </BottomMenu> */}
        </Header>
    </Container>
  );
}

export default Main;