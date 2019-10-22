import React from 'react';
import { Menu, Grid, Icon } from 'semantic-ui-react';

export default class FooterSocialMedia extends React.Component {
  render() {
    return (
        <Menu borderless className="bottommenu">
          <Grid centered container>
            <Menu.Item fitted><Icon name="big facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="big instagram"/></Menu.Item>
            <Menu.Item fitted><Icon name="big twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="big pinterest"/></Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
