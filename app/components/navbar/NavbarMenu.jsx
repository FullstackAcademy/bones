import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarGroup } from 'material-ui';
import { PopoverAnimationVertical } from 'material-ui/Popover';

export default class NavbarMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <ToolbarGroup style={{float: 'right'}} >
        <i className="material-icons" onTouchTap={this.handleTouchTap} style={{color:'white'}}>perm_identity</i>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Log In" />
            <MenuItem primaryText="Sign up" />
          </Menu>
        </Popover>
      </ToolbarGroup>
    );
  }
}