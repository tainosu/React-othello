import { useState } from "react";

import { Card } from "@mui/material";
import Chip from './Chip';
import Turn from './Turn';

function Board() {
    // 初期状態
    const defaultBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    // 周囲８方向を調べる配列
    const direction = [
        [-1, 0], // 左
        [-1, 1], // 左下
        [0, 1], // 下
        [1, 1], // 右下
        [1, 0], // 右
        [1, -1], // 右上
        [0, -1], // 上
        [-1, -1], // 左上
    ];
    // 先行の色
    const preceding = 'white';
    // 盤の状態管理
    const [board, setBoard] = useState(defaultBoard);
    // ターンの管理
    const [turn, setTurn] = useState(preceding);

    // ひっくり返すことができる座標を取得
    const getReversePoints = (currentX: number, currentY: number) => {
        //ひっくり返す座標
        const result = [] as number[][];
        // 現在のターン
        const currentTurn = turn === "white" ? 1 : 2;
        // ８方面を確認する
        direction.forEach((d) => {
        //確認する方向の座標
        const axisX = d[0];
        const axisY = d[1];
        let x = axisX + currentX;
        let y = axisY + currentY;
        if (y < 0 || y >= 8) return;
        if (x < 0 || x >= 8) return;
        // 確認する方向の隣のコマの数値
        const pointStatus = board[y][x];
        // コマがなかった場合次の方向を確認しに行く
        if (!pointStatus) return;
        // 確認する方向の隣のコマの数値が同じであった場合次の方向を確認しに行く
        if (pointStatus === currentTurn) return;
        // 変更するかもしれない座標
        let localChangePoint = [[axisX + currentX, axisY + currentY]];
        let isStatus = true;
        while (isStatus) {
            // 確認する方向を順に確認しています。
            x = x + axisX;
            y = y + axisY;
            if (y < 0 || y >= 8) return;
            if (x < 0 || x >= 8) return;
            const pointStatus = board[y][x];
            // コマがなかった場合、localChangePointを空にして次の方向確認
            if (!pointStatus) {
            localChangePoint = [];
            isStatus = false;
            }
            // 同じ色のコマがあった場合処理を抜ける
            else if (pointStatus === currentTurn) {
            isStatus = false;
            }
            // 違う色のコマだった場合、localChangePointに座標を入れる
            else {
            localChangePoint.push([x, y]);
            }
        }
        result.push(...localChangePoint);
        });
        return result;
    };

    // 盤クリック時のイベント
    const clickBoard = (rowIndex: number, colIndex: number) => {
        const newBoard = [...board];
        const reversePoints = getReversePoints(colIndex, rowIndex);
        // 置けないマスをクリックしたら抜ける
        if (reversePoints.length === 0) return 0;
        newBoard[rowIndex][colIndex] = turn === 'white' ? 1 : 2;
        // コマをひっくり返す
        reversePoints.forEach((item) => {
            const x = item[0];
            const y = item[1];
            newBoard[y][x] = turn === "white" ? 1 : 2;
        });
        // 盤の状態を更新
        setBoard(newBoard);
        // ターンを更新
        setTurn(turn === 'white' ? 'black' : 'white');
    };

    return (
        <>
            {/* オセロの盤 */}
            <Card square className="max-w-md" style={{margin: '0 auto'}}>
                {board.map((row, rowIndex) => {
                    // cols:横軸
                    const cols = row.map((col, colIndex) => {
                        return (
                            // コマ
                            <div
                                key={colIndex}
                                className="border border-[#000] bg-[#516a39] aspect-[4/4] p-1"
                            >
                                {/* ０：何も置かれていない */}
                                {col === 0 && (
                                    <div
                                        className="w-full h-full"
                                        onClick={() => clickBoard(rowIndex, colIndex)}
                                    ></div>
                                )}
                                {/* １：白が置かれている */}
                                {col === 1 && <Chip status='white'></Chip>}
                                {/* ２：黒が置かれている */}
                                {col === 2 && <Chip status='black'></Chip>}
                            </div>
                        );
                    });

                    return (
                        // row:縦軸
                        <div
                            className="grid justify-items-stretch grid-cols-8 w-full"
                            key={rowIndex}
                        >
                            {cols}
                        </div>
                    );
                })}
            </Card>
            
            {/* 現状のターン */}
            <div className="font-bold text-2xl text-[#696969] py-4 mb-2">
                <Turn color={turn} />
            </div>
        </>
        
    );
}

export default Board;
