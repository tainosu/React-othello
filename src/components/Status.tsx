function Turn(props: any){
    const color = props.color === 'white' ? '白' : '黒';
    const whiteNum = props.white;
    const blackNum = props.black;
    return (
        <div className="flex justify-center">
            <div className="mr-12">白:{whiteNum}個</div>
            <div className="mr-12">{color}のターン</div>
            黒:{blackNum}個
        </div>
    )
}

export default Turn;