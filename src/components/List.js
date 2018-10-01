import React, { Component }  from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { articles: state.article.articles };
};
class ConnectedList extends Component {
    renderList() {
    const list = [];

    this.props.articles.map(el => (
      list.push(<li className="list-group-item" key={el.id}>{el.title}</li>)
    ));
  return list;
    }
    render() {
        return (<ul className="list-group list-group-flush" onClick={this.props.onClick}>
            {this.renderList()}
        </ul>);
    }
}
const List = connect(mapStateToProps)(ConnectedList);
export default List;
