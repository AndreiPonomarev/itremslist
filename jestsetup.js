import { shallow, render, mount } from 'enzyme';
import { BrowserRouter } from "react-router-dom";

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.BrowserRouter = BrowserRouter

console.error = message => {
   throw new Error(message);
};