import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";
import NotFound from "./screens/notFound";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* Rota para a tela de listagem de planetas */}
            <Route exact path="/" component={PlanetsScreen} />
            {/* Rota para a tela de detalhes de um planeta específico */}
            <Route exact path="/planet/:id" component={PlanetScreen} />
            {/* Rota para lidar com URLs não correspondidas */}
            <Route path="*" >
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;