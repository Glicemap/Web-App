import React, { Component } from "react";
import $ from "jquery";
import ReactTable from "react-table";

const style = {
  container: {
    position: "relative"
  },

  refresh: {
    cursor: "pointer",
    width: "75px"
  }
};

class KKTable extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      timestamp: "",
      selectAll: false,
      data: [],
      checked: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSingleCheckboxChange = this.handleSingleCheckboxChange.bind(
      this
    );
  }

  handleChange = () => {
    var selectAll = !this.state.selectAll;
    this.setState({ selectAll: selectAll });
    var checkedCopy = [];
    this.state.data.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });
    this.setState({
      checked: checkedCopy
    });
  };

  handleSingleCheckboxChange = index => {
    console.log(index);

    var checkedCopy = this.state.checked;
    checkedCopy[index] = !this.state.checked[index];
    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }

    this.setState({
      checked: checkedCopy
    });
  };

  componentDidMount() {
    const data2 = [
      { one: "hi0", two: "two0", three: "three0" },
      { one: "hi1", two: "two1", three: "three1" },
      { one: "hi2", two: "two2", three: "three2" },
      { one: "hi3", two: "two3", three: "three3" },
      { one: "hi4", two: "two4", three: "three4" },
      { one: "hi5", two: "two5", three: "three5" },
      { one: "hi6", two: "two6", three: "three6" },
      { one: "hi7", two: "two7", three: "three7" },
      { one: "hi8", two: "two8", three: "three8" }
    ];

    var checkedCopy = [];
    var selectAll = this.state.selectAll;
    data2.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });

    this.setState({
      data: data2,
      checked: checkedCopy,
      selectAll: selectAll
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <ReactTable
            data={this.state.data}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] !== undefined
                ? String(row[filter.id])
                    .toLowerCase()
                    .includes(filter.value.toLowerCase())
                : false
            }
            columns={[
              {
                Header: "One",
                accessor: "one"
              },
              {
                Header: (
                  <input
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.selectAll}
                  />
                ),
                Cell: row => (
                  <input
                    type="checkbox"
                    defaultChecked={this.state.checked[row.index]}
                    checked={this.state.checked[row.index]}
                    onChange={() => this.handleSingleCheckboxChange(row.index)}
                  />
                ),
                sortable: false,
                filterable: false
              },
              {
                Header: "Two",
                accessor: "two"
              },
              {
                Header: "Three",
                accessor: "three"
              }
            ]}
            className="-striped "
          />
        </div>
      </div>
    );
  }
}

export default KKTable;