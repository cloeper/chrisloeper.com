import React from 'react';
import styled from 'styled-components';
import './reset.css';
import './index.css';

import { Hero } from '../components/Hero';
import goldenHex from '../images/goldenhex.png';
import goldAbstract from '../images/goldAbstract.png';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MissionStatementContainer = styled.div`
  width: 400px;
`;

const NavContainer = styled.div`
  position: absolute;
  top: 600px;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  width: 200px;
  height: 75px;
  background: blueviolet;
`;

const HexBackground = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  background-image: url(${goldenHex});
  background-repeat: repeat;
  background-size: 20%;
  background-attachment: fixed;
`;

const IndexPage = () => (
  <>
    <div className="parallax">
      <div className="parallax__layer parallax__layer--base">
        <ContentContainer>
          <Hero />
          <MissionStatementContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci. In hac habitasse platea dictumst
            vestibulum rhoncus est pellentesque elit. Mi eget mauris pharetra et ultrices neque. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Nisl nisi scelerisque eu ultrices vitae
            auctor eu augue. Amet dictum sit amet justo donec enim. Dignissim diam quis enim lobortis scelerisque fermentum. Sapien pellentesque habitant morbi tristique senectus. Ridiculus mus mauris
            vitae ultricies leo integer malesuada nunc vel. Eget arcu dictum varius duis at consectetur lorem. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Ipsum faucibus vitae
            aliquet nec ullamcorper sit. Habitant morbi tristique senectus et netus et. Ut eu sem integer vitae justo eget. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Enim tortor at
            auctor urna. Diam maecenas ultricies mi eget mauris pharetra et. Pharetra massa massa ultricies mi quis. Accumsan lacus vel facilisis volutpat. Nibh cras pulvinar mattis nunc sed blandit
            libero. Sit amet massa vitae tortor condimentum lacinia quis vel. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Vitae ultricies leo integer malesuada nunc. At ultrices mi
            tempus imperdiet nulla malesuada. Nibh tellus molestie nunc non blandit massa enim. Varius quam quisque id diam. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dignissim
            diam quis enim lobortis scelerisque fermentum dui faucibus in. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Semper eget duis at tellus at. Venenatis a condimentum
            vitae sapien pellentesque. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Massa ultricies mi quis hendrerit dolor magna eget est. Auctor eu augue ut lectus
            arcu bibendum at. Ipsum suspendisse ultrices gravida dictum fusce ut. Semper auctor neque vitae tempus quam. Diam sit amet nisl suscipit adipiscing bibendum. Vitae et leo duis ut. Facilisi
            nullam vehicula ipsum a arcu cursus vitae congue mauris. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Consequat interdum varius sit amet mattis vulputate enim nulla
            aliquet. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Cursus in hac habitasse platea dictumst quisque sagittis. In iaculis nunc sed augue lacus. In tellus
            integer feugiat scelerisque varius. Lacinia at quis risus sed vulputate odio ut enim. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Eget dolor morbi non arcu
            risus quis varius quam quisque. Leo urna molestie at elementum eu facilisis sed. Nunc congue nisi vitae suscipit tellus mauris a. Proin nibh nisl condimentum id. Eget aliquet nibh praesent
            tristique magna sit amet. Amet cursus sit amet dictum sit amet justo donec. Vitae elementum curabitur vitae nunc sed. Quisque non tellus orci ac auctor augue mauris augue neque. Eget
            egestas purus viverra accumsan in nisl nisi scelerisque. Ultricies mi quis hendrerit dolor magna eget est lorem. In aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut
            porttitor leo a diam sollicitudin. Leo urna molestie at elementum eu. Pulvinar sapien et ligula ullamcorper malesuada. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Vulputate
            odio ut enim blandit volutpat maecenas volutpat. Sed turpis tincidunt id aliquet risus feugiat. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Dui nunc mattis enim ut tellus.
            Lorem donec massa sapien faucibus et molestie ac. Tellus orci ac auctor augue mauris augue neque. Consequat ac felis donec et odio pellentesque diam volutpat. Lacinia quis vel eros donec
            ac odio tempor. At tempor commodo ullamcorper a lacus vestibulum sed. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Nibh mauris cursus mattis molestie a iaculis at.
            Volutpat sed cras ornare arcu dui. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
          </MissionStatementContainer>
        </ContentContainer>
      </div>
      <div className="parallax__layer parallax__layer--menu">
        <NavContainer>
          <NavItem>Mission</NavItem>
          <NavItem>Experience</NavItem>
        </NavContainer>
      </div>
      <div className="parallax__layer parallax__layer--one">
        <img src={goldenHex} alt="hex" className="layerOneHexLeft" />
        <img src={goldenHex} alt="hex" className="layerOneHexMiddle" />
        <img src={goldenHex} alt="hex" className="layerOneHexRight" />
      </div>
      <div className="parallax__layer parallax__layer--two">
        <img src={goldenHex} alt="hex" className="layerTwoHexLeft" />
        <img src={goldenHex} alt="hex" className="layerTwoHexMiddle" />
        <img src={goldenHex} alt="hex" className="layerTwoHexRight" />
      </div>
      <div className="parallax__layer parallax__layer--three">
        <img src={goldenHex} alt="hex" className="layerThreeHexLeft" />
        <img src={goldenHex} alt="hex" className="layerThreeHexMiddle" />
        <img src={goldenHex} alt="hex" className="layerThreeHexRight" />
      </div>
      <div className="parallax__layer parallax__layer--four">
        <img src={goldenHex} alt="hex" className="layerFourHexLeft" />
        <img src={goldenHex} alt="hex" className="layerFourHexRight" />
      </div>
    </div>
  </>
);

export default IndexPage;
