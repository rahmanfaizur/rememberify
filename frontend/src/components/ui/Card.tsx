
interface CardProps {
    title: string,
    projects: string[],
    tags: string[],
    addedData: string,
    onShare: () => void,
    onDelete: () => void
}

export const Card = (props: CardProps) => {
    return (
        <div>
            <h3>{props}</h3> 
            {/* render the 3 svg above */}
            <div></div>
        </div>
    )
}