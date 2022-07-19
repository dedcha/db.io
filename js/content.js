
class Content extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            pageIndexStart: 0,
            pageIndexEnd: 5,
            articles: props.articles,
            filteredList: props.articles.length > 5 ? props.articles.splice(0, 5):
            props.articles,
        };
        
        this.init();
    }

    init = () => {

         this.setState({
            filteredList: this.state.articles.splice(this.state.pageIndexStart, this.state.pageIndexEnd)
       });
    }


    showNext = () => {

        //if(this.state.articles.length<5) return;
        if(this.state.pageIndexStart>=this.state.articles.length) return;

        this.setState(prevstate => (
            {
                pageIndexStart: prevstate.pageIndexStart+5
            }
        ));

        let tempList = this.state.articles.splice(this.state.pageIndexStart, this.state.pageIndexEnd);

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
                <div><button className="prev-button" onClick={this.showPrev}>Prev--</button></div>
                <div><button className="next-button" onClick={this.showNext}>next--</button></div>
            </div>
        );
        
    }
}


let articleList = [
    "1Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "1ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "2asjdhkajshdhahsdhashkdhahkjdahkh",
    "2Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "3ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "3asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "4ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "4asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "5Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "5ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "6asjdhkajshdhahsdhashkdhahkjdahkh",
    "6Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "7asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "7asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "8ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "8asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "a9sjdhkajshdhahsdhashkdhahkjdahkh",
    "9Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "10asjdhkajshdhahsdhashkdhahkjdahkh",
    "10Lorem ipsum dolor sit amet consectetur adipisicing elit.Quide",
    "ggegjksadggjksdg jhdfkljshdfhslkdfl dslfkdflsdfkjsfs slkdfjs",
    "asjkdhhashdalhskdlklaksjdjajslkaskjdkads",
    "asjdhkajshdhahsdhashkdhahkjdahkh",

];

ReactDOM.render(<Content articles={articleList} />, document.getElementById("content"));