import React from 'react';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';
import DividerMenu from '../components/DividerMenu';

export default class IslandSnow extends React.Component {
  render() {
    return (
        <div>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
          <DividerMenu/>
        </div>
    );
  }
}
