export function Poster(props: any) {
    return (
        <div
        {...props}
        style={{
        }}
        >
        <img style={{ width: "250px", height: "350px"}}
                src={`./img/mini${props.index}.jpg`}
                />
        {props.children}
        </div>
    );
}