import React from 'react'
import ReactDOM from 'react-dom'
import addons from 'react-addons'
import Hammer from 'hammerjs'
import merge from 'merge'

var Card = React.createClass({displayName: "Card",
    getInitialState: function() {
        return {
            initialPosition: {
                x: 0,
                y: 0
            }
        };
    },

    setInitialPosition: function() {
        var screen = document.getElementById('main'),
            card = ReactDOM.findDOMNode(this),

            initialPosition = {
                x: Math.round((screen.offsetWidth - card.offsetWidth) / 2),
                y: Math.round((screen.offsetHeight - card.offsetHeight) / 2)
            };

        this.setState({
            initialPosition: initialPosition
        });
    },

    componentDidMount: function() {
        this.setInitialPosition();

        window.addEventListener('resize', this.setInitialPosition);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.setInitialPosition);
    },

    render: function() {
        var initialTranslate = ''.concat(
            'translate3d(',
            this.state.initialPosition.x + 'px,',
            this.state.initialPosition.y + 'px,',
            '0px)'
        );

        var style = merge({
            msTransform: initialTranslate,
            WebkitTransform: initialTranslate,
            transform: initialTranslate,
            zIndex: this.props.index,
            backgroundImage: 'url("/' + this.props.image + '")'
        }, this.props.style);

        var classes = addons.classSet(merge(
            {
                card: true
            },
            this.props.classes
        ));

        return (
                React.createElement("div", {style: style, className: classes},
                React.createElement("h1", null, this.props.title),
                React.createElement("p", null, this.props.text)
                )
        );
    }
});

var DraggableCard = React.createClass({displayName: "DraggableCard",
    getInitialState: function() {
        return {
            x: 0,
            y: 0,
            initialPosition: {
                x: 0,
                y: 0
            },
            startPosition: {
                x: 0,
                y: 0
            },
            animation: null
        };
    },

    resetPosition: function() {
        var screen = document.getElementById('main'),
            card = ReactDOM.findDOMNode(this);

        console.log('THIS IS THE SCREEN', screen.availHeight)
        var initialPosition = {
            x: Math.round((screen.offsetWidth - card.offsetWidth) / 2),
            y: Math.round((screen.offsetHeight - card.offsetHeight) / 2)
        };

        var initialState = this.getInitialState();
        this.setState(
            {
                x: initialPosition.x,
                y: initialPosition.y,
                initialPosition: initialPosition,
                startPosition: initialState.startPosition
            }
        );
    },

    panHandlers: {
        panstart: function() {
            this.setState({
                animation: false,
                startPosition: {
                    x: this.state.x,
                    y: this.state.y
                }
            });
        },
        panend: function(ev) {
            var screen = document.getElementById('main'),
                card = ReactDOM.findDOMNode(this);

            if (this.state.x < -50) {
                this.props.onOutScreenLeft(this.props.cardId);
            } else if ((this.state.x + (card.offsetWidth - 50)) > screen.offsetWidth) {
                this.props.onOutScreenRight(this.props.cardId);
            } else if (this.state.y < -50) {
                this.props.onOutScreenUp(this.props.cardId);
            } else if ((this.state.y + (card.offsetHeight - 50)) > screen.offsetHeight) {
                this.props.onOutScreenDown(this.props.cardId);
            } else {
                this.resetPosition();
                this.setState({
                    animation: true
                });
            }
        },
        panmove: function(ev) {
            this.setState(this.calculatePosition(
                ev.deltaX, ev.deltaY
            ));
        },
        pancancel: function(ev) {
            console.log(ev.type);
        }
    },

    handlePan: function(ev) {
        ev.preventDefault();
        this.panHandlers[ev.type].call(this, ev);
        return false;
    },

    handleSwipe: function(ev) {
        console.log(ev.type);
    },

    calculatePosition: function(deltaX, deltaY) {
        return {
            x: (this.state.initialPosition.x + deltaX),
            y: (this.state.initialPosition.y + deltaY)
        };
    },

    componentDidMount: function() {
        this.hammer = new Hammer.Manager(ReactDOM.findDOMNode(this));
        this.hammer.add(new Hammer.Pan({threshold: 0}));

        var events = [
            ['panstart panend pancancel panmove', this.handlePan],
            ['swipestart swipeend swipecancel swipemove',
             this.handleSwipe]
        ];

        events.forEach(function(data) {
            if (data[0] && data[1]) {
                this.hammer.on(data[0], data[1]);
            }
        }, this);

        this.resetPosition();
        window.addEventListener('resize', this.resetPosition);
    },

    componentWillUnmount: function() {
	this.hammer.stop();
	this.hammer.destroy();
	this.hammer = null;

        window.removeEventListener('resize', this.resetPosition);
    },

    render: function() {
        var translate = ''.concat(
            'translate3d(',
            this.state.x + 'px,',
            this.state.y + 'px,',
            '0px)'
        );

        var style = {
            msTransform: translate,
            WebkitTransform: translate,
            transform: translate
        };

        var classes = {
            animate: this.state.animation
        };

        return (React.createElement(Card, React.__spread({},  this.props,
                {style: style,
                classes: classes})));
    }
});

var Swipeable = React.createClass({displayName: "Tinderable",
    getInitialState: function() {
        return {
            cards: this.props.initialCardsData,
            alertLeft: false,
            alertDown: false,
            alertRight: false,
            alertUp: false
        };
    },

    // showMoreDetails: function(side, cardId) {
    //   this.setState({
    //     alertUp : true,
    //
    //   })
    // },
    removeCard: function(side, cardId) {
        setTimeout(function(){
            if (side === 'left') {
                this.setState({alertLeft: false});
            } else if (side === 'right') {
                this.setState({alertRight: false});
            } else if (side === 'down') {
                this.setState({alertDown: false});
            } else if (side === 'up') {
                this.setState({alertUp: false});
            }
        }.bind(this), 3000);

        this.setState({
            cards: this.state.cards.filter(function(c) {
                return c.id !== cardId;
            }),
            alertLeft: side === 'left',
            alertRight: side === 'right',
            alertDown: side === 'down',
            alertUp: side === 'up'
        });
    },

    render: function() {
        var cards = this.state.cards.map(function(c, index, coll) {
            var props = {
                cardId: c.id,
                index: index,
                onOutScreenLeft: this.removeCard.bind(this, 'left'),
                onOutScreenRight: this.removeCard.bind(this, 'right'),
                onOutScreenDown: this.removeCard.bind(this, 'down'),
                onOutScreenUp: this.removeCard.bind(this, 'up'),
                title: c.title,
                text: c.text,
                image: c.image
            };

            var component = (index === (coll.length - 1)) ?
                    DraggableCard:
                    Card;

            return React.createElement(component, props);
        }, this);

        var classesAlertLeft = addons.classSet({
            'alert-visible': this.state.alertLeft,
            'alert-left': true,
            'alert': true
        });
        var classesAlertUp = addons.classSet({
            'alert-visible': this.state.alertUp,
            'alert-up': true,
            'alert': true

        });
        var classesAlertRight = addons.classSet({
            'alert-visible': this.state.alertRight,
            'alert-right': true,
            'alert': true
        });
        var classesAlertDown = addons.classSet({
            'alert-visible': this.state.alertDown,
            'alert-down': true,
            'alert': true
        });

        return (
            React.createElement("div", null,
                React.createElement("div", {className: classesAlertLeft}, "Saved"),
                React.createElement("div", {className: classesAlertRight}, "Removed"),
                React.createElement("div", {className: classesAlertDown}, "down"),
                React.createElement("div", {className: classesAlertUp}, "up"),
                React.createElement("div", {id: "cards"},
                    cards
                )
            )
        );
    }
});

module.exports = Swipeable;
