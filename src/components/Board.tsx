import { Card } from "@mui/material";
import Chip from './Chip';

function Board() {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    return (
        // オセロの盤
        <Card square className="max-w-md">
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
                            {col === 0 && <></>}
                            {/* １：白が置かれている */}
                            {col === 1 && <Chip status='white'></Chip>}
                            {/* ２：黒が置かれている */}
                            {col === 2 && <Chip status='brack'></Chip>}
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
    );
}

export default Board;