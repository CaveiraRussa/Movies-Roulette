export function Poster(props: any) {
    return (
        <div
        {...props}
        style={{
        }}
        >
        <img style={{ width: "300px"}}
                src={`./img/mini${props.index}.jpg`}
                />
        {props.children}
        </div>
    );
}