// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/ideas/new" page={NewIdeaPage} name="newIdea" />
      <Route path="/ideas/{id:Int}/edit" page={EditIdeaPage} name="editIdea" />
      <Route path="/ideas/{id:Int}" page={IdeaPage} name="idea" />
      <Route path="/ideas" page={IdeasPage} name="ideas" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
