interface ChipsProps {
    status: 'white' | 'black';
}

function Chips({ status }: ChipsProps) {
    return (
        <div
            className={`w-full h-full rounded-full 
            ${status === "white" ? "bg-[#fff]" : "bg-[#000]"} 
            `}
        ></div>
    );
}

export default Chips;