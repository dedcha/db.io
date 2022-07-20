



let articleList = [

    {src: "assets/skip.png", article: "ParagraphParagraphsarethegroupofsentencescombinedtogether,aboutacertaintopic.Itisaveryimportantformofwritingaswewritealmosteverythinginparagraphs,beitananswer,essay,story,emails,etc.Wecansaythatawell-structuredparagraphistheessenceofgoodwriting.Thepurposesoftheparagrapharetogiveinformation,toexplainsomething,totellastory,andtoconvincesomeonethatourideaisright.Paragraphsareblocksoftextualcontentthatsegmentoutalargerpieceofwriting—stories,novels,articles,creativewriting,orprofessionalwritingportions—makingitlesscomplicatedtoreadandunderstand.Excellentparagraphsareanavailablewritingskillforplentyoftypesofliterature,andproperwriterscansubstantiallybeautifytheclarityoftheirnews,essays,orfictionwritingwhilstconstructingnicely."},
    {src: "", article: "second"},
    {src: "assets/skip.png", article: "first"},
    {src: "assets/slide.png", article: "second"},
    {src: "assets/skip.png", article: "first"},
    {src: "assets/slide.png", article: "3"},
    {src: "assets/skip.png", article: "ParagraphParagraphsarethegroupofsentencescombinedtogether,aboutacertaintopic.Itisaveryimportantformofwritingaswewritealmosteverythinginparagraphs,beitananswer,essay,story,emails,etc.Wecansaythatawell-structuredparagraphistheessenceofgoodwriting.Thepurposesoftheparagrapharetogiveinformation,toexplainsomething,totellastory,andtoconvincesomeonethatourideaisright.Paragraphsareblocksoftextualcontentthatsegmentoutalargerpieceofwriting—stories,novels,articles,creativewriting,orprofessionalwritingportions—makingitlesscomplicatedtoreadandunderstand.Excellentparagraphsareanavailablewritingskillforplentyoftypesofliterature,andproperwriterscansubstantiallybeautifytheclarityoftheirnews,essays,orfictionwritingwhilstconstructingnicely."},
    {src: "", article: "second"},
    {src: "assets/skip.png", article: "4"},
    {src: "assets/slide.png", article: "5"},
    {src: "assets/skip.png", article: "6"},
    {src: "assets/slide.png", article: "7"},
    {src: "assets/skip.png", article: "ParagraphParagraphsarethegroupofsentencescombinedtogether,aboutacertaintopic.Itisaveryimportantformofwritingaswewritealmosteverythinginparagraphs,beitananswer,essay,story,emails,etc.Wecansaythatawell-structuredparagraphistheessenceofgoodwriting.Thepurposesoftheparagrapharetogiveinformation,toexplainsomething,totellastory,andtoconvincesomeonethatourideaisright.Paragraphsareblocksoftextualcontentthatsegmentoutalargerpieceofwriting—stories,novels,articles,creativewriting,orprofessionalwritingportions—makingitlesscomplicatedtoreadandunderstand.Excellentparagraphsareanavailablewritingskillforplentyoftypesofliterature,andproperwriterscansubstantiallybeautifytheclarityoftheirnews,essays,orfictionwritingwhilstconstructingnicely."},
    {src: "", article: "8"},
    {src: "assets/skip.png", article: "9"},
    {src: "assets/slide.png", article: "10"},
    {src: "assets/skip.png", article: "11"},
    {src: "assets/slide.png", article: "12"},

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

    useEffect(() => {
        var tItems=items.slice(0,5);
        setTempItems(tItems);
        console.log(tempItems, items);
    }, []);

    const [checkTempItems,setCheckTempItems] = useState(false);

    useEffect(() => {
        if(tempItems.length>0) setCheckTempItems(true);
    }, [tempItems]);

    const nextPage = () => {
        if(items.length<5) return;
        if(pageStart>=items.length-5) {
            var tempList = items.slice(pageStart, items.length);
            setTempItems(tempList);
            return;
        };
        setPageStart(pageStart+5);
        var tempList = items.slice(pageStart, pageStart+5);
        setTempItems(tempList);
    }

    const prevPage = () => {
        if(items.length<5) return;
        if(pageStart<=0) {
            var tempList = items.slice(pageStart, pageStart+items.length);
            setTempItems(tempList);
            return;
        };
        setPageStart(pageStart-5);
        var tempList = items.slice(pageStart, pageStart+5);
        setTempItems(tempList);
    }

    return (
        <div className="content-list">
            {tempItems && tempItems.map(item => (
                <ContentItem article={item.article} src={item.src} />
            ))}

            {!checkTempItems && <div>Loading..</div>}

            <div className="paginator"><Paginator nextPage={nextPage} prevPage={prevPage} /></div>
        </div>
    )
}


const Paginator = ({nextPage, prevPage}) => {
    return (
        <div className="pagi-buttons">
            <button onClick={prevPage}>Prev Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
}


ReactDOM.render(<Content items={articleList} />, document.getElementById("root"));
