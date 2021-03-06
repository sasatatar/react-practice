var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount: function(){
        var query = this.props.location.query;
        // fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players){
                this.setState({
                    isLoading: false,
                    playersInfo: players
                })
            }.bind(this))
    },
    handleInitiateBattle: function(){
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.playersInfo
            }
        })
    },
    render: function(){
        return (
            <ConfirmBattle 
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
            />
        );
    }
});

module.exports = ConfirmBattleContainer;