import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./admin/users";
import { PostCreate, PostEdit, PostList } from "./admin/posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./admin/Dashboard";
import authProvider from "./authProvider";

const initialState = {
  theme: "dark",
  grid: 5,
};
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    initialState={initialState}
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    disableTelemetry
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
