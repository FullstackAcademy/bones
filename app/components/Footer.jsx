import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    console.log('what is the state', this.state.selectedIndex)
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Preferences"
            icon={nearbyIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Charities"
            icon={nearbyIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Selections"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
