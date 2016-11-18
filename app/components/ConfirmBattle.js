var React = require('react');
var PropTypes = React.PropTypes;

function puke(object) {
    return <pre> {JSON.stringify(object, null, ' ')} </pre>
}

function ConfirmBattle(props){

    return props.isLoading === true 
        ? <p> Loading... </p>
        : <div> Confirm battle!: {puke(props)} </div>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;