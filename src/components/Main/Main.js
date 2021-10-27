import { nanoid } from 'nanoid';
import './Main.css';
import {Route, Switch} from "react-router-dom";
import FamilyForm from "../FamilyForm/FamilyForm";
import FamilyFormPreview from "../FamilyFormPreview/FamilyFormPreview";
import {useState} from "react";

function Main() {
  const [parent, setParent] = useState({
    name: '',
    age: ''
  })
  const [children, setChildren] = useState([])

  const addChild = (child) => {
    setChildren([...children, {
      id: nanoid(),
      ...child
    }])
  }

  const removeChild = (id) => setChildren(children.filter(el => el.id !== id));

  const handleParentChange = (evt) => {
    const {name, value} = evt.target;
    setParent((state) => ({
      ...state,
      [name]: value
    }))
  }

  const handleChildrenChange = (evt) => {
    const {name, value} = evt.target;
    setChildren({
      [name]: value
    })
  }

  return (
    <main className="content">
      <Switch>
        <Route path='/' exact>
          <FamilyForm
            parent={parent}
            children={children}
            addChild={addChild}
            removeChild={removeChild}
            handleParentChange={handleParentChange}
            handleChildrenChange={handleChildrenChange}
          />
        </Route>

        <Route path='/preview'>
          <FamilyFormPreview
            parent={parent}
            children={children}
          />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
