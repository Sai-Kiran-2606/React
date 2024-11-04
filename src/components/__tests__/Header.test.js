import configureMockStore from 'redux-mock-store';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {appStore} from "../../utils/appStore";
import Header from "../Header";

const mockStore = configureMockStore();
const store = mockStore({});

test("should render the header component", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
});