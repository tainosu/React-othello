import { Card } from "@mui/material";

function Board() {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    return (
        <Card square className="max-w-md">
        {board.map((row, rowIndex) => {
            // colsは横軸です。ここで横軸の要素を取得しています。
            const cols = row.map((col, colIndex) => {
            return (
                // マス目
                <div
                key={colIndex}
                className="border border-[#000] bg-[#516a39] aspect-[4/4]"
                >
                縦 - {rowIndex}
                <br></br>横 - {colIndex}
                </div>
            );
            });
            return (
            // rowは縦軸です。
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