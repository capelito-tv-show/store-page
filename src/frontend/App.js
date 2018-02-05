import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./client/shared/view/Header";
import Footer from "./client/shared/view/Footer";
import Home from "./client/home/Home";
import Menu from './client/menu/containers/Menu';
import Access from "./client/access/Access";
import Gallary from "./client/gallary/Gallary";
import CommercialTransaction from "./client/privacy/about_buisiness";
import News from "./client/articles/News";
import AddMenu from './cms/menus/add-menu';
import { createJunctionTemplate, createPageTemplate } from "junctions";


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <div className="router">
//             <Header />
//             <Route exact path="/" component={Home} />
//             <Route path="/menu" component={Menu} />
//             <Route path="/access" component={Access} />
//             <Route path="/gallary" component={Gallary} />
//             <Route path="/Commercial" component={CommercialTransaction} />
//             <Route path="/news" component={News} />
//             <Route path="/admin/menu" component={AddMenu} />
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends Component {
  renderContent() {
  let { junction } = this.props;
  let Component =
    this.props.junction.activeChild &&
    this.props.junction.activeChild.component;

  if (!Component) {
    return <h1>404: Page Not Found</h1>;
  } else {
    return <Component page={this.props.junction.activeChild} />;
  }
}

render() {
  return(
    <div className="App">
      <Header />
      {this.renderContent()}
    </div>
  );
}

}

export const AppJunctionTemplate = createJunctionTemplate({
  children: {
    "/": createPageTemplate({
      title: "Junctions",
      component: () => (
        <div>        </div>
      )
    }),
    "/Menu": createPageTemplate({
      title: "Junctions API Reference",
      component: Menu
    })
  },
  component: App
});
