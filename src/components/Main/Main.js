import './Main.css';
import {Route, Switch} from "react-router-dom";
import FamilyForm from "../FamilyForm/FamilyForm";
import FamilyFormPreview from "../FamilyFormPreview/FamilyFormPreview";

function Main() {
  return (
    <main className="content">
      <Switch>
        <Route path='/' exact>
          <FamilyForm />
        </Route>

        <Route path='/preview'>
          <FamilyFormPreview />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
