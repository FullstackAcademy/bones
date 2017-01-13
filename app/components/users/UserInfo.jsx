import React from 'react';
import { Toggle, RaisedButton } from 'material-ui';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
  CardHeader,
  CardActions
} from 'material-ui/Card';

const style = {
  margin: 12
};

// const imgStyle = {
//   max-width: '100%'
// };

const UserInfoComponent = ({
  userInfo,
  handleExpand,
  handleReduce,
  handleToggle,
  handleExpandChange
}) => (
  <Card
    expanded={userInfo.expanded}
    onExpandChange={handleExpandChange}
  >
    <CardHeader
      title={userInfo.detail.firstName}
      subtitle={userInfo.detail.lastName}
      avatar="images/ok-128.jpg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
      <Toggle
        toggled={userInfo.expanded}
        onToggle={handleToggle}
        labelPosition="right"
        label="This toggle controls the expanded state of the component."
      />
    </CardText>
    <CardMedia
      expandable={true}
      overlay={<CardTitle
        title="User"
        subtitle="Detail"
      />}
    >
      <img
        src="http://rock100diz.com/wp-content/uploads/2015/04/galets-5.jpg"
      />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      {/* <FlatButton label="Expand" onTouchTap={handleExpand} /> */}
      {/* <FlatButton label="Reduce" onTouchTap={handleReduce} /> */}
      <RaisedButton
        label={(!userInfo.expanded) ? 'Edit' : 'Save'}
        primary={true}
        style={style}
        onClick={(!userInfo.expanded) ? handleExpand : handleReduce}
      />
    </CardActions>
  </Card>
);

export default UserInfoComponent;
