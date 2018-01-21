import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

configure({ adapter: new Adapter() });
