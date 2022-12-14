export function ContainerSobre ({imgPath, title, description}) {
    return (
        <div >
            <img width="300" src={imgPath} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}