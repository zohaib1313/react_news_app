import "./App.css";
import React, { Component } from "react";
import AppBar from "./components/AppBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class MyApp extends Component {
  state = {
    progress: 0,
  };
  setProgress = (p) => {
    this.setState({ progress: p });
  };

  render() {
    document.body.style.backgroundColor = "#b4b4b4";

    return (
      <>
        <Router>
          <div>
            <AppBar />

            <LoadingBar
              progress={this.state.progress}
              color="#f11946"
              height={3}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    category="general"
                  />
                }
              />
              <Route
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    category="business"
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    category="general"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    category="health"
                  />
                }
              />
              <Route
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    category="science"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    category="sports"
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    category="technology"
                  />
                }
              />

              <Route
                path="*"
                element={
                  <div className="text-center">
                    <h2>
                      <strong>Page not found</strong>
                    </h2>
                  </div>
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
