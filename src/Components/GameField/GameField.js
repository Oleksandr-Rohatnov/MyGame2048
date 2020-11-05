import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { classNameItem } from '../ServiceComponents/ServiceComponents'

export const GameField = ({arrays, gameStatus, winStatus}) => (
  <div className="gameBlock">
    <div className={classNameItem(arrays[0][0])}>{arrays[0][0]}</div>
    <div className={classNameItem(arrays[0][1])}>{arrays[0][1]}</div>
    <div className={classNameItem(arrays[0][2])}>{arrays[0][2]}</div>
    <div className={classNameItem(arrays[0][3])}>{arrays[0][3]}</div>

    <div className={classNameItem(arrays[1][0])}>{arrays[1][0]}</div>
    <div className={classNameItem(arrays[1][1])}>{arrays[1][1]}</div>
    <div className={classNameItem(arrays[1][2])}>{arrays[1][2]}</div>
    <div className={classNameItem(arrays[1][3])}>{arrays[1][3]}</div>

    <div className={classNameItem(arrays[2][0])}>{arrays[2][0]}</div>
    <div className={classNameItem(arrays[2][1])}>{arrays[2][1]}</div>
    <div className={classNameItem(arrays[2][2])}>{arrays[2][2]}</div>
    <div className={classNameItem(arrays[2][3])}>{arrays[2][3]}</div>

    <div className={classNameItem(arrays[3][0])}>{arrays[3][0]}</div>
    <div className={classNameItem(arrays[3][1])}>{arrays[3][1]}</div>
    <div className={classNameItem(arrays[3][2])}>{arrays[3][2]}</div>
    <div className={classNameItem(arrays[3][3])}>{arrays[3][3]}</div>
    <div className={classNames('gameOver',{'gameOver--hidden': gameStatus})}>Game Over</div>
    <div className={classNames('win',{'win--hidden': !winStatus})}>You win!!!</div>
    <p className="gameBlock__howToPlay">HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</p>
  </div>
);

GameField.propTypes = {
  arrays: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  gameStatus: PropTypes.func.isRequired,
  winStatus: PropTypes.func.isRequired,
}