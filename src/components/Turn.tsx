function Turn(props: any){
    const color = props.color === 'white' ? '白' : '黒';
    return (
        <>
            {color}のターン
        </>
    )
}

export default Turn;