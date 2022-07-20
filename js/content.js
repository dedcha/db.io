



let articleList = [
    {src: "assets/Shaded/sprite_0052.png", article: "0"},
    {src: "assets/Shaded/sprite_0053.png", article: "0"},
    {src: "assets/Shaded/sprite_0054.png", article: "0"},
    {src: "assets/Shaded/sprite_0055.png", article: "0"},
    {src: "assets/Shaded/sprite_0056.png", article: "0"},
    {src: "assets/Shaded/sprite_0057.png", article: "0"},
    {src: "assets/Shaded/sprite_0058.png", article: "0"},
    {src: "assets/Shaded/sprite_0059.png", article: "0"},
    {src: "assets/Shaded/sprite_0060.png", article: "0"},
    {src: "assets/Shaded/sprite_0061.png", article: "0"},
    {src: "assets/Shaded/sprite_0062.png", article: "0"},
    {src: "assets/Shaded/sprite_0063.png", article: "0"},
    {src: "assets/Shaded/sprite_0064.png", article: "0"},
    {src: "assets/Shaded/sprite_0065.png", article: "0"},
    {src: "assets/Shaded/sprite_0066.png", article: "0"},
    {src: "assets/Shaded/sprite_0067.png", article: "0"},
    {src: "assets/Shaded/sprite_0068.png", article: "0"},
    {src: "assets/Shaded/sprite_0069.png", article: "0"},
    {src: "assets/Shaded/sprite_0070.png", article: "0"},
    {src: "assets/Shaded/sprite_0071.png", article: "0"},
    {src: "assets/Shaded/sprite_0072.png", article: "0"},
    {src: "assets/Shaded/sprite_0073.png", article: "0"},
    {src: "assets/Shaded/sprite_0074.png", article: "0"},
    {src: "assets/Shaded/sprite_0075.png", article: "0"},
    {src: "assets/Shaded/sprite_0076.png", article: "0"},
    {src: "assets/Shaded/sprite_0077.png", article: "0"},
    {src: "assets/Shaded/sprite_0078.png", article: "0"},
    {src: "assets/Shaded/sprite_0079.png", article: "0"},
    {src: "assets/Shaded/sprite_0080.png", article: "0"},
    {src: "assets/Shaded/sprite_0081.png", article: "0"},
    {src: "assets/Shaded/sprite_0082.png", article: "0"},
    {src: "assets/Shaded/sprite_0083.png", article: "0"},
    {src: "assets/Shaded/sprite_0084.png", article: "0"},
    {src: "assets/Shaded/sprite_0085.png", article: "0"},
    {src: "assets/Shaded/sprite_0086.png", article: "0"},
    {src: "assets/Shaded/sprite_0087.png", article: "0"},
    {src: "assets/Shaded/sprite_0088.png", article: "0"},

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
    const { useState, useEffect } = React;
    const [items, setItems]=useState(p.items);
    const [tempItems, setTempItems]=useState([]);
    const [pageStart, setPageStart]=useState(0);
    const [pageOutStart, setPageOutStart]=useState(false);
    const [pageOutEnd, setPageOutEnd]=useState(false);

    useEffect(() => {
        var tItems=items.slice(pageStart,pageStart+5);
        setTempItems(tItems);
    }, [pageStart]);

    const [checkTempItems,setCheckTempItems] = useState(false);

    useEffect(() => {
        if(tempItems.length>0) setCheckTempItems(true);
    }, [tempItems]);

    const nextPage = () => {
        if(items.length<6) return;
        if(pageStart>=items.length-5) {
            var tempList = items.slice(pageStart, items.length);
            setTempItems(tempList);
            setPageOutEnd(true);
            return;
        };
        setPageOutEnd(false);
        setPageOutStart(false);
        setPageStart(pageStart+5);
        var tempList = items.slice(pageStart, pageStart+5);
        setTempItems(tempList);
    }

    const prevPage = () => {
        if(items.length<6) return;
        if(pageStart<=0) {
            var tempList = items.slice(pageStart, pageStart+items.length);
            setTempItems(tempList);
            setPageOutStart(true);
            return;
        };
        setPageOutStart(false);
        setPageOutEnd(false);
        setPageStart(pageStart-5);
        var tempList = items.slice(pageStart, pageStart+5);
        setTempItems(tempList);
    }

    return (
        <div className="content-list">
            {tempItems && tempItems.map((item, index) => (
                <ContentItem key={index} article={item.article} src={item.src} />
            ))}

            {!checkTempItems && <div>Loading..</div>}

            <div className="paginator"><Paginator pageOutStart={pageOutStart} pageOutEnd={pageOutEnd} nextPage={nextPage} prevPage={prevPage} /></div>
        </div>
    )
}


const Paginator = ({nextPage, prevPage, pageOutStart, pageOutEnd}) => {
    return (
        <div className="pagi-buttons">
            {!pageOutStart && <button onClick={prevPage}>Prev Page</button>}
            {!pageOutEnd && <button onClick={nextPage}>Next Page</button>}
           
        </div>
    );
}


ReactDOM.render(<Content items={articleList} />, document.getElementById("root"));
