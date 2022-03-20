import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import {Title} from "../elements"
import { useToggle } from "../hooks";
import { MySpaceUser, AllList, MyExp, MyPortfolio, MySkill, MyTimeLine, MyPage, Dpolio } from "../components";
import { Tabs, MiniTabs } from "../NavComponents";
import MyArtWork from "../components/Posts/MyArtWork";
import EditMySpace from "./EditMySpace";



const MySpace = (props) => {


  return (
<>
<div className='flex flex-row'> 

     </div>

  <Switch>
        <Route exact path="/myspace" component={MyPage} />
        <Route exact path="/myspace/editmyspace" component={EditMySpace} />
        <Route exact path="/myspace/dpolio" component={Dpolio} />
        </Switch>
      </>



  );
};

export default MySpace;