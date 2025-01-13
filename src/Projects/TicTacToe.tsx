import anime from 'animejs/lib/anime.es.js';
import { useCallback, useEffect, useState } from 'react';

import text from '../Text.json';

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const TicTacToe = () => {
    const [gameBoard, setGameBoard] = useState<("X" | "O" | null)[]>(Array(9).fill(null));
    const [playersTurn, setPlayersTurn] = useState <'X' | 'O'>('X');
    const [winnerResult, setWinnerResult] = useState<string | null>(null);
    const [autoPlayOn, setAutoPlayOn] = useState<boolean>(false);
    const [lastSpot, setLastSpot] = useState<number>(0);
    const [winningCombination, setWinningCombination] = useState<number[] | null>(null);

    useEffect(() => {
        anime({
            targets: '#ticTacToeContainer',
            borderRadius: ['0%', '10%'],
            translateX: ['50%', 0],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 50,
            autoplay: true,
        });
    }, []);

    const makeMove = useCallback((index: number) => {
        if (gameBoard[index] === null && winnerResult === null) {
            setLastSpot(index);
            const updateBoard = [...gameBoard]
            updateBoard[index] = playersTurn
            setGameBoard(updateBoard);
            setPlayersTurn(playersTurn === 'X' ? 'O' : 'X')
        }
    }, [gameBoard, playersTurn, winnerResult])

    const restart = () => {
        setGameBoard(Array(9).fill(null));
        setPlayersTurn('X');
        setWinnerResult(null);
        setAutoPlayOn(false);
        setWinningCombination(null);
    }

    const checkIfWinner = useCallback(() => {
        if (!gameBoard.includes(null)) {
            setWinnerResult('Draw');
            return true;
        }
        for (const combination of WINNING_COMBINATIONS) {
            if (
                gameBoard[combination[0]] !== null && 
                (gameBoard[combination[0]] === gameBoard[combination[1]] && 
                gameBoard[combination[1]] === gameBoard[combination[2]])
            ) {
                setWinnerResult(gameBoard[combination[0]]);
                setWinningCombination(combination);
                return true;
            }
        }
        return false;
    }, [gameBoard])

    useEffect(() => {
        const isThereAWinner = checkIfWinner();
        if (autoPlayOn && playersTurn === 'O' && !isThereAWinner) {
            for (const combination of WINNING_COMBINATIONS) {
                if (combination.includes(lastSpot)) {
                    const nullIndex = combination.find(index => gameBoard[index] === null);
                    if (nullIndex !== undefined) {
                        setTimeout(() => makeMove(nullIndex), 1000);
                        return;
                    }
                }
            }
        } 
    }, [autoPlayOn, checkIfWinner, gameBoard, lastSpot, makeMove, playersTurn])

    return (
        <div id='ticTacToeContainer' className="flex flex-col bg-teal-300 bg-cover max-h-5/6 2md:min-h-[400px] w-full p-8">
            <h1 className='text-white font-semibold mb-4'>{text.ticTacToe.title}</h1>
            <div className='flex items-center justify-center'>
                <button 
                    onClick={() => setAutoPlayOn(false)}
                    className={`m-2 p-2 ${autoPlayOn ? "bg-sky-200" : "bg-sky-400" } bg-opacity-60 border border-sky-400 rounded-md text-lg md:text-3xl`}
                >
                    Play With A Friend
                </button>
                <button 
                    onClick={() => setAutoPlayOn(true)}
                    className={`m-2 p-2 ${autoPlayOn ? "bg-sky-400" : "bg-sky-200"} bg-opacity-60 border border-sky-400 rounded-md text-lg md:text-3xl`}
                >
                    Play Against Computer (WIP)
                </button>
            </div>
            <div className='flex flex-row mb-6 items-center justify-center'>
                <div className='mr-2 md:mr-8 bg-white bg-opacity-40 p-4 rounded-md w-full md:w-1/2'>
                    <div className='grid grid-cols-3 gap-2'>
                        {gameBoard.map((box, index) => {
                            return (
                            <div 
                                className={`min-w-20 h-20 flex items-center justify-center border border-sky-400 ${winningCombination?.includes(index) ? "bg-sky-400" : "bg-opacity-40"}`}
                                onClick={() => makeMove(index)}
                            >
                                {box}
                            </div>
                        )})}
                    </div>
                </div>
            </div>
            <div>{text.ticTacToe.whoseTurn}{playersTurn}</div>
            <div>{text.ticTacToe.winnerText}{winnerResult}</div>
            <button 
                onClick={restart} 
                className='mt-2 p-2 bg-sky-200 bg-opacity-60 border border-sky-400 rounded-md text-lg md:text-3xl'
            >
                {text.ticTacToe.restart}
            </button>
        </div>
    )
};