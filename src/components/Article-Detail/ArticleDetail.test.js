import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ArticleDetail from './ArticleDetail';
import en from '../../locales/en.json';

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
    Component = shallow(
      <ArticleDetail location={location} />,
      { context: { locale: en } },
    ).first()
      .shallow()
      .find('ArticleDetail')
      .shallow();
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});

