import Cell from "./cell";

export default function Board() {
    return (
        <div className="container mx-auto w-max-lg h-max-lg border mt-20 aspect-square gap-1">
            <Cell />
        </div>
    )
}