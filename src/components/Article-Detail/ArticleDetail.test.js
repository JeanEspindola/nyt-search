import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ArticleDetail from './ArticleDetail';

describe('ArticleDetail', () => {
  let Component;
  let location;
  const article = {
    headline: {
      main: 'test',
    },
    pub_date: '2018-01-14',
    snippet: 'test test test',
    web_url: 'www.test.com',
  };

  it('renders ArticleDetail without crashing', () => {
    location = {
      article,
    };
    Component = shallow(<ArticleDetail location={location} />);
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('renders ArticleDetail with no props', () => {
    const text = 'No details to show.';
    location = {
      article: undefined,
    };

    Component = shallow(<ArticleDetail location={location} />);
    expect(Component.find('p').text()).toBe(text);
  });
});

