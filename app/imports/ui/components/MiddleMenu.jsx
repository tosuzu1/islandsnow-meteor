import React from 'react';
import { Menu, Dropdown, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                <Dropdown.Item>BOTTOMS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                <Dropdown.Item>STICKERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                <Dropdown.Item>STICKERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIESS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRAND">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                <Dropdown.Item>AMUSE SOCIETY</Dropdown.Item>
                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                <Dropdown.Item>HAWAII DOMESTIC MARKET</Dropdown.Item>
                <Dropdown.Item>HERSCHEL SUPPLY CO.</Dropdown.Item>
                <Dropdown.Item>HILIFE</Dropdown.Item>
                <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                <Dropdown.Item>KAILUA BOYS</Dropdown.Item>
                <Dropdown.Item>KAILUA GIRLS</Dropdown.Item>
                <Dropdown.Item>KA'OHAO</Dropdown.Item>
                <Dropdown.Item>MOKULUA HULA</Dropdown.Item>
                <Dropdown.Item>LANIKAI CANOE CLUB</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
