import React from "react";

class Ytdl extends React.Component {
  state = {
    watch: false
  };

  toWatch() {
    this.state.watch = this.state.watch == true ? false : true;
    return this.state.watch;
  }

  render() {
    var id = this.props.info;
    console.log(id);

    if (this.state.watch == true) {
      return (
        <div align="center">
          Youtube Downloader v1 ALPHA
          <form method="get" action="https://0ojnh.sse.codesandbox.io/video">
            <input type="text" name="URL" />
            <button type="submit">Watch</button>
          </form>
          <form method="get" action="https://0ojnh.sse.codesandbox.io/download">
            <input type="text" name="URL" />
            <button type="submit">Download</button>
          </form>
        </div>
      );
    }
  }
}

export default Ytdl;
