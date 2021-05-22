export function Poster(props: any) {
    return (
        <div
        {...props}
        style={{
        }}
        >
        <img style={{ maxWidth: "200px"}}
                src={`./img/mini${props.teste}.jpg`}
                />
        {props.children}
        </div>
    );
}