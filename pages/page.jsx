export default function Page ({ isPreview }){
    const defaultStyle = { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'};
    const style = isPreview ? { ...defaultStyle, background: '#333', color: '#fff'}: defaultStyle
    return (
        <div style={style}>page</div>
    )
}

export function getStaticProps({ preview }){
    return {
        props: {
            isPreview: !!preview
        }
    }
}