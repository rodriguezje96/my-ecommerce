export const ItemListContainer = ({ content, titulo }) => {
    return (
        <div className="container">
            <h2>{titulo}</h2>
            <p>{content}</p>
        </div>
    )

}