import React from 'react';

import Feed from '../Feed'

import {
Container,
Banner,
Avatar,
ProfileData,
LocationIcon,
CakeIcon,
Followage,
EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            
            <h1>Magdiel Dantas</h1>
            <h2>@magdielndantas</h2>

            <p>
                Desenvolvedor front-end
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Natal, Rn
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 15 de dezembro de 1997
                </li>
            </ul>

            <Followage>
                <span>seguindo <strong>100</strong></span>
                <span><strong>12 </strong> seguidores</span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  );
}

export default ProfilePage;