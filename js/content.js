



let articleList = [
    {src: "assets/Shaded/sprite_0052.png", article: "Intuitive design is how we give the user new superpowers-Jared Spool"},
    {src: "assets/Shaded/sprite_0053.png", article: "Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.” – John Chris Jones"},
    {src: "assets/Shaded/sprite_0054.png", article: "“To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success” – Dr. Christopher Dayagdag"},
    {src: "assets/Shaded/sprite_0055.png", article: "“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs"},
    {src: "assets/Shaded/sprite_0056.png", article: "“If you think math is hard, try web design.” – Trish Parr"},
    {src: "assets/Shaded/sprite_0057.png", article: "“Styles come and go. Good design is a language, not a style.” – Massimo Vignelli"},
    {src: "assets/Shaded/sprite_0058.png", article: "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc"},
    {src: "assets/Shaded/sprite_0059.png", article: "“Digital design is like painting, except the paint never dries.” – Neville Brody"},
    {src: "assets/Shaded/sprite_0060.png", article: "“You don’t think your way to creative work. You work your way to creative thinking.” – George Nelson"},
    {src: "assets/Shaded/sprite_0061.png", article: "“Learning to code is useful no matter what your career ambitions are.” – Arianna Huffington"},
    {src: "assets/Shaded/sprite_0062.png", article: "“The problem is there are no simple ‘right’ answers for most Web design questions (at least not for the important ones). What works is good, integrated design that fills a need – carefully thought out, well-executed, and tested.” – Steve Krug"},
    {src: "assets/Shaded/sprite_0063.png", article: "“Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.” – Irene Au"},
    {src: "assets/Shaded/sprite_0064.png", article: "“Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.” – Leland Dieno"},
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
        if(pageStart>items.length-5) {
            setPageStart(items.length-5);
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
        if(pageStart<0) {
            setPageStart(0);
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
