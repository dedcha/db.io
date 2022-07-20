



let articleList = [

    {src: "assets/skip.png", article: "first sdfasdasdfasdasdasdasd asdasdasdasdas asdasdasdasdasd asdasdasd"},
    {src: "", article: "second"},
    {src: "assets/skip.png", article: "first"},
    {src: "assets/slide.png", article: "second"},
    {src: "assets/skip.png", article: "first"},
    {src: "assets/slide.png", article: "second"}

];


const ContentItem = (props) => {
    const src=props.src;
    const article=props.article;
    return (
        <div className="content-item">
            {src && <div className="item-1">
                        <img width="20px" height="20px" src={src} />
                    </div>
            }

            <div className="item-3">
                <article>{article}</article>
            </div>
            
        </div>
    );
}



const Content = (p) => {
    const items = p.items;
    return (
        <div className="content-list">
            {items && items.map(item => (
                <ContentItem article={item.article} src={item.src} />
            ))}
        </div>
    )
}


ReactDOM.render(<Content items={articleList} />, document.getElementById("root"));
