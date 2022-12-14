export function Container({title, imgPath, description, link}) {
    return (
        <>
            <h1>{title}</h1>
            <img width="300" src={imgPath} />
            <p>{description}</p>
            <button className="button"><a className="text" href={link} target="_blank" rel="noreferrer" >Ver projeto</a></button>
        </>
    );
}