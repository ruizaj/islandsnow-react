import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, GridColumn, Header, Input } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}
class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="https://cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749" centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle">
        <Grid container centered>
          <Dropdown item text="MEN" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="WOMEN" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="KIDS" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="BRANDS" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item fitted>SALE</Menu.Item>
        </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png" fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid container columns={3}>
            <Grid.Column>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Store Locations</List.Item>
                <List.Item>Employment</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Shipping & Returns</List.Item>
                <List.Item>Terms & Conditions</List.Item>
                <List.Item>Privacy Policy</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Sale</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>Join our mailing list for updates</List.Item>
                <List.Item>Sign up to receive our email updates!</List.Item>
                <Form>
                  <Form.Input>
                    <input placeholder='Enter email address'/>
                    <Button color='black' attached='right'>Join</Button>
                  </Form.Input>
                </Form>

              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));