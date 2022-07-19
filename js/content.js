

class Content extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            pageIndexStart: 0,
            pageIndexEnd: 5,
            articles: props.articles,
            filteredList: props.articles.length > 5 ? props.articles.slice(0, 5):
            props.articles,
        };
        
    }


    showNext = () => {

        //if(this.state.articles.length<5) return;
        if(this.state.pageIndexStart>=this.state.articles.length) {
            console.log(this.state.pageIndexStart, "end of index");
            this.setState({
                pageIndexStart: this.state.articles.length-5
            });
            return;
        }

        this.setState(
            {
                pageIndexStart: this.state.pageIndexStart+5
            }
        );

        let tempList = this.state.articles.slice(this.state.pageIndexStart, this.state.pageIndexEnd);

        this.setState({
            filteredList: tempList
        });
        console.log(this.state.pageIndexStart);
    }

    showPrev = () => {

        //if(this.state.articles.length<5) return;

        if(this.state.pageIndexStart<=0) return;

        this.setState(prevstate => (
            {
                pageIndexStart: prevstate.pageIndexStart-5
            }
        ));

        let tempList = this.state.articles.splice(this.state.pageIndexStart, this.state.pageIndexEnd);

        this.setState({
            filteredList: tempList
        });
        console.log(this.state.pageIndexStart);
    }
    render() {

        return (
            <div>
                {this.state.filteredList.map(item => (
                        <article>{item}</article>
                    )
                )}
                <div className="paginator">
                    <div><button className="prev-button" onClick={this.showPrev}>Prev--</button></div>
                    <div><button className="next-button" onClick={this.showNext}>next--</button></div>
                </div>
            </div>
        );
        
    }
}


let articleList = new Array();

for(let i=0;i<50;i++) {
    articleList.push(i);
}

console.log(articleList.length);

ReactDOM.render(<Content articles={articleList} />, document.getElementById("content"));